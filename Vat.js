import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,ImageBackground,TouchableOpacity,Picker} from 'react-native';
import { Input,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Vat extends React.Component{

  static navigationOptions = {
    title: 'VAT ගණකය',headerTintColor: '#fff',
    headerStyle: {backgroundColor: '#6897e2',},
    headerTitleStyle: {fontSize: 18,},
  };

  constructor(props) {
    super(props)
    this.state = {
      amount:"",rate:"",vat:"add",net:"0",gross:"0",vatAmount:"0"
    };
  }

  buttonClick = () =>{
    const { amount,rate,vat }  = this.state ;
    if (amount!="" && rate!="") {
      if (vat=="add") {
        this.setState({
          gross:(Number(amount)*0.01*Number(rate)+Number(amount)).toFixed(2),
          net:Number(amount),
          vatAmount:(Number(amount)*Number(rate)*0.01).toFixed(2)
        })
      }
      else{
        total=Number(amount)/(1+(0.01*Number(rate)));
        this.setState({
          gross:amount,
          net:(Number(total)).toFixed(2),
          vatAmount:(Number(total)*0.01*Number(rate)).toFixed(2)
        })
      }
    }
    
  }
  
  render(){
    return(
      <View>
        <View style={styles.inputs}>
          <Input
            label='මුදල ' labelStyle={styles.txtInput}
            leftIcon={
              <Icon
                name='money'
                size={20}
                color='black'
              />
            }
            keyboardType={'numeric'}
            onChangeText={amount => this.setState({amount})}
          />
        </View>
        <View style={styles.inputs}>
          <Input
            label='VAT අනුපාතය(%)' labelStyle={styles.txtInput}
            leftIcon={
              <Icon
                name='percent'
                size={20}
                color='black'
              />
            }
            keyboardType={'numeric'}
            onChangeText={rate => this.setState({rate})}
          />
        </View>
        <View style={styles.inputs}>
          <Picker selectedValue={this.state.vat} style={{height: 50, width: 340,marginLeft:10}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({vat: itemValue})
            }>
            <Picker.Item label="VAT එකතු කරන්න" value="add" />
            <Picker.Item label="VAT ඉවත් කරන්න" value="remove" />     
          </Picker>
        </View>
        <View style={styles.inputs}>
          <TouchableOpacity style={styles.center}>
            <Button
              title="ගණනය කරන්න"
              raised
              onPress={this.buttonClick} containerStyle={styles.butt}
            />
          </TouchableOpacity>
        </View> 
        <Text style={styles.text}>ශුද්ධ වටිනාකම(VAT හැර)  :<Text style={styles.text1}> රු.{this.state.net}</Text></Text>
        <Text style={styles.text2}>VAT මුදල් ප්‍රමාණය                 :<Text style={styles.text1}> රු.{this.state.vatAmount}</Text></Text>
        <Text style={styles.text2}>දළ වටිනාකම(VAT ඇතුලුව):<Text style={styles.text1}> රු.{this.state.gross}</Text></Text>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  inputs:{
    marginTop:15,
  },
  text:{
    color:'#000',
    fontSize: 15,
    marginTop:25,
    marginLeft:10
  },
  text1:{
    color:'#415ddb',
    fontSize: 18,
  },
  text2:{
    color:'#000',
    fontSize: 15,
    marginTop:10,
    marginLeft:10
  },
  txtInput:{
    fontSize:15,
    marginBottom:-5
  },
  center:{
    alignItems:'center'
  },
  butt:{
    width:340,
  },

});