import { Image, Alert, StyleSheet, Text, TouchableOpacity, View,ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react';
import GroupIcon from "../assets/Group.svg";
import LoveIcon from "../assets/Love.svg";
import QRIcon from "../assets/QR.svg";
import ArrowIcon from "../assets/Arrow.svg";
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const {height, width} = Dimensions.get("window");

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
    <View style={styles.screen}>
      <View style={styles.view}>
        <View style={styles.view1}>
          <GroupIcon/>
        </View>
        <Text style={styles.groupText}>50</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headingContent}>
          <Image
          source={require('../assets/Arrow.png')}
          style={styles.arrowImage}
          />
          <View style={styles.view2}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
              <Text style={[styles.viewText, {marginRight:-10}]}>1</Text>
              <GroupIcon
              height={'30'}
              />
            </View>
            <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={[styles.viewText, {marginRight:9}]}>=</Text>
              <Text style={styles.viewText}>₹</Text>
              <Text style={styles.viewText}> 1</Text>
            </View>
          </View>
        </View>
        <View style={[styles.scannerBackground, {backgroundColor: scannerActive ? "transparent" : "#424242"}]}>
          {(!scannerActive)
          ?
          <QRIcon/>
          :
          <QRCodeScanner
          onRead={scanHandler}
          flashMode={RNCamera.Constants.FlashMode.torch}
          cameraStyle={styles.qrCode}
        />}
        </View>
        <View style={{marginTop: scannerActive ? 40 : 10}}>
          <View style={styles.shareView}>
            <Text style={styles.shareHeading1}>Share your</Text>
            <LoveIcon
            style={{marginTop:-12}}
            />
            <Text style={styles.shareHeading2}> with seller</Text>
          </View>
        </View>
        <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.button, {backgroundColor: !scannerActive ? "#FE1E25" : "#424242"}]}
        onPress={scannerActive ? stopHandler : scanHandler}
        >
          <Text style={styles.buttonText}>{scannerActive ? 'STOP' : 'SCAN'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
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
    headingContent:{
      flexDirection:"row", 
      alignItems:"center", 
      marginTop:30, 
      justifyContent:"center", 
      marginLeft:-40
    },
    arrowImage:{
      maxHeight:height-700, 
      maxWidth:width-220, 
      minHeight:height-700, 
      minWidth:width-220, 
      resizeMode:"contain"
    },
    groupText:{
      fontSize:20, 
      fontWeight:"700", 
      color:"#FFFFFF", 
      marginLeft:17
    },
    view2:{
      flexDirection:"row", 
      alignItems:"center", 
      marginLeft:-30,
      marginTop:25
    },
    viewText:{
      fontSize:20, 
      color:"#FFFFFF", 
      fontWeight:"700", 
    },
    view1:{
      position:"absolute", 
      left:-28, 
      zIndex:100
    },
    scannerBackground:{ 
      borderRadius:20, 
      padding:20, 
      marginHorizontal:20,
      alignItems:"center", 
      marginTop:-20, 
      maxHeight: height-500, 
      minHeight: height-500,
      minWidth:width-70, 
      maxWidth:width-70,
      alignSelf:"center",
      justifyContent:"center"
    },
    qrCode:{
      maxHeight: height-500, 
      minHeight: height-500,
      minWidth:width-200, 
      maxWidth:width-200,
      alignSelf:"center", 
      justifyContent:"center"
    },
    qrImage:{
      height: height-290, 
      width:width-60, 
      resizeMode:"contain"
    },
    shareView:{
      flexDirection:"row", 
      alignItems:"flex-start", 
      justifyContent:"center"
    },
    shareImage:{
      height:height-433, 
      width:width-180,
      resizeMode:"contain", 
      marginTop:-10
    },
    shareHeading1:{
      fontSize:20, 
      color:"#FFFFFF", 
      fontWeight:"700", 
      marginRight:-60
    },
    shareHeading2:{
      fontSize:20,
      color:"#FFFFFF", 
      fontWeight:"700", 
      marginLeft:-60
    },
    button:{
      backgroundColor:"#FE1E25",
      padding:5,
      paddingHorizontal:20,
      borderRadius:20,
      alignSelf:"center",
      marginBottom:40
    },
    buttonText:{
      fontSize:25,
      fontWeight:"700",
      color:"white"
    }
})