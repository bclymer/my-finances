import React from 'react';
import { ScrollView } from 'react-native';

export default class WorkoutsScreen extends React.Component<{}, {}> {
  static navigationOptions = {
    title: 'Workouts',
  };

  render() {
    return <ScrollView />;
  }
}
