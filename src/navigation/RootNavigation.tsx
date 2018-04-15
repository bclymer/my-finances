import React from 'react';
import { StackNavigator, addNavigationHelpers, NavigationScreenProp } from 'react-navigation';
import { connect } from 'react-redux';
import MainTabNavigator from './MainTabNavigator';
import { AppState, Dispatch } from '../redux';
import { addListener } from '../../App';

export interface NavigationProps {
  navigation: NavigationScreenProp<any>;
}

export const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
    },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
    initialRouteName: 'Main',
  }
);

const AppWithNavigationState = ({ dispatch, nav }: { dispatch: Dispatch; nav: any }) => (
  <RootStackNavigator navigation={addNavigationHelpers({ dispatch, state: nav, addListener })} />
);

const mapStateToProps = (state: AppState) => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
