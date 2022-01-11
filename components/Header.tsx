import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Paragraph, Title, useTheme} from 'react-native-paper';
import {CURRENCIES} from '../constants/currencies';
import {formatCash} from '../util';

const Header = () => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'stretch',
    },
    mainContainer: {
      width: 350,
      alignSelf: 'center',
      backgroundColor: '#FFF',
      borderRadius: 20,
    },
    rootContainer: {
      display: 'flex',
      backgroundColor: colors.primary,
      paddingBottom: 5,
    },
    netContainer: {
      borderRadius: 20,
    },
    text: {
      textAlign: 'center',
      fontWeight: '900',
    },
    card: {
      flexGrow: 3,
      borderRadius: 20,
      borderWidth: 0,
      elevation: 0,
    },
  });

  return (
    <View style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <Card style={styles.netContainer}>
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

export default Header;
