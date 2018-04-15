import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { createReactNavigationReduxMiddleware, createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import ReduxThunk from 'redux-thunk';
import AppWithNavigationState from './src/navigation/RootNavigation';
import reducers, { AppState } from './src/redux';
import storage from 'redux-persist/lib/storage';

const navMiddleware = createReactNavigationReduxMiddleware('root', (state: AppState) => state.nav);

export const addListener = createReduxBoundAddListener('root');

const persistConfig = {
  key: 'root',
  storage,
};

export default class App extends React.Component {
  render() {
    // @ts-ignore
    const persistedReducer = persistReducer(persistConfig, reducers);
    const store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk, navMiddleware));
    const persistor = persistStore(store);
    persistor.purge();
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
