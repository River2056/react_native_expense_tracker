import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class AddExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputExp: null,
      inputTitle: null
    }
  }

  addExp = () => {
    const key = Math.floor(Math.random() * 1000000);
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate() > 10 ? currentDate.getDate() : '0' + currentDate.getDate();
    // const record = `${id} ${month}${date} ${this.state.inputTitle} ${this.state.inputExp}`
    const record = {
      key,
      month,
      date,
      inputTitle: this.state.inputTitle,
      inputExp: this.state.inputExp
    };
    this.props.addExp(record);
  }

  render() {
    return (
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="add title..."
          onChangeText={txt => this.setState(() => ({ inputTitle: txt }))}
          value={this.state.inputTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="enter amount..."
          onChangeText={txt => this.setState(() => ({ inputExp: txt }))}
          value={this.state.inputExp}
        />
        <TouchableOpacity
          onPress={this.addExp}
        >
          <Text style={styles.addBtn}>ADD</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 0.9,
    marginTop: 50,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  input: {
    fontSize: 20,
    color: '#fff',
    paddingRight: 145,
    paddingLeft: 10,
    paddingVertical: 7,
    borderRadius: 5,
    borderColor: '#007ACC',
    borderWidth: 3
  },
  addBtn: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#007ACC',
    borderRadius: 5,
  }
});