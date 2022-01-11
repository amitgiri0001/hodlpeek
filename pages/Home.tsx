import React from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import {useTheme} from 'react-native-paper';
import MutualFund from '../components/MutualFund';
import USDStocks from '../components/USDStocks';
import Crypto from '../components/Crypto';

const Home = () => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    smallContainer: {
      display: 'flex',
      margin: 10,
      flexDirection: 'column',
      justifyContent: 'space-around',
      borderColor: '#E0E0E0',
      borderWidth: 1,
      borderRadius: 20,
      padding: 10,
    },

    mainContainer: {
      backgroundColor: colors.background,
      minHeight: Dimensions.get('window').height,
    },
  });

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Header />
        <View style={styles.smallContainer}>
          <MutualFund />
          <USDStocks />
          <Crypto />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
