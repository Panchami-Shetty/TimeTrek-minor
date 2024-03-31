import React from 'react';
import {View ,ImageBackground} from 'react-native';

const Background=({children})=>{
    return(
        <View>
        <ImageBackground source={require("./assets/images/bg.png")} style={{height:'100%'}} />
        <View style={{position:"absolute"}}>
         {children}
         </View>
         </View>
    );
}

const style= StyleSheet.create({})

export default Background;