import React from 'react';
import { ScrollView } from 'react-native';

export default class SpendingScreen extends React.Component<{}, {}> {
  static navigationOptions = {
    title: 'Spending',
  };

  render() {
    return <ScrollView />;
  }
}
