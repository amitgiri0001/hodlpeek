import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Header = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        HODLPEEK
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 0,
    paddingHorizontal: 10,
    height: 160,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '400',
  },
  sectionDescription: {
    marginTop: 3,
    fontSize: 10,
    fontWeight: '100',
  },
  //   background: {
  //     paddingBottom: 40,
  //     paddingTop: 96,
  //     paddingHorizontal: 32,
  //   },
  //   text: {
  //     fontSize: 40,
  //     fontWeight: '700',
  //     textAlign: 'center',
  //   },
});

export default Header;
