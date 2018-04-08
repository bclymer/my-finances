import React from 'react';
import { ScrollView, Text, Button } from 'react-native';
import { increment, decrement } from './actions';
import { AppState } from '../../redux/';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationStackScreenOptions, NavigationScreenProps } from 'react-navigation';
import { NavigationProps } from '../../navigation/RootNavigation';

export interface StateProps {
  readonly count: number;
}

export interface ActionProps {
  readonly increment: () => void;
  readonly decrement: () => void;
}

class CreditCardsScreen extends React.Component<StateProps & ActionProps & NavigationProps, {}> {
  static navigationOptions = (navigation: NavigationScreenProps): NavigationStackScreenOptions => {
    const { params } = navigation.navigation.state;
    return {
      title: 'Credit Cards',
      // tslint:disable-next-line jsx-no-lambda
      headerRight: <Button title="Info" onPress={() => params.handleSave()} />,
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      handleSave: () => this.saveDetails(),
    });
  }

  saveDetails = () => {
    alert('Save Details');
  };

  render() {
    return (
      <ScrollView>
        <Text>{this.props.count}</Text>
        <Button title="Increment" onPress={this.props.increment} />
        <Button title="Decrement" onPress={this.props.decrement} />
      </ScrollView>
    );
  }
}

function mapStateToProps(state: AppState): StateProps {
  return {
    count: state.workouts.count,
  };
}

function mapDispatchToProps(dispatch): ActionProps {
  return {
    increment: bindActionCreators(increment, dispatch),
    decrement: bindActionCreators(decrement, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreditCardsScreen);
