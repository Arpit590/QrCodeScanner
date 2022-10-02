import { Image, Alert, StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native'
import React, { useState } from 'react';
import GroupIcon from "../assets/Group.svg";
import ArrowIcon from "../assets/Arrow.svg";
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const MainPage = () => {

  const [scannerActive, setScannerActive] = useState(false);

  const scanHandler=(e)=>{
    setScannerActive(true);
    if(e.data!==undefined){
      console.log("Result " + e.data);
      Alert.alert("Result " + e.data);
    }
      // Linking.openURL(e.data).catch(err =>
      //   console.error('An error occured', err)
      // );
    console.log("Start");
  }

  const stopHandler=()=>{
    setScannerActive(false);
    console.log("Stop");
  }


  return (
    <ScrollView style={styles.screen}>
      <View style={styles.view}>
        <View style={{position:"absolute", left:-28, zIndex:100}}>
          <GroupIcon/>
        </View>
        <Text style={{fontSize:20, fontWeight:"700", color:"#FFFFFF", marginLeft:17}}>50</Text>
      </View>
      <View>
        <View style={{flexDirection:"row", alignItems:"center", marginTop:30, justifyContent:"center", marginLeft:-40}}>
          <Image
          source={require('../assets/Arrow.png')}
          style={{height:200, width:200, resizeMode:"contain"}}
          />
          <View style={{flexDirection:"row", alignItems:"center", marginLeft:-30, marginTop:25}}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
              <Text style={{fontSize:20, color:"#FFFFFF", fontWeight:"700", marginRight:-10}}>1</Text>
              <GroupIcon
              height={'30'}
              />
            </View>
            <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={{fontSize:20, color:"#FFFFFF", fontWeight:"700", marginRight:9}}>=</Text>
              <Text style={{fontSize:20, color:"#FFFFFF", fontWeight:"700"}}>₹</Text>
              <Text style={{fontSize:20, color:"#FFFFFF", fontWeight:"700"}}> 1</Text>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: scannerActive ? "transparent" : "#424242", borderRadius:20, padding:20, marginHorizontal:20,alignItems:"center", marginTop:-50, height: 350}}>
          {(!scannerActive)
          ?
          <Image
          source={require("../assets/QR.png")}
          style={{height:300, width:300, resizeMode:"contain"}}
          />
          :
          <QRCodeScanner
          onRead={scanHandler}
          flashMode={RNCamera.Constants.FlashMode.torch}
          cameraStyle={{height:260, width:260, position:"absolute", alignSelf:"center", justifyContent:"center"}}
        />}
        </View>
        <View style={{marginTop:10}}>
          <View style={{flexDirection:"row", alignItems:"flex-start", justifyContent:"center"}}>
            <Text style={{fontSize:20, color:"#FFFFFF", fontWeight:"700", marginRight:-60}}>Share your</Text>
            <Image
            source={require("../assets/Love.png")}
            style={{height:150, width:150, resizeMode:"contain", marginTop:-10}}
            />
            <Text style={{fontSize:20, color:"#FFFFFF", fontWeight:"700", marginLeft:-60}}> with seller</Text>
          </View>
        </View>
        <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.button, {backgroundColor: !scannerActive ? "#FE1E25" : "#424242"}]}
        onPress={scannerActive ? stopHandler : scanHandler}
        >
          <Text style={{fontSize:25, fontWeight:"700", color:"white"}}>{scannerActive ? 'STOP' : 'SCAN'}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default MainPage

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#000000",
        flex:1,
        padding:15
    },
    view:{
        backgroundColor:"#424242",
        flexDirection:"row",
        alignItems:"center",
        borderRadius:20,
        alignSelf:"flex-end",
        padding:5,
        width:"20%"
    },
    button:{
      backgroundColor:"#FE1E25",
      padding:5,
      paddingHorizontal:20,
      borderRadius:20,
      alignSelf:"center"
    }
})