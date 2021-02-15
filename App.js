// import React, { Component } from 'react';
// import {View,Text,SafeAreaView} from 'react-native';
// import {
//     LineChart,
//     ProgressChart
//   } from "react-native-chart-kit";
// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             data: [
//                 Math.random() * 200,
//                 Math.random() * 500,
//                 Math.random() * 800,
//                 Math.random() * 100,
//                 Math.random() * 100,
//                 Math.random() * 100
//               ]
//          }
//     }
//     render() { 
//       return ( 
//         <SafeAreaView>
//           <View>
//             <LineChart
//               data={{
//                 labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",'JUL'],
//                 datasets: [
//                   {
//                     data: [
//                       Math.random() * 200,
//                       Math.random() * 500,
//                       Math.random() * 800,
//                       Math.random() * 100,
//                       Math.random() * 100,
//                       Math.random() * 100,
//                       Math.random() * 500,
//                     ]
//                   }
//                 ]
//               }}
//               // width={Dimensions.get("window").width} // from react-native
//               width={400}
//               height={220}
//               yAxisLabel="$"
//               yAxisSuffix="k"
//               yAxisInterval={1} // optional, defaults to 1
//               chartConfig={{
//                 backgroundColor: "#e26a00",
//                 backgroundGradientFrom: "#fb8c00",
//                 backgroundGradientTo: "#ffffff",
//                 decimalPlaces: 2, // optional, defaults to 2dp
//                 color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//                 labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//                 style: {
//                   borderRadius: 16
//                 },
//                 propsForDots: {
//                   r: "6",
//                   strokeWidth: "2",
//                   stroke: "#ffa726"
//                 }
//               }}
//               bezier
//               style={{
//                 marginVertical: 8,
//                 borderRadius: 1
//               }}
//             />
//           </View>
//         </SafeAreaView>
//          );
//     }
// }
 
// export default App;

import React, { Component } from 'react';
import {View,Text} from 'react-native';
import Module from './Components/SplashScrren/SplashScreen';
import Navigation from './Navigation/Navigation';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <View style={{flex:1}}>
          <Navigation/>
      </View>
     );
  }
}
 
export default App;