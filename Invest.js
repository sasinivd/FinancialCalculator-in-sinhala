import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,ImageBackground,TouchableOpacity,Picker} from 'react-native';
import { Input,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Invest extends React.Component{

  static navigationOptions = {
    title: 'ආයෝජන ගණකය',headerTintColor: '#fff',
    headerStyle: {backgroundColor: '#6897e2',},
    headerTitleStyle: {fontSize: 18,},
  };
  constructor(props) {
    super(props)
    this.state = {
      initInvest: "",rate:"",years:"",additional:"",frequency:"annually",final:"0",interest:"0",addContribution:"0"
    };
  }
  buttonClick = () =>{
    const { initInvest,rate,years,additional,frequency }  = this.state ;
    p=Number(initInvest);r=Number(rate)*0.01;y=Number(years);a=Number(additional);
    rM=(Number(rate)*0.01)/12;rSA=(Number(rate)*0.01)/2;rW=(Number(rate)*0.01)/52;
    yM=Number(years)*12;ySA=Number(years)*2;yW=Number(years)*52;
    if (initInvest!="" && years!="" && rate!="") {
      if (frequency=='annually') {
        finalBal=(p*Math.pow(1+r,y))+(a*((Math.pow(1+r,y)-1)/r));
        inter=Number(finalBal)-p-(a*y);
        this.setState({ final:Number(finalBal).toFixed(2),interest:Number(inter).toFixed(2),addContribution:(a*y).toFixed(2)})
      }
      else if(frequency=='monthly'){
        finalBal=(p*Math.pow(1+rM,yM))+(a*((Math.pow(1+rM,yM)-1)/rM));
        inter=Number(finalBal)-p-(a*yM);
        this.setState({ final:Number(finalBal).toFixed(2),interest:Number(inter).toFixed(2),addContribution:(a*yM).toFixed(2)})
      }
      else if(frequency=='semiAnnually'){
        finalBal=(p*Math.pow(1+rSA,ySA))+(a*((Math.pow(1+rSA,ySA)-1)/rSA));
        inter=Number(finalBal)-p-(a*ySA);
        this.setState({ final:Number(finalBal).toFixed(2),interest:Number(inter).toFixed(2),addContribution:(a*ySA).toFixed(2)})
      }
      else if(frequency=='weekly'){
        finalBal=(p*Math.pow(1+rW,yW))+(a*((Math.pow(1+rW,yW)-1)/rW));
        inter=Number(finalBal)-p-(a*yW);
        this.setState({ final:Number(finalBal).toFixed(2),interest:Number(inter).toFixed(2),addContribution:(a*yW).toFixed(2)})
      }
    }
    
    //finalBal=(p*Math.pow(1+r,y))+(a*((Math.pow(1+r,y)-1)/r));
    //this.setState({
      //final:finalBal.toFixed(2)
    //})
    
    
  }
  render(){
    return(
      <View>
        <View style={styles.inputs}>
          <Input
            label='මූලික ආයෝජන මුදල ' labelStyle={styles.txtInput}
            leftIcon={
              <Icon
                name='money'
                size={20}
                color='black'
              />
            }
            keyboardType={'numeric'}
            onChangeText={initInvest => this.setState({initInvest})}
          />
        </View>
        <View style={styles.inputs}>
          <Input
            label='ආයෝජන කාලසීමාව(වසර)' labelStyle={styles.txtInput}
            leftIcon={
              <Icon
                name='calendar'
                size={20}
                color='black'
              />
            }
            keyboardType={'numeric'}
            onChangeText={years => this.setState({years})}
          />
        </View>
        <View style={styles.inputs}>
          <Input
            label='ප්‍රතිලාභ අනුපාතය(% වසරකට)' labelStyle={styles.txtInput}
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
        <View style={styles.container}>
          <View style={styles.inputshalf}>
            <Input
              label='අතිරේක ආයෝජන' labelStyle={styles.txtInput}
              leftIcon={
                <Icon
                  name='money'
                  size={20}
                  color='black'
                />
              }
              keyboardType={'numeric'}
              onChangeText={additional => this.setState({additional})}
            />
          </View>
          <View style={styles.picker}>
            <Picker selectedValue={this.state.frequency} style={{height: 50, width: 140}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({frequency: itemValue})
              }>
              <Picker.Item label="වාර්ෂිකව" value="annually" />
              <Picker.Item label="අර්ධ වාර්ෂිකව" value="semiAnnually" />
              <Picker.Item label="මාසිකව" value="monthly" />
              <Picker.Item label="සතිපතා" value="weekly" />
            </Picker>
          </View>
        </View>
        <View >
          <TouchableOpacity style={styles.center}>
            <Button
              title="ගණනය කරන්න"
              raised
              onPress={this.buttonClick} containerStyle={styles.butt}
            />
          </TouchableOpacity>
        </View> 
        <Text style={styles.text}>අවසාන ශේෂය                :<Text style={styles.text1}> රු.{this.state.final}</Text></Text>
        <Text style={styles.text2}>ලබාගත් මුළු පොලිය     :<Text style={styles.text1}> රු.{this.state.interest}</Text></Text>
        <Text style={styles.text2}>මුළු අතිරේක ආයෝජන:<Text style={styles.text1}> රු.{this.state.addContribution}</Text></Text>         
      </View>
    );
  }
}
const styles = StyleSheet.create({
  inputs:{
    marginTop:15,
  },
  inputshalf:{
    marginTop:15, width:220
  },
  container: {
    flexDirection: 'row',
  },
  text:{
    color:'#000',fontSize: 15,marginTop:18,marginLeft:10
  },
  text1:{
    color:'#415ddb',fontSize: 18,
  },
  text2:{
    color:'#000',fontSize: 15,marginTop:5,marginLeft:10
  },
  txtInput:{
    fontSize:15,marginBottom:-5
  },
  center:{
    alignItems:'center'
  },
  butt:{
    width:340,
  },
  picker:{
    width:140,marginTop:44
  }

});