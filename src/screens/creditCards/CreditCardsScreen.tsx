import React from 'react';
import { ScrollView } from 'react-native';

export default class CreditCardsScreen extends React.Component<{}, {}> {
  static navigationOptions = {
    title: 'Credit Cards',
  };

  render() {
    return <ScrollView />;
  }
}
