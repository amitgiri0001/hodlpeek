import React, {ReactNode} from 'react';
import {View, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import {Avatar, Card, Text, Title} from 'react-native-paper';
import {useTheme} from 'react-native-paper';
import theme from '../Theme';

const Widget = ({
  title,
  subtitle,
  icon,
  children,
  amount,
}: {
  title: string;
  subtitle: string;
  icon: ImageSourcePropType;
  children: ReactNode;
  amount: String;
}) => {
  const {widget, colors} = useTheme() as typeof theme;

  const styles = StyleSheet.create({
    card: {
      //flexGrow: 4,
      height: 120,
      borderRadius: 0,
      borderColor: '#FFFFF',
      elevation: 0,
      borderBottomWidth: 1,
      borderBottomColor: '#E0E0E0',
      borderLeftWidth: 0,
    },

    cardContents: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    content: {
      alignItems: 'stretch',
    },
    labelText: {
      color: colors.secondaryFontColor,
    },
    valueText: {
      fontWeight: '900',
      textAlign: 'center',
    },
    cardRight: {
      fontSize: 18,
      paddingRight: 20,
      paddingBottom: 20,
    },
    cardLeft: {
      fontSize: 15,
    },
  });

  return (
    <Card style={styles.card}>
      <Card.Title
        title={title}
        subtitle={subtitle}
        titleStyle={{fontSize: 15}}
        left={props => (
          <Avatar.Icon
            {...props}
            icon={() => <Image source={icon} style={widget.titleImage} />}
          />
        )}
        right={() => <Title style={styles.cardRight}>{amount}</Title>}
      />
      <View style={styles.cardContents}>
        <Card.Content style={styles.content}>
          <Text style={styles.labelText}>P&L {-300}</Text>
          <Text style={styles.valueText}>{3}%</Text>
        </Card.Content>
        <Card.Content style={styles.content}>
          <Text style={styles.labelText}>Invested</Text>
          <Text style={styles.valueText}>{2000}</Text>
        </Card.Content>
      </View>
    </Card>
  );
};

export default Widget;
