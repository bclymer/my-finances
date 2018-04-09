import React from 'react';
import { ScrollView, Button, Modal, StyleSheet, SafeAreaView } from 'react-native';
import { add, edit, cancelEdit, save, updateEdit, deleteCard } from './actions';
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
  readonly deleteCard: (card: CreditCardType) => void;
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

  constructor(props) {
    super(props);
    this.deleteCard = this.deleteCard.bind(this);
  }

  componentDidMount() {
    this.props.navigation.setParams({ addNewCard: () => this.addNewCard() });
  }

  addNewCard = () => {
    this.props.add();
  };

  deleteCard = (card: CreditCardType) => {
    this.props.deleteCard(card);
  };

  renderCreditCards() {
    return this.props.cards.map(card => {
      return (
        <CreditCard
          key={card.id}
          card={card}
          isEditable={false}
          onCardUpdated={this.props.updateEdit}
          onCardDeleted={this.deleteCard}
        />
      );
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
          onCardDeleted={this.deleteCard}
        />
      );
    }
    return null;
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Modal visible={this.props.editingCard != null}>
          <SafeAreaView style={styles.safeArea}>
            {this.renderEditingCard()}
            <Button title="Cancel" onPress={this.props.cancelEdit} />
            <Button title="Save" onPress={this.props.save} />
          </SafeAreaView>
        </Modal>
        <ScrollView>{this.renderCreditCards()}</ScrollView>
      </SafeAreaView>
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
    deleteCard: bindActionCreators(deleteCard, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreditCardsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    marginTop: 50,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#ddd',
  },
});
