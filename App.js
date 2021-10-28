import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, Dimensions, ImageBackground, Button } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CircularProgress from "react-native-circular-progress-indicator";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { Icon } from "react-native-elements";
import { useHistory } from "react-router-dom";
import { BarCodeScanner } from "expo-barcode-scanner";
import { WebView } from "react-native-webview";
import YoutubePlayer from "react-native-youtube-iframe";
// import ExpoGraphics from "expo-graphics";
// import ExpoTHREE, { THREE } from 'expo-three';;

// import {  } from "react-redux";



function augmentedrealitybenar() {
  return(

      <ExpoGraphics.View 
        style = {{flex:1}}
      />

  );
}





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
   

    <ImageBackground source={require('D:/XAMPP/htdocs/khusus-mobile-apps/CodingKuy/src/arbg.jpeg')} resizeMode="cover" style = {{justifyContent:'center', alignItems:'center', height:700}} >
    <View style = {{backgroundColor:'#ffff', padding:15, borderRadius:20, marginBottom:15}}>
    <Text style = {{justifyContent:'center', alignItems:'center', fontSize:20, fontWeight:'bold', color:'#25627F'}}>Level 1 Hello World</Text> 
    </View>
      <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/CodingKuy/src/robot.png')} style = {{width:200, height:300}} />
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

  const inputlevel1 = '#include<stdio.h> \n \n int main() \n { \n printf("Hallo"); \n printf("NAMA:isi nama kamu") \n print("Tulis Cita-citamu"); \n return 0;  }';

  const [text,BerubahTeks] = React.useState(inputlevel1);

  const InputNilai = Yup.object().shape({
    kode: Yup.string().required('Required'),
    // password: Yup.string()
    //   .min(2, 'Too Short!')
    //   .max(10, 'Too Long!')
    //   .required('Required')
  });




  const {
    handleChange,
    handleSubmit,
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
      {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/CodingKuy/src/hero-img.png')} style = {{width:120, height:120}} /> */}
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
        // onPress ={handleSubmit}


        value = {text}
        onChangeText={BerubahTeks}
        multiline={true}
        numberOfLines={4} 
        
        />



          {/* <Text style = {{color:'#25627F', fontWeight:'bold'}} >
              {inputlevel1}
          </Text> */}

        {/* </View> */}








        <View style = {{marginTop:5}}>

          <TouchableOpacity style = {{backgroundColor:'#ED8D8D', padding:15, borderRadius:20, width:100, justifyContent:'center', alignItems:'center'}} >
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

  //     <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/CodingKuy/src/hero-img.png')} style = {{width:10, height:10}}  />


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
        <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/CodingKuy/src/hero-img.png')} style = {{width:120, height:120}} />
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
              <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/CodingKuy/src/icons.png')} style = {{width:50, height:50}}  />
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



















function Home() {
  return(
    <View style = {styles.home}>
      <Text>Home</Text>
    </View>
  );
}



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
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched
     } = useFormik({
    validationSchema: InputSchema,
    initialValues: { name: '' },
    onSubmit: values =>
      // alert(`Nama: ${values.name}`),
      props.navigation.navigate('Beranda')
    
  });


  const [text, KetikNama] = React.useState('Ketik Namamu');

  return(
    <View style = {styles.login}>

<ImageBackground source={require('D:/XAMPP/htdocs/khusus-mobile-apps/CodingKuy/src/bg-login.png')} resizeMode="cover" style={styles.bgimage}>
<Text style = {{justifyContent:'center', alignItems:'center', fontSize:30, fontWeight:'bold', color:'#ffff'}}> Yuk Daftar </Text>
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
<TouchableOpacity style = {{width:'100%', height:30, backgroundColor:'#038089', marginTop:20, paddingTop:20, paddingBottom:20, paddingLeft:100, paddingRight:100, justifyContent:'center', borderRadius:30}}
//  onPress ={()=>props.navigation.navigate('Beranda')}
onPress ={handleSubmit}
 
 >
  <Text style = {{fontSize:20, fontWeight:'bold', color:'#ffff'}}>
    Daftar
  </Text>
</TouchableOpacity>

</ImageBackground>

    </View>
  )
}













