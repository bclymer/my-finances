import React from 'react';
import { StatusBar, StyleSheet, View, Platform } from 'react-native';
import AppWithNavigationState from './src/navigation/RootNavigation';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/redux';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

const navMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav);

export const addListener = createReduxBoundAddListener('root');

const persistConfig = {
  key: 'root',
  storage,
};

export default class App extends React.Component {
  render() {
    const persistedReducer = persistReducer(persistConfig, reducers);
    const store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk, navMiddleware));
    const persistor = persistStore(store);
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppWithNavigationState />
          </View>
        </PersistGate>
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
