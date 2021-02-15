import React, { Component } from 'react';
import {View,Text,SafeAreaView,StyleSheet,StatusBar, Image,TouchableOpacity,} from 'react-native';
import {
    LineChart,
    ProgressChart,
    BarChart
  } from "react-native-chart-kit";
import * as CommonStyle from '../Help/CommonStyle';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import DeathLogo from '../../Images/TestBG.png';
import MAP from '../../Images/MapBG.png';
class Death extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        return (
            <ScrollView>
            <View style={styles.Container}>
                <StatusBar
					translucent={false}
				/>
                <View style={styles.Header}>
                    <Ionicons name="chevron-back" size={30} color="white" style={{margin:15}} onPress={()=>this.props.navigation.navigate("MainScreen")}/>
                    <FontAwesome5 name="bell" size={25} color="white" style={{marginLeft:'72%',margin:15}}/>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:'40%'}}>
                        <Image source={DeathLogo} style={styles.VaccineIMG}/>
                    </View>
                    <View style={{width:'60%'}}>
                        <Text style={{margin:40,fontSize:17,color:'white'}}>All you need to stay home</Text>
                        <Text style={{marginLeft:40,fontSize:17,color:'white'}}>Get to know About Covid-19.</Text>
                    </View>
                </View>
            </View>
            <Text style={{marginLeft:20,marginTop:20,fontSize:20,fontWeight:'bold'}}>
                    Death
                </Text>
            <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:22,marginTop:7,color:'gray'}}>
                    Newest update March 28
                </Text>
                <TouchableOpacity>
                    <Text style={{marginLeft:'40%',color:CommonStyle.Apptheme,fontWeight:'bold'}}>
                        See more
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.VaccineContainer}>
                <View style={{flexDirection:'column',width:'33%',}}>
                    <FontAwesome name="arrow-circle-up" size={25} color="gray" style={{marginLeft:50,marginTop:7}}/>
                    <Text style={{textAlign:'center',fontSize:30,marginTop:12,fontWeight:'bold',color:"gray"}}>598K</Text>
                    <Text style={{textAlign:'center',color:'gray',marginTop:12}}>Death</Text>
                </View>
                <View style={{flexDirection:'column',width:'33%',}}>
                    <FontAwesome name="arrow-circle-down" size={25} color="#522225" style={{marginLeft:50,marginTop:7}}/>
                    <Text style={{textAlign:'center',fontSize:30,marginTop:12,fontWeight:'bold',color:"#522225"}}>15k</Text>
                    <Text style={{textAlign:'center',color:'gray',marginTop:12}}>Serious</Text>
                </View>
                <View style={{flexDirection:'column',width:'33%',}}>
                    <FontAwesome name="arrow-circle-up" size={25} color="#FF5959" style={{marginLeft:50,marginTop:7}}/>
                    <Text style={{textAlign:'center',fontSize:30,marginTop:12,fontWeight:'bold',color:"#FF5959"}}>10.8%</Text>
                    <Text style={{textAlign:'center',color:'gray',marginTop:12}}>Death Rate</Text>
                </View>
            </View>
            </ScrollView>
         );
    }
}
const styles = StyleSheet.create({
    Container:{
        width:'100%',
        height:330,
        backgroundColor:CommonStyle.Apptheme,
        borderBottomLeftRadius:50 ,
        borderBottomRightRadius:50,
    },
    Header:{
        flexDirection:'row',
        marginTop:25,
        height:60,
    },
    VaccineIMG:{
        width:170,
        height:200,
        marginLeft:5,
    },
    VaccineContainer:{
        flexDirection:'row',
        width:'90%',
        height:150,
        backgroundColor:'#FAFAFA',
        marginLeft:'5%',
        marginTop:20,
        borderRadius:30,
    },
    SecondContainer:{
        marginTop:50,
        height:400,
        width:'100%',
        backgroundColor:CommonStyle.lightBg,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
    },
});
export default Death;