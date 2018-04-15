import React from 'react';
import { TextInput, StyleSheet, Button, Picker, View } from 'react-native';
import { CreditCard as CreditCardType } from '../screens/creditCards/reducer';
import { Card, CardContent, CardAction } from './Card';

interface Props {
  card: CreditCardType;
  isEditable: boolean;
  onCardUpdated: (card: CreditCardType) => void;
  onCardDeleted: (card: CreditCardType) => void;
}

export default class CreditCard extends React.Component<Props, {}> {
  constructor(props: Props) {
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

  maybeRenderDeleteButton() {
    if (!this.props.isEditable) {
      return (
        <CardAction>
          <Button title="Delete" onPress={this.cardDeleted} />
        </CardAction>
      );
    }
    return null;
  }

  renderRewardsRows() {
    return this.props.card.rewards.map((reward, index) => {
      return (
        <View key={index} style={{ flex: 1, flexDirection: 'row' }}>
          <TextInput
            // style={styles.textInput}
            placeholder="Cash Rewards"
            editable={this.props.isEditable}
            value={reward.name}
            onChangeText={this.nameUpdated}
          />
          <Picker prompt="Percent" selectedValue={reward.cashBack}>
            {this.renderPercentPickerItems()}
          </Picker>
        </View>
      );
    });
  }

  renderPercentPickerItems() {
    return Array(3).map(index => {
      return <Picker.Item label={index.toString()} value={index} key={index} />;
    });
  }

  render() {
    return (
      <Card styles={styles.card}>
        <CardContent styles={styles.cardContent}>
          <TextInput
            style={styles.textInput}
            placeholder="Name…"
            editable={this.props.isEditable}
            value={this.props.card.name}
            onChangeText={this.nameUpdated}
          />
          {this.renderRewardsRows()}
        </CardContent>
        {this.maybeRenderDeleteButton()}
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    width: '100%',
  },
  textInput: {
    width: '100%',
    alignSelf: 'stretch',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  button: {
    marginRight: 10,
  },
});
