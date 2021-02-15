import React, { Component } from 'react';
import {View,Text,SafeAreaView,StyleSheet,StatusBar, Image,TouchableOpacity, Alert,} from 'react-native';
import {
    LineChart,
    ProgressChart
  } from "react-native-chart-kit";
import axios from "axios";
import * as CommonStyle from '../Help/CommonStyle';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
class CaseUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [
                Math.random() * 200,
                Math.random() * 500,
                Math.random() * 800,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
              TotalConfirmed:'',
              TotalRecovered:'',
              TotalDeaths:'',
         }
    }
    async componentDidMount() {
        // Alert.alert("umar")
        await axios
          .get(
            `https://api.covid19api.com/world/total`
          )
          .then((Result) => {
            console.log(Result)
            this.setState({TotalRecovered:Result.data.TotalRecovered})
            this.setState({TotalConfirmed:Result.data.TotalConfirmed})
            this.setState({TotalDeaths:Result.data.TotalDeaths})
          })
                .catch((error) => {
                  Alert.alert("Please Check Your Internet Connection");
                });
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
                <View style={{}}>
                    <View style={{width:'65%'}}>
                        <Text style={styles.TextHeading}>Statistics</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',}}>
                    <View style={styles.Box1}>
                        <Text style={styles.Heading}>
                            Affected
                        </Text>
                        <Text style={styles.HeadingDetaile}>
                            {this.state.TotalConfirmed}
                        </Text>
                    </View>
                    <View style={styles.Box2}>
                        <Text style={styles.Heading}>
                            Active
                        </Text>
                        <Text style={styles.HeadingDetaile}>
                            {this.state.TotalConfirmed}
                        </Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',}}>
                    <View style={styles.Box3}>
                        <Text style={styles.Heading}>
                            Recoverd
                        </Text>
                        <Text style={styles.HeadingDetaile}>
                            {this.state.TotalRecovered}
                        </Text>
                    </View>
                    <View style={styles.Box4}>
                        <Text style={styles.Heading}>
                            Death
                        </Text>
                        <Text style={styles.HeadingDetaile}>
                            {this.state.TotalDeaths}
                        </Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',}}>
                    <View style={styles.GenderBox}>
                        <View style={{flexDirection:'row',}}>
                            <FontAwesome name="male" size={75} color="#C37D37" style={{margin:15}}/>
                            <View style={{flexDirection:'column',}}>
                                <Text style={{marginTop:15,fontSize:25,fontWeight:'bold',}}>Male</Text>
                                <Text style={{marginTop:10,fontSize:15,color:'gray'}}>Confirmed</Text>
                                <Text style={{fontSize:15,color:'gray'}}>Cases</Text>
                            </View>
                        </View>
                        <View style={{}}>
                            <Text style={{marginLeft:15,fontSize:45,fontWeight:'bold',color:"#C37D37"}}>59.7%</Text>
                        </View>
                    </View>
                    <View style={styles.GenderBox}>
                        <View style={{flexDirection:'row',}}>
                            <FontAwesome name="female" size={75} color="#C37D37" style={{margin:(10,10,10,10)}}/>
                            <View style={{flexDirection:'column',}}>
                                <Text style={{marginTop:15,fontSize:22,fontWeight:'bold',}}>Female</Text>
                                <Text style={{marginTop:10,fontSize:15,color:'gray'}}>Confirmed</Text>
                                <Text style={{fontSize:15,color:'gray'}}>Cases</Text>
                            </View>
                        </View>
                        <View style={{}}>
                            <Text style={{marginLeft:15,fontSize:45,fontWeight:'bold',color:"#C37D37"}}>41.3%</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.SecondContainer}>
                    <Text style={{color:'black',margin:35,fontSize:20,fontWeight:'bold'}}>Daily Cases Graph</Text>
                    <View style={{width:'95%'}}>
                        <LineChart
                            data={{
                                labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",'JUL'],
                                datasets: [
                                {
                                    data: [
                                        Math.random() * 300,
                                        Math.random() * 500,
                                        Math.random() * 800,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 500,

                                    ]
                                }
                                ]
                            }}
                            //   width={Dimensions.get("window").width} // from react-native
                            width={350}
                            height={250}
                            yAxisSuffix="k"
                            yAxisInterval={2} // optional, defaults to 1
                            chartConfig={{
                                backgroundColor: "black",
                                backgroundGradientFrom: "#FaFaFa",
                                backgroundGradientTo: "#FaFaFa",
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(255, 89, 89, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(0,0, 0, ${opacity})`,
                                style: {
                                borderRadius: 50
                                },
                                propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: '#FF5959'
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 1
                            }}
                        />
                    </View>
                </View>
            </View>
            </ScrollView>
         );
    }
}
const styles = StyleSheet.create({
    Container:{
        width:'100%',
        height:1090,
        backgroundColor:CommonStyle.Apptheme,
        // borderBottomLeftRadius:25 ,
        // borderBottomRightRadius:25,
    },
    Header:{
        flexDirection:'row',
        marginTop:25,
        height:60,
    },
    TextHeading:{
        color:CommonStyle.lightBg,
        margin:20,
        fontSize:25,
        fontWeight:'bold'
    },
    SecondContainer:{
        marginTop:50,
        height:400,
        width:'100%',
        backgroundColor:CommonStyle.lightBg,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
    },
    Box1:{
        width:'42%',
        height:120,
        backgroundColor:'#FFB259',
        borderRadius:20,
        marginLeft:'5%',
        marginTop:20
    },
    Box2:{
        width:'42%',
        height:120,
        backgroundColor:'#FF5959',
        borderRadius:20,
        marginLeft:'5%',
        marginTop:20
    },
    Box3:{
        width:'42%',
        height:120,
        backgroundColor:'#4CD97B',
        borderRadius:20,
        marginLeft:'5%',
        marginTop:20
    },
    Box4:{
        width:'42%',
        height:120,
        backgroundColor:'#9059FF',
        borderRadius:20,
        marginLeft:'5%',
        marginTop:20
    },
    GenderBox:{
        width:'42%',
        height:170,
        backgroundColor:'#FAFAFA',
        borderRadius:20,
        marginLeft:'5%',
        marginTop:20
    },
    Heading:{
        margin:15,
        fontSize:22,
        color:'white'
    },
    HeadingDetaile:{
        margin:15,
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
});
export default CaseUpdate;