import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,ImageBackground,TouchableOpacity} from 'react-native';
import { Input,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Loan extends React.Component{

    static navigationOptions = {
        title: 'ණය ගණකය',headerTintColor: '#fff',
        headerStyle: {backgroundColor: '#6897e2',},
        headerTitleStyle: {fontSize: 18,},
    };
    constructor(props) {
        super(props)
        this.state = {
        loanAmount: "",rate:"",months:"",total:"0",tot:"0",interest:"0"
        };
    }
  
    buttonClick = () =>{
        const { loanAmount,rate,months }  = this.state ;
        monthly=Number(loanAmount)/((Math.pow(1+((Number(rate)*0.01)/12),months)-1)/(((Number(rate)*0.01)/12)*Math.pow(1+((Number(rate)*0.01)/12),months)));
        totalAmount=Number(months)*Number(monthly);
        if (loanAmount!="" && rate!="" && months!="") {
          this.setState({
            total: (Number(monthly)).toFixed(2),
            tot:Number(totalAmount).toFixed(2),
            interest:(Number(totalAmount)-Number(loanAmount)).toFixed(2)
        })
        }
        
    }

  render(){
    return(
      <View>
        <View style={styles.inputs}>
          <Input
            label='ණය මුදල' labelStyle={styles.txtInput}
            leftIcon={
              <Icon
                name='money'
                size={20}
                color='black'
              />
            }
            keyboardType={'numeric'}
            onChangeText={loanAmount => this.setState({loanAmount})}
          />
        </View>
        <View style={styles.inputs}>
          <Input
            style={styles.inputs}
            label='පොලී අනුපාතය(% වසරකට)' labelStyle={styles.txtInput}
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
          <Input
            style={styles.inputs}
            label='ණය කාලසීමාව(මාස)' labelStyle={styles.txtInput}
            leftIcon={
              <Icon
                name='calendar'
                size={20}
                color='black'
              />
            }
            keyboardType={'numeric'}
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
        <Text style={styles.text}>සමාන මාසික වාරිකය    :<Text style={styles.text1}> රු.{this.state.total}</Text></Text>
        <Text style={styles.text2}>ගෙවිය යුතු මුළු මුදල      :<Text style={styles.text1}> රු.{this.state.tot}</Text></Text>
        <Text style={styles.text2}>ගෙවිය යුතු මුළු පොලිය :<Text style={styles.text1}> රු.{this.state.interest}</Text></Text>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  inputs:{
    marginTop:15,
  },
  text:{
    color:'#000',fontSize: 15,marginTop:25,marginLeft:10
  },
  text1:{
    color:'#415ddb',
    fontSize: 18,
  },
  text2:{
    color:'#000',fontSize: 15,marginTop:5,marginLeft:10
  },
  txtInput:{
    fontSize:15,
  },
  butt:{
    width:340,
},
center:{
    alignItems:'center'
}

});