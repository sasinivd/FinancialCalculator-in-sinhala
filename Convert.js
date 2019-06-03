import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,ImageBackground,TouchableOpacity,Picker} from 'react-native';
import { Input,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

export default class Convert extends React.Component{
  
  static navigationOptions = {
    title: 'මුදල් පරිවර්තකය',headerTintColor: '#fff',
    headerStyle: {backgroundColor: '#6897e2',},
    headerTitleStyle: {fontSize: 18,},
  };

  constructor(props) {
    super(props)
    this.state = {
      result:null,fromCurrency:"USD",toCurrency:"GBP",amount:1,currencies:[],error:""
    };
  }
  componentDidMount() {
    axios
        .get("http://api.openrates.io/latest")
        .then(response => {
            // Initialized with 'EUR' because the base currency is 'EUR'
            // and it is not included in the response
            const currencyAr = ["EUR"]
            for (const key in response.data.rates) {
                currencyAr.push(key)
            }
            this.setState({ currencies: currencyAr.sort() })
        })
        .catch(err => {
            console.log("Opps", err.message);
        });
  }

  convertHandler = () => {
    if (this.state.fromCurrency !== this.state.toCurrency) {
        axios
            .get(`http://api.openrates.io/latest?base=${this.state.fromCurrency}&symbols=${this.state.toCurrency}`)
            .then(response => {
                const result = this.state.amount * (response.data.rates[this.state.toCurrency]);
                this.setState({ result: result.toFixed(5) })
            })
            .catch(err => {
                console.log("Opps", err.message);
            });
    } else {
        this.setState({ error: "එම මුදල් ඒකකයම පරිවර්තනය කළ නොහැක!" })
    }
  };

  reverseCurrency=()=>{
    from=this.state.fromCurrency;
    this.setState({fromCurrency: this.state.toCurrency})
    this.setState({toCurrency: from})
  }

  render(){
    return(
      <View style={{marginTop:15}}>
        <View style={styles.container}>
          <View style={styles.rowhalf1}>
            <Input 
              onChangeText={amount => this.setState({amount})}
              keyboardType={'numeric'}
              placeholder='1'
            /> 
          </View>
          <View style={styles.rowhalf2}>
            <Picker selectedValue={this.state.fromCurrency} style={{height: 50, width: 140}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({fromCurrency: itemValue})
            }>
              {this.state.currencies.map(cur => (<Picker.Item key={cur} label={cur} value={cur} />))}
            </Picker>  
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.rowhalf1}>
            <Input 
              value={this.state.result}
              editable={false}
            /> 
          </View>
          <View style={styles.rowhalf2}>
            <Picker selectedValue={this.state.toCurrency} style={{height: 50, width: 140}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({toCurrency: itemValue})
            }>
              {this.state.currencies.map(cur => (<Picker.Item key={cur} label={cur} value={cur} />))}
            </Picker>  
          </View>
        </View>
        
        <View style={{marginTop:25}}>
          <TouchableOpacity style={styles.center}>
            <Button
              title="පරිවර්තනය කරන්න"
              raised
              onPress={this.convertHandler} containerStyle={styles.butt}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.center}>
          <TouchableOpacity style={styles.container1} onPress={this.reverseCurrency}>
            <Icon name='swap-vert' size={24} color='black' style={styles.half1} />
            <Text style={styles.half2}>මුදල් ඒකක මාරු කරන්න</Text>
          </TouchableOpacity>
          <Text style={{color:'red',marginTop:10}}>{this.state.error}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  inputs:{
    marginTop:5,
  },
  rowhalf1:{
    marginTop:15,width:220
  },
  rowhalf2:{
    width:140,marginTop:32
  },
  container: {
    flexDirection: 'row',
  },
  container1: {
    flexDirection: 'row',marginTop:25
  },
  text:{
    color:'#000',fontSize: 15,marginTop:25,
  },
  text1:{
    color:'#415ddb',fontSize: 20,marginTop:15,
  },
  text2:{
    color:'#000',fontSize: 15, marginTop:5,
  },
  txtInput:{
    fontSize:13,marginBottom:-10
  },
  center:{
    alignItems:'center'
  },
  butt:{
    width:340,
  },
  half1:{
    width:25,
  },
  half2:{
    width:170
  }
});