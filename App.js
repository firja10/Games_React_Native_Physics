// import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, Component, PureComponent, useCallback} from 'react';
import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, Dimensions, ImageBackground, Button, Alert, StatusBar, Switch } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { TouchableOpacity, PanGestureHandler, PanGestureHandlerGestureEvent, TapGestureHandler } from 'react-native-gesture-handler';
import CircularProgress from "react-native-circular-progress-indicator";
import { onGestureEvent } from "react-native-redash";
import * as Yup from 'yup';
import {  useFormik } from "formik";
import { Icon } from "react-native-elements";
import { useHistory } from "react-router-dom";
import { BarCodeScanner } from "expo-barcode-scanner";
import { WebView } from "react-native-webview";
import YoutubePlayer from "react-native-youtube-iframe";


import {GameEngine} from 'react-native-game-engine';

import Physics from './Physics';

import Constants from './Constants';

import Game from './Game';


import Svg, { Line, G, Circle, Text as SvgText, Path } from 'react-native-svg';



import LineGraph from "./LineGraph";


import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit';


import Slider from '@react-native-community/slider';






import ExpoGraphics from "expo-graphics";
import ExpoTHREE, {THREE} from "expo-three";
import Expo from "expo";
import Halaman from "./src/Masuk/Halaman";




// react-native-reanimated
import Animated, {useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, useRef, withSpring, withTiming} from 'react-native-reanimated';
// import {  } from "react-native-";

const SIZE = 50.0;

// const translationXRef = useRef(new Animated.Value(0));























// const gameEngine = null;
// const entities = setupWorld;
// const state = {
//   running: true
// };




// const setupWorld = () => {
//   let engine = Matter.Engine.create({ enableSleeping: false });
//   let world = engine.world;

//   let bird = Matter.Bodies.rectangle( Constants.MAX_WIDTH / 4, Constants.MAX_HEIGHT / 2, 50, 50);

//   Matter.World.add(world, [bird]);


//   return {
//       physics: { engine: engine, world: world },
//       bird: { body: bird, size: [50, 50], color: 'red', renderer: Bird},
//   }
// }






