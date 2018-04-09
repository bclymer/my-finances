import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { CreditCard as CreditCardType } from '../screens/creditCards/reducer';

interface Props {
  card: CreditCardType;
  isEditable: boolean;
  onCardUpdated: (card: CreditCardType) => void;
}

export default class CreditCard extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
    this.nameUpdated = this.nameUpdated.bind(this);
  }

  nameUpdated(text: string) {
    const { card } = this.props;
    card.name = text;
    this.props.onCardUpdated(card);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Name…"
          editable={this.props.isEditable}
          value={this.props.card.name}
          onChangeText={this.nameUpdated}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: 'red',
  },
  textInput: {
    width: '100%',
  },
});
