/**
 * Author: Jack Lam - jacklam718@gmail.com
 * GitHub: https://github.com/jacklam718
 * License: MIT
 */
/* tslint:disable:max-classes-per-file */

import React from 'react';
import { StyleSheet, View } from 'react-native';

interface CardProps {
  styles?: any;
}

interface CardActionProps {
  separator?: boolean;
}

class Card extends React.PureComponent<CardProps> {
  render() {
    const newStyles = this.props.styles || {};
    return <View style={[styles.container, styles.card, newStyles]}>{this.props.children}</View>;
  }
}

class CardImage extends React.PureComponent<CardProps> {
  render() {
    const newStyles = this.props.styles || {};
    return <View style={[styles.cardImage, newStyles]}>{this.props.children}</View>;
  }
}

class CardTitle extends React.PureComponent<CardProps> {
  render() {
    const newStyles = this.props.styles || {};
    return <View style={[styles.cardTitle, newStyles]}>{this.props.children}</View>;
  }
}

class CardContent extends React.PureComponent<CardProps> {
  render() {
    const newStyles = this.props.styles || {};
    return <View style={[styles.cardContent, newStyles]}>{this.props.children}</View>;
  }
}

class CardAction extends React.PureComponent<CardProps & CardActionProps> {
  render() {
    const newStyles = this.props.styles || {};
    return (
      <View>
        {this.props.separator ? <Separator /> : null}
        <View style={[styles.cardAction, newStyles]}>{this.props.children}</View>
      </View>
    );
  }
}

class Separator extends React.PureComponent<{}> {
  render() {
    return <View style={styles.separator} />;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    margin: 5,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0.3,
    },
  },
  cardImage: {
    flex: 1,
  },
  cardTitle: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
  },
  cardContent: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  cardAction: {
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#E9E9E9',
  },
});

export { Card, CardTitle, CardAction, CardContent, CardImage, Separator };
