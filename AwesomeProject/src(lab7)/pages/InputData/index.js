import React, {useState} from 'react'
import {View,TextInput,Button,Text,StyleSheet} from 'react-native'
import Axios from 'axios'

const Data = ()=>{
  const [firstName,setfirstName] = useState();
  const [lastName,setlastName] = useState();
  const [email,setEmail] = useState();
  
   const OnSubmit = ()=>{
    const data = {
      firstName : firstName,
      lastName  : lastName,
      email     : email,
    };
    Axios.post('http://10.0.2.2:3004/users', data)
  };

  return(
    <View style={style.container}>
      <Text style={style.judul}>Registration</Text>
      <Text style={style.luar}>First Name</Text>
      <TextInput value={firstName} style={style.dalam} placeholder='masukan nama depan' onChangeText={e=>setfirstName(e)} />
      <Text style={style.luar}>Last Name</Text>
      <TextInput value={lastName} style={style.dalam} placeholder='masukan nama belakang' onChangeText={e=>setlastName(e)} />
      <Text style={style.luar}>Email</Text>
      <TextInput value={email} style={style.dalam} placeholder='masukan alamat email anda' onChangeText={e=>setEmail(e)} /> 
      <Button title='Simpan'onPress={OnSubmit}/>
    </View>
  )
}

export default Data

const style = StyleSheet.create({
  container:{
    padding:20,
  },
  judul:{
    fontWeight:'bold',
    fontSize:35,
    marginBottom:30
  },
  luar:{
    fontWeight:'bold',
    fontSize:15
  },
  dalam:{
    borderColor: "black",
    marginVertical:12,
    borderWidth:2,
    padding:5,
  }
})