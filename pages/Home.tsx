import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Appbar} from 'react-native-paper';
import Header from '../components/Header';
import {useTheme} from 'react-native-paper';
import MutualFund from '../components/MutualFund';

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
    },
  });

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.smallContainer}>
        <MutualFund />
        <MutualFund />
        <MutualFund />
      </View>
    </View>
  );
};

export default Home;