function Energy(props){


  const [range, setRange] = useState(0);
  const [sliding, setSliding] = useState('Inactive');

  const [rangedua, setRangedua] = useState(0);
  const [slidingdua, setSlidingdua] = useState('Inactive');

  var  [energyBesi, setEnergyBesi] = React.useState(0); 

  var [energyBata, setEnergyBata] = React.useState(0);

  const neutral = require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/bg_kosong.png');

  const api = require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/api.png');
  const ice = require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/ice.png');
  const gambar = {api, ice, neutral};

  //Massa Besi dan Bata
  const massaBesi=10;
  const massaBata=10;

// Kalor Jenis Besi
  const kalorbesi = 450;
  const kalorbata = 438;


 var [picsapi, setPicsapi] = React.useState(gambar.neutral);

 var [picsice, setPicice] = React.useState(gambar.neutral);


  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);



  const perhitunganEnergyBesi = () => {
   let wbesi = parseFloat(massaBesi*kalorbesi*(range-0));
   setEnergyBesi(wbesi);
  }

  const perhitunganEnergyBata = () => {
    let wbata = parseFloat(massaBata*kalorbata*(rangedua-0));
    setEnergyBata(wbata);
  }







  // const nilaiSwitchBesi = parseInt(value*100) + '%';


  const BerubahBesi = () => {
    if(range<0){

      picsapi = setPicsapi(gambar.ice);
      // picsice = setPicice(gambar.ice);

    }

    else if(range>0 && range<=50)
    {
      picsapi = setPicsapi(gambar.neutral);

    }

    else if (range > 50) {
      picsapi = setPicsapi(gambar.api);
      // picsice = setPicice(gambar.ice);
    } 
    
    else {
      picsapi = setPicsapi(gambar.api);
      // picsice = setPicice(gambar.ice);
    }

  }





  const BerubahBata = () => {
    if(rangedua > 50){

      picsice = setPicice(gambar.api);
      // picsice = setPicice(gambar.ice);

    }

    else if(rangedua>0 && rangedua<=50)
    {
      picsice = setPicice(gambar.neutral);

    }

    else if (rangedua<0) {
      picsice = setPicice(gambar.ice);
      // picsice = setPicice(gambar.ice);
    } 
    
    else {
      picsice = setPicice(gambar.ice);
      // picsice = setPicice(gambar.ice);
    }

  }




  return(
    <View>
      <ScrollView>

        <View style = {EnergyStyle.container0}>
          <View style = {{alignItems:'center', justifyContent:'center', width:'25%', flexDirection:'row'}}>
            
            <TouchableOpacity
            onPress = {()=>props.navigation.navigate('Task')}
            >
            <Icon
        
  raised
  name='arrow-left'
  type='font-awesome'
  color='#424242'
  // onPress={}
   />
              {/* <Text>back</Text> */}
            </TouchableOpacity>
          </View>



          <View style = {{alignItems:'center', justifyContent:'center', width:'15%', flexDirection:'row'}}>

          </View>



          {/* <View style = {{alignItems:'center', justifyContent:'center', width:'10%', flexDirection:'row'}}>
  
          </View> */}



          <View style = {{alignItems:'center', justifyContent:'center', width:'60%', flexDirection:'row'}}>
            <TouchableOpacity style = {{backgroundColor:'#221A82',  marginRight:10, marginLeft:10, padding:10, justifyContent:'center', alignItems:'center', width:150, borderRadius:15}}>
              <Text style = {{textAlign:'center', color:'#fff'}}>Lihat Persamaan Energy</Text>
            </TouchableOpacity>
          </View>


        </View>


        <View style = {EnergyStyle.container1}>
          <View style = {EnergyStyle.panci1}>
          <View  style = {EnergyStyle.kotakbesi}>
          <Text style = {{color:'#fff', fontSize:15, flex:1, alignItems:'center', justifyContent:'center'}}>Besi</Text> 
          </View>

          <View style = {{alignItems:'center', justifyContent:'center', marginBottom:-55, zIndex:3}}>
          <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/tripod.png')} style = {{width:70, height:70 }} />
          </View>

          <View style = {{alignItems:'center', justifyContent:'center'}}>

          {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/api.png')} style = {{width:50, height:50 }} /> */}
          <Image source = {picsapi} style = {{width:50, height:50 }} />
          
          </View>


          </View>

          <View style = {EnergyStyle.panci2}>

          <View  style = {EnergyStyle.kotakbata}>
          <Text style = {{color:'#fff', fontSize:15, flex:1, alignItems:'center', justifyContent:'center'}}>Bata
          </Text>
          </View>

          <View style = {{alignItems:'center', justifyContent:'center', marginBottom:-55, zIndex:3}}>
          <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/tripod.png')} style = {{width:70, height:70 }} />
          </View>

          <View style = {{alignItems:'center', justifyContent:'center'}}>
          {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/ice.png')} style = {{width:50, height:50 }} /> */}
          <Image source = {picsice} style = {{width:50, height:50 }} />
          </View>


          </View>

    

        </View>

  




        <View style = {EnergyStyle.container2}>
  

        
        <Text style = {{fontSize:20, fontWeight:'bold'}}>Temperatur Besi : {range} {'\u00b0'}C {'\n'}</Text>
        <Text>Massa : 10 kg</Text>
        <Text>Kalor Jenis : 450 J/kg</Text>
        <Text>Energi : {energyBesi} Joule</Text>

        <Slider 
      style = {{width:250, height:40}}
      minimumValue = {-100}
      maximumValue = {100}
      minimumTrackTintColor = 'tomato'
      maximumTrackTintColor='#000'
      thumbTintColor='tomato'
      value={range}
      onValueChange={value=>setRange(value)}
      // onValueChange={range}
      onSlidingStart={()=>setSliding('Sliding')}
      onSlidingComplete={()=>setSliding('Active')}
      />


      <TouchableOpacity style = {EnergyStyle.tombolplayBesi} onPress = {()=>{BerubahBesi() ; perhitunganEnergyBesi()}}>
              <Text style = {{color:'#fff', alignItems:'center', textAlign:'center'}}>Lihat Reaksi Besi</Text>
        </TouchableOpacity>


        </View> 

        <View style = {EnergyStyle.container3}>

        <Text style = {{fontSize:20, fontWeight:'bold'}}>Temperatur Bata : {rangedua} {'\u00b0'}C {'\n'}</Text>
        <Text>Massa : 10 kg</Text>
        <Text>Kalor Jenis : 438 J/kg</Text>
        <Text>Energi : {energyBata} Joule</Text>

        <Slider 
      style = {{width:250, height:40}}
      minimumValue = {-100}
      maximumValue = {100}
      minimumTrackTintColor = 'tomato'
      maximumTrackTintColor='#000'
      thumbTintColor='tomato'
      value={rangedua}
      onValueChange={value=>setRangedua(value)}
      onSlidingStart={()=>setSlidingdua('Sliding')}
      onSlidingComplete={()=>setSlidingdua('Active')}
      />


<TouchableOpacity style = {EnergyStyle.tombolplayBata} onPress = {()=>{BerubahBata() ; perhitunganEnergyBata()}}>
              <Text style = {{color:'#fff', alignItems:'center', textAlign:'center'}}>Lihat Reaksi Bata</Text>
        </TouchableOpacity>



          {/* <View style = {EnergyStyle.controlBesi}>

          </View>


          <View style = {EnergyStyle.controlBata} >

          </View> */}

        </View> 







        {/* <View style = {EnergyStyle.container4}>

        <Text style = {{fontSize:20, fontWeight:'bold', marginBottom:10}}>Kalkulasi Energi</Text>

          <TouchableOpacity style = {{backgroundColor:'#005b8f', padding:20, alignItems:'center', justifyContent:'center'}}>
            <Text style = {{textAlign:'center', color:'#fff', fontWeight:'bold'}}>Joule</Text>
          </TouchableOpacity>


        </View> */}














      </ScrollView>
     



    </View>

  );




}




const EnergyStyle = StyleSheet.create({

  container0:{
    flex:1,
    backgroundColor:'#FFF7D4',
    alignItems:'center',
    justifyContent:'center',
    // zIndex:2,
    width:'100%',
    height:100,
    // marginTop:20,
    // marginBottom:20,
    paddingTop:10,
    paddingBottom:10,
    flexDirection:'row',

  },


  container1:{
    flex:1,
    backgroundColor:'#FFF7D4',
    alignItems:'center',
    justifyContent:'center',
    // zIndex:2,
    width:'100%',
    height:200,
    // marginTop:20,
    // marginBottom:20,
    paddingTop:20,
    paddingBottom:20,
    flexDirection:'row',

  },

  container2:{
    flex:2,
    backgroundColor:'#FFF7D4',
    alignItems:'center',
    justifyContent:'center',
    zIndex:2,
    width:'100%',
    height:'50%',
    // marginTop:20,
    // marginBottom:20,

  },

  container3:{
    flex:3,
    backgroundColor:'#FFF7D4',
    alignItems:'center',
    justifyContent:'center',
    zIndex:2,
    width:'100%',
    height:'50%',
    // marginTop:20,
    paddingBottom:20,
    // marginBottom:20,
    paddingTop:20,
    // flexDirection:'row',

  },


  container4:{
    flex:4,
    backgroundColor:'#FFF7D4',
    alignItems:'center',
    justifyContent:'center',
    zIndex:2,
    width:'100%',
    height:'50%',
    // marginTop:20,
    paddingBottom:20,
    marginBottom:20,
    paddingTop:20,
    // flexDirection:'row',

  },




  kotakbesi:{

    // flex:2,
    width:70,
    paddingTop:30,
    backgroundColor:'#737373',
    alignItems:'center',
    justifyContent:'center',
    height:70,
    marginBottom:-15,
     zIndex:4,

  },

  kotakbata:{

    // flex:2,
    width:70,
    paddingTop:30,
    backgroundColor:'#b22222',
    alignItems:'center',
    justifyContent:'center',
    height:70,
    marginBottom:-15,
     zIndex:4,

  },

  panci1:{
    marginRight:10,
    marginLeft:10,
    marginBottom:-15,
  },

  panci2:{
    marginRight:10,
    marginLeft:10,
    marginBottom:-15,
  },

  tombolplayBesi:{
    backgroundColor:'#737373',
    width:150,
    padding:15,
    alignItems:'center',
    justifyContent:'center',
    marginTop:15,
    marginBottom:15,
    borderRadius:20,

  },

  controlBesi:{

    marginRight:10,
    marginLeft:10,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',

  },



  tombolplayBata:{
    backgroundColor:'#b22222',
    width:150,
    padding:15,
    alignItems:'center',
    justifyContent:'center',
    marginTop:15,
    marginBottom:15,
    borderRadius:20,
  },


  controlBata:{

    marginRight:10,
    marginLeft:10,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',

  },




});









function Linechart() {



return(
<LineGraph />
);




}




// function animategame() {
  
//   return (

//     <Game />

//   );

// }









// ANIMASI BRINA 1
function WorkAnimated() {




  var inputnilaimassa = '20';

  var [massa,onChangeMassa] = React.useState(null);

  var [percepatan,onChangePercepatan] = React.useState(null);

  var [jarak, onChangeJarak] = React.useState(null);

  var [usaha, onChangeUsaha] = React.useState(null);



  const Gaya = () =>{
    // e.preventDefault();
    let F = parseFloat(massa)*parseFloat(percepatan)*parseFloat(jarak);
    onChangeUsaha(F);

  }


  const Posisi = () => {
    x.value=onChange(jarak);    
  }





  const translateX = useSharedValue(0);
  const pressed = useSharedValue(false);

  const panGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onStart:(event)=>{},
    onActive:(event)=>{
      translateX.value = event.translationX;
      // console.log(event.translationX);
    },
    onEnd:(event)=>{},
  });



  // const startingPosition = 50;
  const startingPosition = 150;
  // const startingPositionx = (Dimensions.get('window').width)/2;
  const startingPositionx = 0;
  const x = useSharedValue(startingPositionx);
  const y = useSharedValue(startingPosition);




  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
      ctx.startX = x.value;
      ctx.startY = y.value;
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX;
      // y.value = ctx.startY + event.translationY;
      y.value = startingPosition;
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
      // x.value = withSpring(startingPosition);
      // y.value = withSpring(startingPosition);
      x.value = ctx.startX + event.translationX;
      // y.value = ctx.startY + event.translationY;
      y.value = startingPosition;
    },
  });




  // const InGestureEvent = useCallback(



  // );

  const rStyle = useAnimatedStyle(()=>{

    return {

      transform:[{

        translateX : translateX.value,

      },
    ],

    };

  });






  const SetJarak = () =>{
    x.value = (jarak)*(-2) ;
  }




  const uas = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? '#FEEF86' : '#FF0000',
      // transform: [{ translateX: x.value }, { translateY: y.value }],
      transform: [{ translateX: withSpring(x.value,{
        damping:massa,
        stiffness:percepatan,
      })  }, { translateY: y.value }],
    };
  });


  const bendausaha = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? '#FEEF86' : '#FF0000',
      // transform: [{ translateX: x.value }, { translateY: y.value }],
      transform: [{ translateX: withSpring(x.value)  }, { translateY: y.value }],
    };
  });

  const windowswidth = Dimensions.get('window').width;

  


 
  return(



  <View>
<ScrollView>



<View style = {animatestyle.containerBesar}>
{/* <Game/> */}

        {/* <GameEngine
                    ref={gameEngine}
                    style={styles.gameContainer}
                    running={state.running}
                    systems={[Physics]}
                    entities={entities}>
                    <StatusBar hidden={true} />
                </GameEngine> */}


         




<View style={animatestyle.container}>
      {/* <View style = {{marginTop:20, backgroundColor:'#000'}}> */}

      <PanGestureHandler onGestureEvent={eventHandler}>
        <Animated.View style={[animatestyle.square, uas]}  />
      </PanGestureHandler>






      {/* <Game/> */}

    

      {/* </View> */}


</View>
<Svg height="200" width={windowswidth}>
        <Line x1="0" y1="150" x2={windowswidth} y2="150" stroke="red" strokeWidth="5" strokeLinecap='round' strokeDasharray="1, 20"/> 
        <SvgText fill='white' textAnchor='middle'>
          0 1 2
        </SvgText>
</Svg>




<View style = {{backgroundColor:'#FF5757', justifyContent:'center', alignItems:'center',  zIndex:1, width:'100%', flex:2, marginTop:'10%'}}>



<View style = {{flex:1, width:'100%', flexDirection:'row', justifyContent:'center', marginTop:'10%'}}>

<View style = {{alignContent:'space-between', flexDirection:'column'}}>
<Text style = {{justifyContent:'center', alignContent:'center', textAlign:'center', color:'#fff'}}>Massa</Text>
<TextInput style = {{marginTop:'5%', alignContent:'space-between', padding:10, flexDirection:'row', borderRadius:20, height:40, width:100, backgroundColor:'#f2f2f2', color:'#000', fontWeight:'bold', marginLeft:5, marginRight:5}}

// onChangeText={text=>BerubahTeks(text)}
// defaultValue={text}
// multiline={true}
// numberOfLines={4} 
onChangeText={onChangeMassa}
value = {massa}
placeholder="Kg"
keyboardType="numeric"


/>

</View>





<View style = {{alignContent:'space-between', flexDirection:'column'}}>
<Text style = {{justifyContent:'center', alignContent:'center', textAlign:'center', color:'#fff'}}>Percepatan</Text>
<TextInput style = {{marginTop:'5%', alignContent:'space-between', padding:10, flexDirection:'row', borderRadius:20, height:40, width:100, backgroundColor:'#f2f2f2', color:'#25627F', fontWeight:'bold', marginLeft:5, marginRight:5}}

// onChangeText={text=>BerubahTeks(text)}
// defaultValue={text}
// multiline={true}
// numberOfLines={4} 
onChangeText={onChangePercepatan}
value = {percepatan}
placeholder="M/S^2"
keyboardType="numeric"


/>
</View>








<View style = {{alignContent:'space-between', flexDirection:'column'}}>
<Text style = {{justifyContent:'center', alignContent:'center', textAlign:'center', color:'#fff'}}>Jarak</Text>
<TextInput style = {{marginTop:'5%', alignContent:'space-between', padding:10, flexDirection:'row', borderRadius:20, height:40, width:100, backgroundColor:'#f2f2f2', color:'#000', fontWeight:'bold', marginLeft:5, marginRight:5}}

// onChangeText={text=>BerubahTeks(text)}
// defaultValue={text}
// multiline={true}
// numberOfLines={4} 
onChangeText={onChangeJarak}
value={jarak}
placeholder="Meter"
keyboardType="numeric"

/>
</View>





</View>


<View style = {{flex:2, width:'100%', flexDirection:'column', justifyContent:'center', marginTop:'10%', alignItems:'center'}}>




<TouchableOpacity style = {{backgroundColor:'#fff', padding:10, marginTop:10, borderRadius:10}}
onPress = {()=>{Gaya() ; SetJarak()}}
>
    <Text style = {{color:'#000', fontWeight:'bold'}}>Lihat Hasil Perhitungan</Text>
</TouchableOpacity>


<Text style = {{color:'#FFF7D4', fontWeight:'bold'}}>{'\n'} W = {usaha} Joule</Text>



<TouchableOpacity style = {animatestyle.button1} onPress = {()=>(x.value=5, y.value=150)}>
  <Text style = {{color:'#FF5757', fontWeight:'bold'}} >Jalankan Simulasi</Text>
</TouchableOpacity>






</View>

<View style = {{flex:3, width:'100%', flexDirection:'row', justifyContent:'center', marginTop:'10%'}}>
<Text style = {{color:'#fff'}} >Silakan Pilih</Text>
<Text>{'\n'}</Text>






</View>

</View>

</View>
</ScrollView>

  </View>

   
  );

}




