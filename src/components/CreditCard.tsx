import React from 'react';
import { TextInput, StyleSheet, Button } from 'react-native';
import { CreditCard as CreditCardType } from '../screens/creditCards/reducer';
import { Card, CardContent, CardAction } from './Card';

interface Props {
  card: CreditCardType;
  isEditable: boolean;
  onCardUpdated: (card: CreditCardType) => void;
  onCardDeleted: (card: CreditCardType) => void;
}

export default class CreditCard extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
    this.nameUpdated = this.nameUpdated.bind(this);
    this.cardDeleted = this.cardDeleted.bind(this);
  }

  nameUpdated(text: string) {
    const { card } = this.props;
    card.name = text;
    this.props.onCardUpdated(card);
  }

  cardDeleted() {
    const { card } = this.props;
    this.props.onCardDeleted(card);
  }

  render() {
    return (
      <Card>
        <CardContent>
          <TextInput
            style={styles.textInput}
            placeholder="Name…"
            editable={this.props.isEditable}
            value={this.props.card.name}
            onChangeText={this.nameUpdated}
          />
        </CardContent>
        <CardAction>
          <Button title="Delete" onPress={this.cardDeleted} />
        </CardAction>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
  },
  textInput: {
    width: '100%',
    height: 50,
  },
  button: {
    marginRight: 10,
  },
});
