import React from 'react';
import { StatusBar, StyleSheet, View, Platform } from 'react-native';
import AppWithNavigationState from './src/navigation/RootNavigation';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/redux';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

const navMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav);

export const addListener = createReduxBoundAddListener('root');

export default class App extends React.Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, navMiddleware));
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppWithNavigationState />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