const animatestyle = StyleSheet.create({
  containerBesar:{
    flex:1,
    backgroundColor:'#000',
    alignItems:'center',
    justifyContent:'center',
    height:'100%',
  },
  
  
    container:{
      flex:1,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center',
      zIndex:2,
      width:'100%',
    },

    containerdua:{
      backgroundColor:'#008000',
    },
    square:{
      width:SIZE,
      height:SIZE,
      backgroundColor:'#0000ff',
    },

    button1:{

      alignItems:'center',
      backgroundColor:'#FFF7D4',
      color:'#FF5757',
      padding:10,
      marginTop:'5%',
      borderRadius:15,
      width:'50%',
      justifyContent:'center',
      

    },
    gameContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
  },
});






function cobalogin() {

  <Halaman/>

}






// React Native-Reanimated Element
// const progress = useSharedValue(0);









// import Expo from "expo";
// import ExpoTHREE, { THREE } from 'expo-three';;

const onContextCreate = async({gl, scale, width, height, arSession}) => {
  this.renderer = ExpoTHREE.createRenderer({gl});
  this.renderer.setPixelRatio(scale);
  this.renderer.setSize(width, height);

  this.scene = new THREE.Scene();

  this.scene.background = ExpoTHREE.CreateARBackgroundTexture(arSession, this.renderer);

  this.camera = ExpoTHREE.createARCamera(arSession, width/scale, height/scale, 0.01, 1000);
}

const onRender = (delta) => {
this.renderer.render(this.scene, this.camera);
}


// const {width, height} = Dimension.get('window');










