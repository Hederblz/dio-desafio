import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';


const App = ()=>{
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  //liga flash do celular
  useEffect(()=>{ Torch.switchState(toggle); }, [toggle]);

  useEffect(()=>{
    /**
     * Quando chacoalhar o celular, muda o toggle
     */
    const subscription = RNShake.addListener(()=>{
      setToggle(oldToggle => !oldToggle);
    });
    /**
     * Essa fun vai ser chamada quando o componente
     * for ser desmontado
     */
    return () => subscription.remove();
  },[])

  
  return (
    //if toggle return light
  <View style={toggle ? style.containerLight : style.container}>
    <TouchableOpacity onPress={handleChangeToggle}>
      <Image 
      style={toggle ? style.lightOn : style.lightOff} 
      source={toggle 
      ? require('./assets/icons/eco-light.png') 
      : require('./assets/icons/eco-light-off.png')
      } />
      <Image 
      style={style.dioLogo} 
      source={
        toggle 
        ? require('./assets/icons/logo-dio.png')
        : require('./assets/icons/logo-dio-white.png')
        } />
    </TouchableOpacity>
  </View>
  );
};

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightOn:{
    resizeMode: 'contain',
    alingnSelf: 'center',
    width: 150,
    height: 150,
  },
  lightOff:{
    resizeMode: 'contain',
    alingnSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  dioLogo:{
    resizeMode: 'contain',
    alingnSelf: 'center',
    width: 250,
    height: 250,
  },
});


export default App;