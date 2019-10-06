import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.header__title}>
        Wallet: {props.wallet}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingLeft: 10
  },
  header__title: {
    color: '#fff',
    fontSize: 26,
    height: 40,
  }
});

export default Header;