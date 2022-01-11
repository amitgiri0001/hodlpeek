import React from 'react';
import {Title} from 'react-native-paper';
import Widget from './Widget';

const MutualFund = () => {
  return (
    <Widget
      title="Mutual Funds"
      subtitle="Coin"
      icon={require('../assets/coin.png')}
      amount={'2000'}>
      <Title>2000</Title>
    </Widget>
  );
};

export default MutualFund;
