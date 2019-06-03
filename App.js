/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import AutoLoan from './AutoLoan';
import Savings from './Savings';
import Loan from './Loan';
import Invest from './Invest';
import Vat from './Vat';
import Convert from './Convert';

const AppNavigator = createStackNavigator({
  Home: {screen: Home },
  AutoLoan: {screen: AutoLoan},
  Savings:{screen:Savings},
  Loan:{screen:Loan},
  Invest:{screen:Invest},
  Vat:{screen:Vat},
  Converter:{screen:Convert},
});
 const App=createAppContainer(AppNavigator);

export default App; 
  


