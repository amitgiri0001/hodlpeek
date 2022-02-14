import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Appbar, Provider as PaperProvider} from 'react-native-paper';
import theme from './Theme';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Appbar.Header style={styles.title}>
          <Appbar.Content
            title="HodlPeek"
            subtitle="Peek your Profile"
            titleStyle={styles.brandName}
          />
        </Appbar.Header>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          {/* https://reactnative.dev/docs/navigation */}
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
  title: {
    borderWidth: 0,
    elevation: 0,
  },
  brandName: {
    color: theme.colors.primaryFontColorDark,
    fontSize: 23,
  },
});

export default App;
