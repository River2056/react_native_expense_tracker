import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import AddExpense from './src/component/AddExpense';
import Header from "./src/component/Header";
import List from "./src/component/List";
import WalletModal from "./src/component/WalletModal";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: '',
      modalVisible: false,
      expense: []
    }
  }

  componentDidMount = async () => {
    const wallet = await AsyncStorage.getItem('wallet');
    const walletObj = JSON.parse(wallet);
    this.setState(() => ({ wallet: walletObj.wallet, modalVisible: walletObj.modalVisible, expense: walletObj.expense }));
  }

  componentDidUpdate = () => {
    const wallet = JSON.stringify(this.state);
    AsyncStorage.setItem('wallet', wallet);
  }

  addExp = async record => {
    const newWallet = this.state.wallet - record.inputExp;
    await this.setState(() => ({ wallet: newWallet, expense: [record, ...this.state.expense] }));
  }

  setWallet = txt => {
    this.setState(() => ({ wallet: txt }));
  }

  toggleModal = () => {
    this.setState(() => ({ modalVisible: !this.state.modalVisible }));
  }

  clearData = () => {
    this.setState(() => ({ expense: [] }));
  }

  render() {
    return (
      <View style={styles.container}>
        <AddExpense addExp={this.addExp} />
        <View style={{ flex: 0.3 }}>
          <TouchableOpacity
            onPress={() => this.setState(() => ({ modalVisible: !this.state.modalVisible }))}
          >
            <Text style={styles.addBtn}>SET WALLET</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.3 }}>
          <TouchableOpacity
            onPress={this.clearData}
          >
            <Text style={styles.addBtn}>CLEAR DATA</Text>
          </TouchableOpacity>
        </View>
        <Header wallet={this.state.wallet} />
        <List expense={this.state.expense} />
        <WalletModal
          toggleModal={this.toggleModal}
          modalVisible={this.state.modalVisible}
          setWallet={this.setWallet}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
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