function beranda() {
  return (
  <View style = {{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#f2f2f2'}}>
    <Text>This is CodingYuk User Interface</Text>
  </View>
  );
}






function augmentedreality() {
  return (
  <View>
   

    <ImageBackground source={require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/arbg.jpeg')} resizeMode="cover" style = {{justifyContent:'center', alignItems:'center', height:700}} >
    <View style = {{backgroundColor:'#ffff', padding:15, borderRadius:20, marginBottom:15}}>
    <Text style = {{justifyContent:'center', alignItems:'center', fontSize:20, fontWeight:'bold', color:'#25627F'}}>Level 1 Hello World</Text> 
    </View>
      <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/robot.png')} style = {{width:200, height:300}} />
      {/* <Text>Hello Adri {'\n'}Saya Ingin Jadi Engineer</Text> */}
      <View style = {{alignItems:'center', justifyContent:'center', paddingLeft:15, paddingRight:15}}>
      <Text style = {{color:'#ffff', fontSize:18, fontWeight:'bold', justifyContent:'center', alignItems:'center', paddingLeft:15, paddingRight:15, marginBottom:20}}>Hallo Fairuz Saya ingin jadi Engineer</Text>
      
      <View style = {{flexDirection:'row'}}>
      <Icon
      name='star'
      type='font-awesome'
      color='yellow'
      onPress={() => console.log('hello')} 
      style = {{marginTop:30, marginLeft:5, marginRight:5}}
      />

      <Icon
      name='star'
      type='font-awesome'
      color='yellow'
      onPress={() => console.log('hello')} 
      style = {{marginTop:30}}
      />

      <Icon
      name='star'
      type='font-awesome'
      color='yellow'
      onPress={() => console.log('hello')} 
      style = {{marginTop:30, marginLeft:5, marginRight:5}}
      />

      <Icon
      name='star'
      type='font-awesome'
      color='yellow'
      onPress={() => console.log('hello')} 
      style = {{marginTop:30, marginLeft:5, marginRight:5}}
      />

      </View>

      <TouchableOpacity style = {{backgroundColor:'#EC8D8E', marginTop:15, borderRadius:10}}>
        <Text style = {{fontWeight:'bold', fontSize:20, padding:15, }}>Lanjut</Text>
      </TouchableOpacity>

      </View>
  </ImageBackground>


  </View>
  );

}








function test() {
  return(
    <View style = {{width:'80%'}}>
      <View>
             <YoutubePlayer
       height={200}
       marginTop={30}
       play={true}
       videoId='0SXltEa0Nzg'
       />
      </View>

    </View>
  )
}





function levelsatubelajar(props) {

  return(
    <View >
      <ScrollView >
        
        <View style = {{
              justifyContent:'center',
              alignItems:'center',
              marginTop:-10,
              backgroundColor:'#ED8D8D',
              height:500,
              // borderRadius:30,
        }}>
        <View style = {{flexDirection:'row'}}>
        <View style = {{alignItems:'stretch', marginLeft:10, width:'50%' }}>
          <TouchableOpacity>
          <Icon
            raised
            name='arrow-left'
            type='font-awesome'
            color='#ED8D8D'
            onPress={() => props.navigation.navigate('Beranda')} />
          </TouchableOpacity>
      </View>
        
        <View style = {{width:'50%'}}>

        </View>

        </View>
      
      <Text style = {{color:'#25627F', fontWeight:'bold', fontSize:20}}> "Hello World" </Text>

        <View style = {{height:200, width:'80%', justifyContent:'center', alignItems:'center', backgroundColor:'#424242', marginTop:20, marginBottom:20, borderRadius:20}}>
       

       <YoutubePlayer
       height={200}
       marginTop={30}
       play={true}
       videoId='0SXltEa0Nzg'
       />
       
       
       
        {/* <WebView style = {{justifyContent:'center', alignItems:'center', marginTop:30}}
   source={{html: '<iframe width="100%" height="50%" src="https://www.youtube.com/embed/0SXltEa0Nzg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}/> */}
       
       
        </View>
        {/* <View style = {{backgroundColor:'#f2f2f2', width:'100%', height:'100%'}}>

        </View> */}

        </View>
        <View style = {{ backgroundColor:'#f2f2f2', width:'100%', height:350,borderRadius:50, marginTop:-30, alignItems:'center'}}>
    

        <View style={{
          // alignSelf: 'stretch',
          borderBottomWidth: 5,
          borderBottomColor: 'rgba(66,66,66, 0.5)',
          // width:'%50',
          marginTop: 10,
          width:100,
          justifyContent:'center',
          alignItems:'center',
          marginBottom: 5
        }} />


            <Text style = {{marginTop:20, color:'#25627F', fontWeight:'bold', fontSize:20}}>Penjelasan Modul</Text>
      

          <View elevation = {10} style = {{ flexDirection:'row', borderRadius:20, marginTop:20, height:170, width:'80%', backgroundColor:'#f2f2f2', shadowColor:'#424242', shadowOpacity:0.8, shadowRadius:5, padding:10, marginBottom:20,  shadowOffset:{
          height:5, width:5
        }}}>
          <Text style = {{color:'#25627F', fontWeight:'bold', fontSize:19}}>Pada Level 1 ini , kalian akan belajar cara menampilkan tulisan pada program, yaitu dengan perintah printf('ketik namamu'){'\n'} Gampang Bukan ? </Text>
        </View>

        <TouchableOpacity style = {{marginTop:20, backgroundColor:'#ED8D8D', padding:10, borderRadius:10}}
        onPress = {()=>props.navigation.navigate('Level 1 Edit')}
        >
          <Text style = {{color:'#25627F', fontWeight:'bold'}}>Yuk Buat Codinganmu !</Text>
        </TouchableOpacity>
      
        </View>

      </ScrollView>
    </View>
  );

  

}















function Levelsaturun(props) {


  var nama = "time";
  var cita = "ohranger"
  var inputlevel1 = '#include<stdio.h> \n \n int main() \n { \n printf("Hallo"); \n printf("NAMA:'+ nama +'"); \n print("' + cita +'"); \n return 0;  }';





  var [text,BerubahTeks] = React.useState(inputlevel1);
  
  // const [text,BerubahTeks] = React.useState(inputlevel1);
  var new_str = text.replace('#include<stdio.h> \n \n int main() \n { \n printf("', '');
  var new_str2 = new_str.replace('"); \n printf("NAMA:', ' ');
  var new_str3 = new_str2.replace('"); \n print("','\n');
  var new_str4 = new_str3.replace('"); \n return 0;  }','')


var Hasil = () => {
  // var keadaan = this.state.new_str4;
    alert(new_str4);
  }


  const InputNilai = Yup.object().shape({
    kode: Yup.string().required('Required'),
    // password: Yup.string()
    //   .min(2, 'Too Short!')
    //   .max(10, 'Too Long!')
    //   .required('Required')
  });




  const {
    handleChange,
   submitForm,
    handleBlur,
    values,
    errors,
    touched
     } = useFormik({
    validationSchema: InputNilai,
    initialValues: { kode: '' },
    onSubmit: values =>
      // alert(`Nama: ${values.name}`),
      props.navigation.navigate('Beranda')
    
  });









  return (
 


    
  <View>
  <ScrollView >
    
    <View style = {styles.landinglevelsatu1} >
      <View style = {{alignItems:'stretch', marginLeft:10}}>
          <TouchableOpacity>
          <Icon
raised
name='arrow-left'
type='font-awesome'
color='#ED8D8D'
onPress={() => props.navigation.navigate('Level 1')} />
          </TouchableOpacity>
      </View>

      <View style = {{justifyContent:'center', alignItems:'center'}}>
      <Text style = {{color:'#25627F', alignItems:'center', justifyContent:'center', fontSize:20, fontWeight:'bold'}} >Level 1</Text>
      <Text style = {{color:'#25627F',  alignItems:'center', justifyContent:'center', fontSize:20, fontWeight:'bold'}} >"Hello World"</Text>
      {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/hero-img.png')} style = {{width:120, height:120}} /> */}
      </View>
      
    </View>

    <View style = {{
         marginTop:-30,
         borderRadius:40,
         height:450,
         backgroundColor:'#f2f2f2',
         justifyContent:'center',
         alignItems:'center'
    }}>
 


        {/* <View elevation = {10} style = {{ flexDirection:'row', borderRadius:20, marginTop:20, height:170, width:'80%', backgroundColor:'#f2f2f2', shadowColor:'#424242', shadowOpacity:0.8, shadowRadius:5, shadowOffset:{
          height:5, width:5
        }}}>

        </View> */}


        <TextInput style = {{marginTop:-120,padding:20, flexDirection:'row', borderRadius:20, height:300, width:'100%', backgroundColor:'#f2f2f2', color:'#25627F', fontWeight:'bold'}}

        // autoCapitalize='none'
        // autoCompleteType='kode'
        // onBlur={handleBlur('kode')}
        // error={errors.kode}
        // touched={touched.kode}
        // onChangeText={handleChange('kode')}
        // value = {inputlevel1} 
        // // onChangeText={BerubahTeks}
        // onPress ={submitForm}


        // value = {text}
        // onChangeText={BerubahTeks}
        onChangeText={text=>BerubahTeks(text)}
        defaultValue={text}
        multiline={true}
        numberOfLines={4} 
        
        />



          {/* <Text style = {{color:'#25627F', fontWeight:'bold'}} >
              {inputlevel1}
          </Text> */}

        {/* </View> */}







        <View style = {{marginTop:5}}>

          <TouchableOpacity style = {{backgroundColor:'#ED8D8D', padding:15, borderRadius:20, width:100, justifyContent:'center', alignItems:'center'}} 
          // onPress = {()=>Hasil} >
          onPress = {()=>Hasil()} >
            <Text style = {{fontWeight:'bold', fontSize:15, color:'#25627F'}}>
              RUN
            </Text>
          </TouchableOpacity>
        </View>




    </View>


  </ScrollView>
</View>






  );


}




function Levelsatuscan() {
  



}




















function Levelsatu(props) {


  const inputlevel1 = '#include<stdio.h> \n \n int main() \n { \n printf("Hallo"); \n printf("NAMA:isi nama kamu") \n print("Tulis Cita-citamu"); \n return 0;  }';



  const history = useHistory();
  return (
  // <View style = {{alignItems:'center', justifyContent:'center', backgroundColor:'#424242'}} >

  //   <View style = {styles.levelsatupage1}>

  //     <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/hero-img.png')} style = {{width:10, height:10}}  />


  //   </View>

  //   <View style = {styles.levelsatupage2}>
      
  //   </View>


  // </View> 
  



  <View>
    <ScrollView >
      
      <View style = {styles.landinglevelsatu1} >
        <View style = {{alignItems:'stretch', marginLeft:10}}>
            <TouchableOpacity>
            <Icon
  raised
  name='arrow-left'
  type='font-awesome'
  color='#ED8D8D'
  onPress={() => props.navigation.navigate('Beranda')} />
            </TouchableOpacity>
        </View>

        <View style = {{justifyContent:'center', alignItems:'center'}}>
        <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/hero-img.png')} style = {{width:120, height:120}} />
        </View>
        
      </View>

      <View style = {styles.landinglevelsatu2}>
      <View style={{
          // alignSelf: 'stretch',
          borderBottomWidth: 5,
          borderBottomColor: 'rgba(66,66,66, 0.5)',
          // width:'%50',
          marginTop: 10,
          width:100,
          justifyContent:'center',
          alignItems:'center',
          marginBottom: 15
        }} />
        <Text style = {{color:'#25627F', alignItems:'center', justifyContent:'center', fontSize:20, fontWeight:'bold'}} >Level 1</Text>
        <Text style = {{color:'#25627F',  alignItems:'center', justifyContent:'center', fontSize:20, fontWeight:'bold'}} >"Hello World"</Text>

          <View elevation = {5}  style = {{ flexDirection:'row', borderRadius:20, marginTop:20, height:70, width:'80%', backgroundColor:'#f2f2f2', shadowColor:'#424242', shadowOpacity:0.8, shadowRadius:2, shadowOffset:{
            height:2, width:2
          }}}>

            <View style = {{width:'30%', padding:15, justifyContent:'center'}}>
            {/* <Text>Hallo</Text> */}
              <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/icons.png')} style = {{width:50, height:50}}  />
            </View>
       
            <View  style = {{width:'60%', padding:15, justifyContent:'center'}}>
              <Text style = {{fontSize:18, color:'#25627F', fontWeight:'bold'}}>Yuk Belajar Dulu !</Text>
            </View>

          </View>


          {/* <View elevation = {10} style = {{ flexDirection:'row', borderRadius:20, marginTop:20, height:170, width:'80%', backgroundColor:'#f2f2f2', shadowColor:'#424242', shadowOpacity:0.8, shadowRadius:5, shadowOffset:{
            height:5, width:5
          }}}>

          </View> */}


          <View elevation = {10} style = {{ padding:20, flexDirection:'row', borderRadius:20, marginTop:20, height:180, width:'80%', backgroundColor:'#f2f2f2', shadowColor:'#424242', shadowOpacity:0.8, shadowRadius:5, shadowOffset:{
            height:5, width:5
          }}}>
            <Text style = {{color:'#25627F', fontWeight:'bold'}} >
                {inputlevel1}
            </Text>

          </View>








          <View style = {{marginTop:30}}>

            <TouchableOpacity style = {{backgroundColor:'#ED8D8D', padding:15, borderRadius:20}} onPress = {()=>props.navigation.navigate('Level 1 Edit')} >
              <Text style = {{fontWeight:'bold', fontSize:15, color:'#25627F'}}>
                Yuk Buat Codingmu !
              </Text>
            </TouchableOpacity>
          </View>




      </View>


    </ScrollView>
  </View>





  ) ;
}











function scan(props) {
  

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Belum Bisa Discan');

  const askForCameraPermission = () => {
    (async () =>{
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == 'granted')
    })()
  }

  useEffect ( () =>{
    askForCameraPermission();
  },[]);


  const navigation = useNavigation();


  const handleBarCodeScanned = ({type,data,props}) =>{
    setScanned(true);
    setText(data);
    console.log('Type: ' + type + '\nData:' + data);
    navigation.navigate(data);
  }


  if(hasPermission==null)
  {
    return(
      <View style = {styles.container}>
        <Text>Requesting For Camera Permission</Text>
      </View>
    )
  }

  if(hasPermission==false){
    return(
      <View>
        <Text>No Access To Camera</Text>
        <TouchableOpacity style = {{backgroundColor:'#424242'}}>
          <Text style = {{color:'#ffff'}}>Silakan Scan</Text>
        </TouchableOpacity>
      </View>
    )
  }



  return(
    <View style = {styles.container2}>

<View style = {{width:'90%', justifyContent:'center', alignItems:'center', flexDirection:'row', marginBottom:30}} >
    <View style = {{width:'45%'}}>
       <TouchableOpacity>
       <Icon
  raised
  name='arrow-left'
  type='font-awesome'
  color='#424242'
  onPress={() => props.navigation.navigate('Beranda')} />
         
         </TouchableOpacity> 
    </View>
    
    <View style = {{width:'45%'}}>
       {/* <TouchableOpacity><Text>Kembali</Text></TouchableOpacity>  */}
    </View>

  </View>






      <View style = {styles.barcodebox} >
          <BarCodeScanner onBarCodeScanned = {scanned?undefined:handleBarCodeScanned} style = {{height:400, width:400, borderRadius:50, }} />
      </View>

      <Text style = {{justifyContent:'center', alignItems:'center', color:'#424242', marginTop:15}}>{text}</Text>

      {/* {scanned && 
      <TouchableOpacity onPress ={()=>setScanned(false)} style = {{backgroundColor:'#038089', width:'60%', height:20, marginTop:20, alignItems:'center', justifyContent:'center', padding:25, borderRadius:20}}><Text style = {{color:'#ffff', fontWeight:'bold', fontSize:25}}>Silakan Scan</Text></TouchableOpacity>
      } */}

      <TouchableOpacity onPress ={()=>setScanned(false)} ><Icon
  raised
  name='dot-circle-o'
  type='font-awesome'
  color='#424242'
  onPress={() => console.log('Pindah')} /></TouchableOpacity>



    </View>
  )





}



















function Home(props) {
  return(
    
    <View style = {styles.home}>
    
    <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/home_1.png')} style = {{width:300, height:300}} />
      {/* <Text>Home</Text> */}

      <TouchableOpacity style = {{backgroundColor:'#221A82', paddingTop:10, paddingBottom:10, paddingRight:15, paddingLeft:15, borderRadius:20}} onPress = {()=>props.navigation.navigate('Login')} >
          <Text style = {{fontSize:20, color:'#FFF7D4'}}>
            Get Started
          </Text>
      </TouchableOpacity>

    </View>


  );
}






function Task(props) {
  return(
    // <View style = {styles.task}>
    //   <Text>Task</Text>
    // </View>


    <View style = {styles.home}>
      <Text style = {gaya.texthome}> Find your experiment
you want to learn! </Text>








<View style = {{width:'88%', height:100, backgroundColor:'#FF5757', marginTop:20, flexDirection:'row', borderRadius:20,}}>
              <View style = {{justifyContent:'center', alignItems:'center', width:'25%',  marginLeft:5}}>
                <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/works.png')} style = {{width:75, height:75}} />
              </View>


              <View style = {{justifyContent:'center', alignItems:'center', width:'30%', marginLeft:5, marginRight:5, }}>
                {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/icons.png')} style = {{width:50, height:50}} />
                 */}

                <Text style = {{fontWeight:'bold', color:'#FFF7D4', fontSize:25}}>WORKS</Text>
  
              </View>



              <View style = {{justifyContent:'center', alignItems:'center', width:'37%', marginRight:5, flexDirection:'row'}}>
                {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/icons.png')} style = {{width:50, height:50}} />
                 */}

                {/* <Text style = {{fontWeight:'bold', color:'#435665'}}>25 %</Text> */}
                <TouchableOpacity onPress={
        ()=>props.navigation.navigate('WorkAnimated')
        } style = {{backgroundColor:'#221A82', paddingTop:5, paddingBottom:5,paddingLeft:10, paddingRight:10, borderRadius:10 }} >




                {/* <Icon
                  raised
                  name='play'
                  type='font-awesome'
                  color='#f50'
                  onPress={() => console.log('hello')} 
                  size={15}
                  /> */}

                  <Text style = {{color:'#fff', fontWeight:'bold'}}> Explore </Text>



                  {/* <CircularProgress /> */}

                </TouchableOpacity>
              </View>

          </View>










   <View style = {{width:'88%', height:100, backgroundColor:'#FF5757', marginTop:20, flexDirection:'row', borderRadius:20,}}>
              <View style = {{justifyContent:'center', alignItems:'center', width:'25%',  marginLeft:5}}>
                <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/energy.png')} style = {{width:70, height:70}} />
              </View>


              <View style = {{justifyContent:'center', alignItems:'center', width:'30%', marginLeft:5, marginRight:5, }}>
                {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/icons.png')} style = {{width:50, height:50}} />
                 */}

                <Text style = {{fontWeight:'bold', color:'#FFF7D4', fontSize:25}}>ENERGY</Text>
  
              </View>



              <View style = {{justifyContent:'center', alignItems:'center', width:'37%', marginRight:5, flexDirection:'row'}}>
                {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/icons.png')} style = {{width:50, height:50}} />
                 */}

                {/* <Text style = {{fontWeight:'bold', color:'#435665'}}>25 %</Text> */}
                <TouchableOpacity onPress={
        ()=>props.navigation.navigate('Energy')
        } style = {{backgroundColor:'#221A82', paddingTop:5, paddingBottom:5,paddingLeft:10, paddingRight:10, borderRadius:10 }} >




                {/* <Icon
                  raised
                  name='play'
                  type='font-awesome'
                  color='#f50'
                  onPress={() => console.log('hello')} 
                  size={15}
                  /> */}

                  <Text style = {{color:'#fff', fontWeight:'bold'}}> Explore </Text>



                  {/* <CircularProgress /> */}

                </TouchableOpacity>
              </View>

          </View>











    </View>


  );
}



const gaya = StyleSheet.create({
    texthome:{
      color:'#221A82',
      fontSize:15,
      fontWeight:'bold',
    },
});

















function Login(props)
{


  const InputSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    // password: Yup.string()
    //   .min(2, 'Too Short!')
    //   .max(10, 'Too Long!')
    //   .required('Required')
  });




  const {
    handleChange,
   submitForm,
    handleBlur,
    values,
    errors,
    touched
     } = useFormik({
    validationSchema: InputSchema,
    initialValues: { name: '' },
    onSubmit: values =>
      // alert(`Nama: ${values.name}`),
      props.navigation.navigate('Task')
    
  });


  const [text, KetikNama] = React.useState('Ketik Namamu');

  return(
    <View style = {styles.login}>

{/* <ImageBackground source={require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/bg-login.png')} resizeMode="cover" style={styles.bgimage}> */}



<View style = {styles.bgimage}>

<Text style = {{justifyContent:'center', alignItems:'center', fontSize:25, fontWeight:'bold', color:'#ffff', marginBottom:10,}}> Yuk Masukkan Username </Text>

<Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/robot.png')} style = {{width:75, height:150}} />



<TextInput 
placeholder="Ketik Namamu"
autoCapitalize='none'
autoCompleteType='name'
onBlur={handleBlur('name')}
error={errors.name}
touched={touched.name}
onChangeText={handleChange('name')}
// onChangeText={KetikNama} value = {text}
  style={{width:'70%', height:30, backgroundColor:'#ffff', marginTop:20, borderRadius:10, paddingLeft:10}} />
<TouchableOpacity style = {{width:'100%', height:30, backgroundColor:'#FFF7D4', marginTop:20, paddingTop:20, paddingBottom:20, paddingLeft:100, paddingRight:100, justifyContent:'center', borderRadius:30}}
//  onPress ={()=>props.navigation.navigate('Beranda')}
onPress ={submitForm}
 
 >
  <Text style = {{fontSize:20, fontWeight:'bold', color:'#FF5757'}}>
    Masuk
  </Text>
</TouchableOpacity>
</View>

{/* </ImageBackground> */}

    </View>
  )
}




























function Landing(props){

  const [text, onChangeText] = React.useState("Search For Knowledge");
  return(
    <View>
      <ScrollView>
       <View style = {styles.landingutama1}>
        {/* <View style = {styles.landingutama0}> */}
          
       <View style = {styles.landingutamakiri1}>
          <Text style = {styles.textlandingkiri1}>Welcome To CodingYuk !</Text>
          {/* <Image source={require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/hero-img.png')} style = {{width:150,height:150,justifyContent:'center', alignItems:'center'}} /> */}
        </View>

        <View style = {styles.landingutamakanan1}>
          {/* <Text style = {styles.textlandingkanan1}>Welcome To CodingYuk !</Text> */}
          <Image source={require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/hero-img.png')} style = {{width:150,height:150,justifyContent:'center', alignItems:'center'}} />
        <Text>{'\n'}</Text>
        </View>


        {/* </View> */}

       </View>





       <View style={styles.landingutama2}>
         
          <TextInput 
          // onChangeText={onChangeText} value = {text} 
          placeholder="Search For Knowledge"
          style = {styles.teksinput}/>

      




<View style = {styles.landingutama3}>
<View style = {{width:'50%',}}>
  <Text style = {{fontWeight:'bold', padding:20,color:'#435665', fontSize:15}}>Ayo mulai belajar Coding</Text>
  <TouchableOpacity 
  style = {{borderRadius:10,paddingTop:10, paddingBottom:10, backgroundColor:'#ED8D8D', marginBottom:10, marginLeft:20, alignItems:'center' }}
  onPress = {()=>props.navigation.navigate('Scan')}
  >
    <Text style = {{color:'#ffff', fontWeight:'bold',}} >Scan QR Code</Text>
  </TouchableOpacity>

  {/* <TextInput style = {{backgroundColor:'#424242', height:25, width:'80%', marginTop:20}} /> */}
</View>


<View style = {{width:'50%'}}>
<Image source={require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/barcode.png')} style = {{width:140,height:140,justifyContent:'center', alignItems:'center'}} />
</View>




<View></View>


</View>



          </View>









       <View style = {styles.konten1}>
        <Text style = {styles.tulisankonten1}>Yuk Lanjutin Belajarmu !</Text>


          <View style = {{width:'88%', height:100, backgroundColor:'rgba(203,108,230, 0.4)', marginTop:20, flexDirection:'row', borderRadius:20,}}>
              <View style = {{justifyContent:'center', alignItems:'center', width:'25%',  marginLeft:5}}>
                <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/icons.png')} style = {{width:50, height:50}} />
              </View>


              <View style = {{justifyContent:'center', alignItems:'center', width:'30%', marginLeft:5, marginRight:5, }}>
                {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/icons.png')} style = {{width:50, height:50}} />
                 */}

                <Text style = {{fontWeight:'bold', color:'#435665'}}>Level 1 {'\n'}Hello World</Text>
                <Text style = {{fontSize:8, color : '#FF0000', marginTop:3}}>10 Hours, 19 Lesson</Text>
              </View>


              <View style = {{justifyContent:'center', alignItems:'center', width:'37%', marginRight:5, flexDirection:'row'}}>
                {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/icons.png')} style = {{width:50, height:50}} />
                 */}

                <Text style = {{fontWeight:'bold', color:'#435665'}}>25 %</Text>
                <TouchableOpacity onPress={
        ()=>props.navigation.navigate('Level 1')
        } >
                <Icon
                  raised
                  name='play'
                  type='font-awesome'
                  color='#f50'
                  onPress={() => console.log('hello')} 
                  size={15}
                  />

                  {/* <CircularProgress /> */}

                </TouchableOpacity>
              </View>

          </View>






          <View style = {{width:'88%', height:100, backgroundColor:'rgba(255, 222, 89, 0.4)', marginTop:20, flexDirection:'row', borderRadius:20,}}>
              <View style = {{justifyContent:'center', alignItems:'center', width:'25%',  marginLeft:5}}>
                <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/math-op-basic.png')} style = {{width:50, height:50}} />
              </View>


              <View style = {{justifyContent:'center', alignItems:'center', width:'30%', marginLeft:5, marginRight:5, }}>
                {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/icons.png')} style = {{width:50, height:50}} />
                 */}

                <Text style = {{fontWeight:'bold', color:'#435665'}}>Level 2 {'\n'}Yuk Berhitung 1</Text>
                <Text style = {{fontSize:8, color : '#FF0000', marginTop:3}}>10 Hours, 19 Lesson</Text>
              </View>


              <View style = {{justifyContent:'center', alignItems:'center', width:'37%', marginRight:5, flexDirection:'row'}}>
                {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/icons.png')} style = {{width:50, height:50}} />
                 */}

                <Text style = {{fontWeight:'bold', color:'#435665'}}>25 %</Text>
                <TouchableOpacity>
                <Icon
                  raised
                  name='play'
                  type='font-awesome'
                  color='#f50'
                  onPress={() => console.log('hello')}
                  size={15}
                  />

                  {/* <CircularProgress /> */}

                </TouchableOpacity>
              </View>

          </View>
















          <View style = {{width:'88%', height:100, backgroundColor:'rgba(140,82,255, 0.1)', marginTop:20, flexDirection:'row', borderRadius:20,}}>
              <View style = {{justifyContent:'center', alignItems:'center', width:'25%',  marginLeft:5}}>
                <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/math-op.png')} style = {{width:50, height:50}} />
              </View>


              <View style = {{justifyContent:'center', alignItems:'center', width:'30%', marginLeft:5, marginRight:5, }}>
                {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/icons.png')} style = {{width:50, height:50}} />
                 */}

                <Text style = {{fontWeight:'bold', color:'#435665'}}>Level 3 {'\n'}Yuk Berhitung 2</Text>
                <Text style = {{fontSize:8, color : '#FF0000', marginTop:3}}>10 Hours, 19 Lesson</Text>
              </View>


              <View style = {{justifyContent:'center', alignItems:'center', width:'37%', marginRight:5, flexDirection:'row'}}>
                {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Brina_project/src/icons.png')} style = {{width:50, height:50}} />
                 */}

                <Text style = {{fontWeight:'bold', color:'#435665'}}>25 %</Text>
                <TouchableOpacity>
                <Icon
                  raised
                  name='play'
                  type='font-awesome'
                  color='#f50'
                  onPress={() => console.log('hello')}
                  size={15}
                  />

                  {/* <CircularProgress /> */}

                </TouchableOpacity>
              </View>

          </View>
























        </View>



      </ScrollView>

    </View>
    

 

  )
}








const Drawer = createDrawerNavigator();

const NullComponent = props => {
  return null;
}

const CustomDrawer = (props) =>{
  return <DrawerContentScrollView {...props} >
    <View style = {styles.user1}>
      <View>
         <Text style = {{color:'white'}}>Hallo</Text>
         <Text style = {{color:'white', fontWeight:'bold'}}> Fairuz Firjatullah</Text>
        
      </View>
      <Image source = {{
           uri:'https://scontent.fcgk7-1.fna.fbcdn.net/v/t1.6435-9/240876440_2244872828982700_4369412180999056654_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHfom63bSm5fBxMKcIy-5HPH-IPE5b9vyYf4g8Tlv2_JqE90H3cD0bB8Ew_HcuWZ0Cm6MQ82msr1GgLDlqqUWtN&_nc_ohc=ec79RYEFIj8AX-BkjJP&_nc_ht=scontent.fcgk7-1.fna&oh=e3e313e350d200237922feca2e095e05&oe=618D6F9C'
         }} style = {{width:50, height:50, borderRadius:30,}} />
    </View>

    <DrawerItemList {...props} />
  </DrawerContentScrollView>

}
















const DrawerNavigator = ()=>{
  return <Drawer.Navigator drawerContent = {(props)=><CustomDrawer {...props}/>} >














<Drawer.Screen component = {Home} name = 'Home'   options={{
          // title: 'My home',
          headerShown: false,
          gestureEnabled:false,
          swipeEnabled:false,

          
          headerStyle: {
            backgroundColor: '#ED8D8D',
            // height:'50%',
            // borderRadius:20,
            // marginTop:20,
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            // color:'#ED8D8D',
            color:'#ffff',
            display:'none',

          },
          // headerShown:false,
          // drawerItemStyle:{
          //   display:'none',
          // }
        }} 
        
        // options={{drawerLabel: NullComponent}}
        />
        









<Drawer.Screen component = {Energy} name = 'Energy'   options={{
          // title: 'My home',
          headerShown: false,
          // gestureEnabled:false,
          // swipeEnabled:false,

          
          headerStyle: {
            backgroundColor: '#ED8D8D',
            // height:'50%',
            // borderRadius:20,
            // marginTop:20,
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            // color:'#ED8D8D',
            color:'#ffff',
            display:'none',

          },
          // headerShown:false,
          // drawerItemStyle:{
          //   display:'none',
          // }
        }} 
        
        // options={{drawerLabel: NullComponent}}
        />









<Drawer.Screen component = {WorkAnimated} name = 'WorkAnimated'   options={{
          // title: 'My home',
          headerShown: false,
          // gestureEnabled:false,
          // swipeEnabled:false,

          
          headerStyle: {
            backgroundColor: '#ED8D8D',
            // height:'50%',
            // borderRadius:20,
            // marginTop:20,
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            // color:'#ED8D8D',
            color:'#ffff',
            display:'none',

          },
          // headerShown:false,
          // drawerItemStyle:{
          //   display:'none',
          // }
        }} 
        
        // options={{drawerLabel: NullComponent}}
        />


<Drawer.Screen component = {Linechart} name = 'Linechart'   options={{
          // title: 'My home',
          headerShown: false,
          // gestureEnabled:false,
          // swipeEnabled:false,

          
          headerStyle: {
            backgroundColor: '#ED8D8D',
            // height:'50%',
            // borderRadius:20,
            // marginTop:20,
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            // color:'#ED8D8D',
            color:'#ffff',
            display:'none',

          },
          // headerShown:false,
          // drawerItemStyle:{
          //   display:'none',
          // }
        }} 
        
        // options={{drawerLabel: NullComponent}}
        />









{/* <Drawer.Screen component = {animategame} name = 'Animategame'   options={{
          // title: 'My home',
          headerShown: false,
          // gestureEnabled:false,
          // swipeEnabled:false,

          
          headerStyle: {
            backgroundColor: '#ED8D8D',
            // height:'50%',
            // borderRadius:20,
            // marginTop:20,
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            // color:'#ED8D8D',
            color:'#ffff',
            display:'none',

          },
          // headerShown:false,
          // drawerItemStyle:{
          //   display:'none',
          // }
        }} 
        
        // options={{drawerLabel: NullComponent}}
        /> */}














<Drawer.Screen component = {Login} name = 'Login'    options={{
            headerShown: false,
            drawerItemStyle:{
              display:'none',
            
            },
            drawerContentContainerStyle:{
              display:'none',
            },
            // headerLeftContainerStyle:{
            //   display:'none',
            // }
            gestureEnabled:false,
            swipeEnabled:false
         
          }}

          
        
          

          />
























<Drawer.Screen component = {Landing} name = 'Beranda'   options={{
          
          // title: 'My home',

          drawerIcon:({color}) => <Icon
          size={23}
          name={'home'} type ={'font-awesome'} color = {color}></Icon>,

          drawerItemStyle:{
            activeBackgroundColor:'#ED8D8D',
        
          },

          drawerActiveBackgroundColor:'rgba(237,141,141, 0.5)',
          drawerActiveTintColor:'#f50',

          headerStyle: {
            backgroundColor: '#ED8D8D',
            // backgroundColor: 'transparent',
            // height:'50%',
            // borderRadius:20,
            // marginTop:20,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color:'#ED8D8D',
            display:'none',
          },
        }} />

















    









    <Drawer.Screen component = {Task} name = 'Task'
    
    options = {{

      headerShown:false,

      drawerItemStyle:{
        activeBackgroundColor:'#424242',
      }
    }}

    />

    <Drawer.Screen component = {Levelsatu} name = 'Level 1'
    options = {{
      headerShown:false,


      headerStyle :{
        backgroundColor:'#424242',
      },
      drawerItemStyle:{
        display:'none',
      },

    }}
    />


    <Drawer.Screen component = {scan} name = 'Scan'
    options={{
      headerShown:false,
      drawerItemStyle:{
        display:'none',
      },
      gestureEnabled:false,
      swipeEnabled:false,
    }}

    />

    <Drawer.Screen component = {Levelsaturun} name = 'Level 1 Edit'
    options = {{
      headerShown:false,
      drawerItemStyle:{
        display:'none',
      },
    }}
    />

    <Drawer.Screen component = {levelsatubelajar} name = 'Level 1 Belajar'
      options = {{
        // drawerItemStyle:{
        //   display:'none',
        // },

        headerShown:false,
      }}
    />

    <Drawer.Screen
    component = {test} name = 'Tes'
    />


    <Drawer.Screen
    component = {beranda} name = 'Land'
    />

    <Drawer.Screen
    component = {augmentedreality} name = 'Augmented Reality'
    options = {{
      headerShown:false
    }}
    />




<Drawer.Screen
    component = {cobalogin} name = 'Coba Login'
    />
    






  </Drawer.Navigator>
}


export default function App() {

  
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    <NavigationContainer >
      <DrawerNavigator  />
    </NavigationContainer>
  

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: '#424242',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  container2: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: '#424242',
    alignItems: 'center',
    justifyContent: 'center',
    
  },



  home:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:'#fff',
    backgroundColor:'#FFF7D4',

  },

  task:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },

  landing:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },

  header1:{
    color:'#fff',
    backgroundColor:'#424242',
  },

  user1:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:15,
    alignItems:'center',
    backgroundColor:'#ED8D8D',
    marginBottom:10,
 
  },

  landingutama1:{
    backgroundColor:'#ED8D8D',
    height:320,
    borderRadius:20,
    marginTop:-25,
    flexDirection:'row',
    justifyContent:'center',
    zIndex:1,
    elevation:1,
  
  },


  landingutama0:{

    flexDirection:'row',
    // justifyContent:'center',
    zIndex:1,
    elevation:1,
    height:300,
    
  
  },






  
  landingutamakiri1:{
    flex:1,

    marginTop:50,
    width:'50%',
    marginLeft:30,

  },

  textlandingkiri1:{
    fontSize:25,
    fontWeight:'bold',
    color:'#fff',

  },



  landingutamakanan1:{
    flex:1,

    marginTop:50,
    width:'50%',
    marginRight:30,

  },

  textlandingkanan1:{
    fontSize:25,
    fontWeight:'bold',
    color:'#fff',

  },





  landingutama2:{
      zIndex:2,
      elevation:2,
      // marginTop:-50,
      alignItems:'center',
      // flexDirection:'row',
  },



  teksinput:{
    width:'80%',
    height:45,
    backgroundColor:'#fff',
    marginTop:-130,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    padding:10,
    fontWeight:'bold',
    color:'#435665',
  
    

  },

  landingutama3:{
    width:'80%',
    height:140,
    backgroundColor:'#FAF3F4',
    marginTop:30,
    borderRadius:10,
    flexDirection:'row',


    
  },


  konten1:{
    justifyContent:'center', marginLeft:50, marginTop:30,
    
  },

  tulisankonten1:{
    fontWeight:'bold',
    color:'#435665',
    fontSize:15,
  },

  login:{
    // backgroundColor:'#435665',
    backgroundColor:'#221A82',
    height:'100%',
    width:'100%',
  },

  bgimage:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },

  levelsatupage1:{
    backgroundColor:'#ED8D8D',
  },

  levelsatupage2:{
    backgroundColor:'#ffff',
  },


  landinglevelsatu1:{
    justifyContent:'center',
    // alignItems:'center',
    marginTop:-20,
    backgroundColor:'#ED8D8D',
    height:250,
    // borderRadius:30,

  },

  landinglevelsatu2:{
    marginTop:-30,
    borderRadius:40,
    height:550,
    backgroundColor:'#f2f2f2',
    justifyContent:'center',
    alignItems:'center'

  },


  barcodebox:{
    alignItems:'center',
    justifyContent:'center',
    height:300,
    width:300,
    overflow:'hidden',
    borderRadius:20,
    backgroundColor:'tomato',
  },

  levelsaturun1:{
    justifyContent:'center',
    // alignItems:'center',
    marginTop:-20,
    backgroundColor:'#ED8D8D',
    height:250,
    // borderRadius:30,
  },





});
