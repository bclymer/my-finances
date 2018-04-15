import { RootStackNavigator } from '../navigation/RootNavigation';
import { NavigationActions } from 'react-navigation';
import { AnyAction } from 'redux';

const router = RootStackNavigator.router;

const initialNavState = router.getStateForAction(
  NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName: 'Main',
      }),
    ],
  })
);

const NavReducer = (state = initialNavState, action: AnyAction) => {
  return router.getStateForAction(action, state) || state;
};

export default NavReducer;