function Task() {
  return(
    <View style = {styles.task}>
      <Text>Task</Text>
    </View>
  );
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
          {/* <Image source={require('D:/XAMPP/htdocs/khusus-mobile-apps/CodingKuy/src/hero-img.png')} style = {{width:150,height:150,justifyContent:'center', alignItems:'center'}} /> */}
        </View>

        <View style = {styles.landingutamakanan1}>
          {/* <Text style = {styles.textlandingkanan1}>Welcome To CodingYuk !</Text> */}
          <Image source={require('D:/XAMPP/htdocs/khusus-mobile-apps/CodingKuy/src/hero-img.png')} style = {{width:150,height:150,justifyContent:'center', alignItems:'center'}} />
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
<Image source={require('D:/XAMPP/htdocs/khusus-mobile-apps/CodingKuy/src/barcode.png')} style = {{width:140,height:140,justifyContent:'center', alignItems:'center'}} />
</View>




<View></View>


</View>



          </View>









       <View style = {styles.konten1}>
        <Text style = {styles.tulisankonten1}>Yuk Lanjutin Belajarmu !</Text>


          <View style = {{width:'88%', height:100, backgroundColor:'rgba(203,108,230, 0.4)', marginTop:20, flexDirection:'row', borderRadius:20,}}>
              <View style = {{justifyContent:'center', alignItems:'center', width:'25%',  marginLeft:5}}>
                <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/CodingKuy/src/icons.png')} style = {{width:50, height:50}} />
              </View>


              <View style = {{justifyContent:'center', alignItems:'center', width:'30%', marginLeft:5, marginRight:5, }}>
                {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/CodingKuy/src/icons.png')} style = {{width:50, height:50}} />
                 */}

                <Text style = {{fontWeight:'bold', color:'#435665'}}>Level 1 {'\n'}Hello World</Text>
                <Text style = {{fontSize:8, color : '#FF0000', marginTop:3}}>10 Hours, 19 Lesson</Text>
              </View>


              <View style = {{justifyContent:'center', alignItems:'center', width:'37%', marginRight:5, flexDirection:'row'}}>
                {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/CodingKuy/src/icons.png')} style = {{width:50, height:50}} />
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
                <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/CodingKuy/src/math-op-basic.png')} style = {{width:50, height:50}} />
              </View>


              <View style = {{justifyContent:'center', alignItems:'center', width:'30%', marginLeft:5, marginRight:5, }}>
                {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/CodingKuy/src/icons.png')} style = {{width:50, height:50}} />
                 */}

                <Text style = {{fontWeight:'bold', color:'#435665'}}>Level 2 {'\n'}Yuk Berhitung 1</Text>
                <Text style = {{fontSize:8, color : '#FF0000', marginTop:3}}>10 Hours, 19 Lesson</Text>
              </View>


              <View style = {{justifyContent:'center', alignItems:'center', width:'37%', marginRight:5, flexDirection:'row'}}>
                {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/CodingKuy/src/icons.png')} style = {{width:50, height:50}} />
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
                <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/CodingKuy/src/math-op.png')} style = {{width:50, height:50}} />
              </View>


              <View style = {{justifyContent:'center', alignItems:'center', width:'30%', marginLeft:5, marginRight:5, }}>
                {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/CodingKuy/src/icons.png')} style = {{width:50, height:50}} />
                 */}

                <Text style = {{fontWeight:'bold', color:'#435665'}}>Level 3 {'\n'}Yuk Berhitung 2</Text>
                <Text style = {{fontSize:8, color : '#FF0000', marginTop:3}}>10 Hours, 19 Lesson</Text>
              </View>


              <View style = {{justifyContent:'center', alignItems:'center', width:'37%', marginRight:5, flexDirection:'row'}}>
                {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/CodingKuy/src/icons.png')} style = {{width:50, height:50}} />
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

















    
    <Drawer.Screen component = {Home} name = 'Home'   options={{
          // title: 'My home',
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









    <Drawer.Screen component = {Task} name = 'Task'
    
    options = {{
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
    backgroundColor:'#435665',
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
