import React from 'react';
import { ScrollView, Button, Modal, View } from 'react-native';
import { add, edit, cancelEdit, save, updateEdit } from './actions';
import { AppState } from '../../redux/';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationStackScreenOptions, NavigationScreenProps } from 'react-navigation';
import { NavigationProps } from '../../navigation/RootNavigation';
import CreditCard from '../../components/CreditCard';
import { CreditCard as CreditCardType } from './reducer';

export interface StateProps {
  readonly cards: CreditCardType[];
  readonly editingCard: CreditCardType | null;
}

export interface ActionProps {
  readonly add: () => void;
  readonly edit: (cardToEdit: CreditCardType) => void;
  readonly cancelEdit: () => void;
  readonly updateEdit: (card: CreditCardType) => void;
  readonly save: () => void;
}

class CreditCardsScreen extends React.Component<StateProps & ActionProps & NavigationProps, {}> {
  static navigationOptions = (navigation: NavigationScreenProps): NavigationStackScreenOptions => {
    const { params } = navigation.navigation.state;
    return {
      title: 'Credit Cards',
      // tslint:disable-next-line jsx-no-lambda
      headerRight: <Button title="Add" onPress={() => params.addNewCard()} />,
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ addNewCard: () => this.addNewCard() });
  }

  addNewCard = () => {
    this.props.add();
  };

  renderCreditCards() {
    return this.props.cards.map(card => {
      return <CreditCard key={card.id} card={card} isEditable={false} onCardUpdated={this.props.updateEdit} />;
    });
  }

  renderEditingCard() {
    if (this.props.editingCard != null) {
      return (
        <CreditCard
          key={this.props.editingCard.id}
          card={this.props.editingCard}
          isEditable={true}
          onCardUpdated={this.props.updateEdit}
        />
      );
    }
    return null;
  }

  render() {
    return (
      <View>
        <Modal visible={this.props.editingCard != null}>
          {this.renderEditingCard()}
          <Button title="Cancel" onPress={this.props.cancelEdit} />
          <Button title="Save" onPress={this.props.save} />
        </Modal>
        <ScrollView>{this.renderCreditCards()}</ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state: AppState): StateProps {
  return {
    cards: state.creditCards.cards,
    editingCard: state.creditCards.editingCard,
  };
}

function mapDispatchToProps(dispatch): ActionProps {
  return {
    add: bindActionCreators(add, dispatch),
    edit: bindActionCreators(edit, dispatch),
    cancelEdit: bindActionCreators(cancelEdit, dispatch),
    save: bindActionCreators(save, dispatch),
    updateEdit: bindActionCreators(updateEdit, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreditCardsScreen);
