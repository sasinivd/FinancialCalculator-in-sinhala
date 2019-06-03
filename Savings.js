import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,ImageBackground,TouchableOpacity} from 'react-native';
import { Input,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Savings extends React.Component{

  static navigationOptions = {
    title: 'ඉතිරිකිරීම් ගණකය',headerTintColor: '#fff',
    headerStyle: {backgroundColor: '#6897e2',},
    headerTitleStyle: {fontSize: 18,},
  };
  constructor(props) {
    super(props)
    this.state = {
      initDeposit: "",rate:"",months:"",total:"0",interest:"0"
    };
  }
  
  buttonClick = () =>{
    const { initDeposit,rate,months}  = this.state ;
    tot=Number(initDeposit)*Math.pow(1+((Number(rate)*0.01)/12),Number(months));
    if (initDeposit!="" && rate!="" && months!="") {
      this.setState({
        total: (Number(tot)).toFixed(2),
        interest:(Number(tot)-Number(initDeposit)).toFixed(2)
      });
    }
    
    
    
  }
  render(){
    return(
      <View>
        <View style={styles.inputs}>
          <Input
            label='ආරම්භක තැන්පතුව' labelStyle={styles.txtInput}
            leftIcon={
              <Icon
                name='money'
                size={20}
                color='black'
              />
            }
            keyboardType={'numeric'}
            onChangeText={initDeposit => this.setState({initDeposit})}
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
            label='තැන්පතු කාලය(මාස)' labelStyle={styles.txtInput}
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
        <Text style={styles.text}>කාලසීමාව අවසානයේ මුළු තැන්පතු මුදල :<Text style={styles.text1}>                රු.{this.state.total}</Text></Text>
        <Text style={styles.text2}>ලබාගත් මුළු පොලිය :<Text style={styles.text1}> රු.{this.state.interest}</Text></Text>
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
    color:'#415ddb',fontSize: 18,
  },
  text2:{
    color:'#000',fontSize: 15,marginTop:5,marginLeft:10
  },
  txtInput:{
    fontSize:13,marginBottom:-10
  },
  butt:{
    width:340,
},
center:{
    alignItems:'center'
},
txtInput:{
  fontSize:15,
}


});