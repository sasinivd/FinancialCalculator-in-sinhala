import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,ImageBackground,TouchableOpacity,BackHandler} from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation';
import { Input,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends React.Component {
    static navigationOptions = {
    header: null
  }
  
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    BackHandler.exitApp(); // works best when the goBack is async
    return true;
  };


  render(){
    const{navigate}=this.props.navigation;
    return(
      <View>
        <View>
          <ImageBackground style={styles.backg} source={require('./android/app/src/img/back1.jpg')} />
          <View style={styles.backview}>
            <Image style={styles.logo} source={require('./android/app/src/img/cal2.png')}></Image>
            <Text style={styles.backtext}>මුල්‍යමය ගණකය</Text>
          </View>
        </View>
        <View style={styles.mainpanel}>
          <View style={styles.container}>
            <View style={styles.half}>
              <TouchableOpacity style={styles.panelL} onPress={()=>{BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);navigate('AutoLoan');}}>
                <Image style={styles.icon} source={require('./android/app/src/img/car.png')}></Image>
                <Text style={styles.panelText} >රථවාහන ණය ගණකය</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.half}>
              <TouchableOpacity style={styles.panelR} onPress={()=>{BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);navigate('Savings');}}>
                <Image style={styles.icon} source={require('./android/app/src/img/savings.png')}></Image>
                <Text style={styles.panelText} >ඉතිරිකිරීම් ගණකය</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.half}>
              <TouchableOpacity style={styles.panelL} onPress={()=>{BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);navigate('Loan');}}>
                <Image style={styles.icon} source={require('./android/app/src/img/loan.png')}></Image>
                <Text style={styles.panelText} >ණය ගණකය</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.half}>
              <TouchableOpacity style={styles.panelR} onPress={()=>{BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);navigate('Invest');}}>
                <Image style={styles.icon} source={require('./android/app/src/img/inves.png')}></Image>
                <Text style={styles.panelText} >ආයෝජන ගණකය</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.half}>
              <TouchableOpacity style={styles.panelL} onPress={()=>{BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);navigate('Vat');}}>
                <Image style={styles.icon} source={require('./android/app/src/img/tax.png')}></Image>
                <Text style={styles.panelText} >
                එකතු කළ අගය මත බද්ද(VAT) ගණකය

                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.half}>
              <TouchableOpacity style={styles.panelR} onPress={()=>{BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);navigate('Converter');}}>
                <Image style={styles.icon} source={require('./android/app/src/img/cc.png')}></Image>
                <Text style={styles.panelText} >මුදල් පරිවර්තකය</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height:130,
    width:360,
  },
  backg: {
    height:165,
    position:'relative',
  },
  backview:{
    position:'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height:165,
    width:360,
  },
  backtext:{
    textAlign: 'center',
    color:'#ffffff',
    fontSize: 26,
  },
  logo:{
    height:70,
    width:70,
  },
  mainpanel:{
    backgroundColor:'#f0f0f0',
    width:360,
    height:450,
    justifyContent: 'center',
  },
  panelL:{
    width: 120,
    height: 120,
    backgroundColor: 'white',
    borderRadius:10,
    marginRight:-40,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  panelR:{
    width: 120,
    height: 120,
    backgroundColor: 'white',
    borderRadius:10,
    marginLeft:-45,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  half:{
    width:180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  panelText:{
    textAlign: 'center',
    color:'#000',
    fontSize: 15,
  },
  icon:{
    height:40,
    width:40,
  },
  
});
