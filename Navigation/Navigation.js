import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Components/SplashScrren/SplashScreen';
import MainScreen from '../Components/MainSceen/MainScreen';
import CaseUpdate from '../Components/MainSceen/CaseUpdate';
import Vaccine from '../Components/MainSceen/Vaccine';
import Death from '../Components/MainSceen/Dead'
const Stack = createStackNavigator();
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <NavigationContainer>
                <Stack.Navigator initialRouteName='MainScreen' headerMode='none'>
                    <Stack.Screen name="SplashScreen" component={SplashScreen} />
                    <Stack.Screen name="MainScreen" component={MainScreen} />
                    <Stack.Screen name="CaseUpdate" component={CaseUpdate} />
                    <Stack.Screen name="Vaccine" component={Vaccine} />
                    <Stack.Screen name="Death" component={Death} />
                </Stack.Navigator>
            </NavigationContainer>
         );
    }
}
 
export default Navigation;