import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    ActivityIndicator,
    Text,
    SafeAreaView,
} from 'react-native';
import SplashImage from '../../Images/SplashScreen.png';
class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.decisionToNavigate = this.decisionToNavigate.bind(this);
    }

    static navigationOptions = {
        header: null
    };

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.decisionToNavigate();
    //     }, 3000);
    // }

    decisionToNavigate() {
        const { navigate } = this.props.navigation;
        navigate("MainScreen");
    }

    render() {
        return (
            // <ImageBackground style={styles.container} source={require('../../Images/SplashScreen.png')}>
            //     <View style={{ justifyContent: 'center', alignSelf: 'center' }}>

            //         {/* <ActivityIndicator size={"large"} /> */}
            //     </View>
            // </ImageBackground>
            <SafeAreaView style={{width:'100%'}}>
                <View style={styles.Upper}>
                    
                </View>
                <View style={styles.container}>
                    <Image source={SplashImage}/>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:'100%',
        height:200,
    },
    Upper:{
        width:'100%',
        height:200,
        backgroundColor:'red',
    },
    ImageContainer:{
        width:'100%',
        height:600,
    }
});

export default SplashScreen;