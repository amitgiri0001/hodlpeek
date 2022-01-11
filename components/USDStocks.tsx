import React from 'react';
import {Title} from 'react-native-paper';
import Widget from './Widget';

const USDStocks = () => {
  return (
    <Widget
      title="USD Stocks"
      subtitle="IBKR"
      icon={require('../assets/ibkr.jpeg')}
      amount={'2000'}>
      <Title>2000</Title>
    </Widget>
  );
};

export default USDStocks;
