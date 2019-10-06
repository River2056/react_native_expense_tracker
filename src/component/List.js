import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.listStyle}>
        <FlatList
          data={this.props.expense}
          renderItem={({ item }) => {
            return (
              <Text
                key={item.key}
                style={styles.itemText}
              >{`${item.month}${item.date} ${item.inputTitle} ${item.inputExp}`}</Text>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listStyle: {
    flex: 2,
    paddingLeft: 10
  },
  itemText: {
    color: '#fff',
    fontSize: 20,
  }
});