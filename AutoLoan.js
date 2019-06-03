import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,ImageBackground,TouchableOpacity,TouchableNativeFeedback,TouchableHighlight} from 'react-native';
import { Input,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AutoLoan extends React.Component{
    static navigationOptions = {
        title: 'රථවාහන ණය',headerTintColor: '#fff',
        headerStyle: {backgroundColor: '#6897e2',},
        headerTitleStyle: {fontSize: 18,},
    };
    constructor(props) {
        super(props)
        this.state = {
        vehiPrice: "",rate:"",months:"",monthPay:"0",tot:"0",interest:"0",downPay:"0",tradeValue:"0",salesTax:"0"
        };
    }
  
    buttonClick = () =>{
        const { vehiPrice,rate,months,downPay,tradeValue,salesTax }  = this.state ;
        loan=Number(vehiPrice)-Number(downPay)-Number(tradeValue)+(Number(vehiPrice)*Number(salesTax)*0.01);
        monthly=Number(loan)/((Math.pow(1+((Number(rate)*0.01)/12),months)-1)/(((Number(rate)*0.01)/12)*Math.pow(1+((Number(rate)*0.01)/12),months)));
        total=Number(months)* Number(monthly);
        if (vehiPrice!="" && rate!="" && months!="") {
            this.setState({
                monthPay: Number(monthly).toFixed(2),
                tot:(Number(total)).toFixed(2),
                interest:(Number(total)-Number(loan)).toFixed(2)
            })
        }
        
    }
    render(){
        return(
        <View>
            <View style={styles.inputs}>
            <Input
                label='වාහන මිල' labelStyle={styles.txtInput}  leftIcon={<Icon name='car' size={18} color='black'/>} keyboardType={'numeric'}
                onChangeText={vehiPrice => this.setState({vehiPrice})}
            />
            </View>
            <View style={styles.inputs}>
            <Input
                label='මූලික ගෙවීම' labelStyle={styles.txtInput} leftIcon={ <Icon name='money' size={18} color='black' />} keyboardType={'numeric'}
                onChangeText={downPay => this.setState({downPay})}
            />
            </View>
            <View style={styles.inputs}>
            <Input
                label='පැරණි වාහනයේ වෙළඳ වටිනාකම' labelStyle={styles.txtInput} leftIcon={<Icon name='money' size={18} color='black'/>} keyboardType={'numeric'}
                onChangeText={tradeValue => this.setState({tradeValue})}
            />
            </View>
            <View style={styles.inputs}>
            <Input
                label='විකිණුම් බදු(%)' labelStyle={styles.txtInput} leftIcon={<Icon name='percent' size={18} color='black'/>} keyboardType={'numeric'}
                onChangeText={salesTax=> this.setState({salesTax})}
            />
            </View>
            <View style={styles.inputs}>
            <Input
                label='පොලී අනුපාතය(% වසරකට)' labelStyle={styles.txtInput} leftIcon={<Icon name='percent' size={18} color='black'/>} keyboardType={'numeric'}
                onChangeText={rate => this.setState({rate})}
            />
            </View>
            <View style={styles.inputs}>
            <Input
                label='ණය කාලසීමාව(මාස)' labelStyle={styles.txtInput} leftIcon={<Icon name='calendar' size={18} color='black'/>} keyboardType={'numeric'}
                onChangeText={months => this.setState({months})}
            />
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
            <Text style={styles.text}>මාසික වාරිකය                 :<Text style={styles.text1}> රු.{this.state.monthPay}</Text></Text>
            <Text style={styles.text2}>ගෙවිය යුතු මුළු මුදල      :<Text style={styles.text1}> රු.{this.state.tot}</Text></Text>
            <Text style={styles.text2}>ගෙවිය යුතු මුළු පොලිය :<Text style={styles.text1}> රු.{this.state.interest}</Text></Text>
        </View>

        );
    }
}
const styles = StyleSheet.create({
  inputs:{
    marginTop:5,
  },
  text:{
    color:'#000',
    fontSize: 14,
    marginTop:15,
    marginLeft:10
  },
  text1:{
    color:'#415ddb',
    fontSize: 15,
  },
  text2:{
    color:'#000',
    fontSize: 14,
    marginTop:3,
    marginLeft:10
  },
  txtInput:{
    fontSize:13,
    marginBottom:-10
  },butt:{
      width:340,
  },
  center:{
      alignItems:'center'
  }

});