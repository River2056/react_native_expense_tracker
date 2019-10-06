import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal
} from 'react-native';

export default class WalletModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTitle: null
    }
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modalVisible}
        onRequestClose={() => this.props.toggleModal()}
      >
        <View style={styles.container}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Enter new Budget..."
              onChangeText={txt => this.setState(() => ({ inputTitle: txt }))}
              value={this.state.inputTitle}
            />
            <TouchableOpacity
              onPress={() => {
                this.props.setWallet(this.state.inputTitle);
                this.props.toggleModal()
              }}
            >
              <Text style={styles.addBtn}>SET</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.toggleModal()}
            >
              <Text style={styles.addBtn}>CLOSE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e'
  },
  form: {
    flex: 1,
    marginTop: 50,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  modalBtn: {
    flex: 1
  },
  addBtn: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#007ACC',
    borderRadius: 5,
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
});