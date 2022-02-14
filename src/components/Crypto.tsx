import React from 'react';
import {Title} from 'react-native-paper';
import Widget from './Widget';

const Crypto = () => {
  return (
    <Widget
      title="Crypto"
      subtitle="Hodlnaut"
      icon={require('../assets/crypto.jpeg')}
      amount={'2000'}>
      <Title>2000</Title>
    </Widget>
  );
};

export default Crypto;
