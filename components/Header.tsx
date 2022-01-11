import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';
import {CURRENCIES} from '../constants/currencies';
import {formatCash} from '../util';

const Header = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <Card>
          <Card.Content>
            <Paragraph style={styles.text}>MY NET INVESTMENT</Paragraph>
            <Title style={styles.text}>
              ${formatCash(2200000, CURRENCIES.USD.name)}
            </Title>
          </Card.Content>
        </Card>
        <View style={styles.container}>
          <Card style={styles.card}>
            <Card.Content>
              <Paragraph style={styles.text}>INR</Paragraph>
              <Title style={styles.text}>
                ₹{formatCash(220000, CURRENCIES.INR.name)}
              </Title>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
              <Paragraph style={styles.text}>USD</Paragraph>
              <Title style={styles.text}>
                ${formatCash(20000, CURRENCIES.USD.name)}
              </Title>
            </Card.Content>
          </Card>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  mainContainer: {
    width: 300,
    alignSelf: 'center',
    borderBottomWidth: 3,
    borderColor: '#FFE082',
    borderRadius: 3,
    borderWidth: 0,
    margin: 10,
  },
  rootContainer: {
    display: 'flex',
  },
  text: {
    textAlign: 'center',
    fontWeight: '900',
  },
  card: {
    flexGrow: 3,
  },
});

export default Header;
