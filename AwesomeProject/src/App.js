import React from 'react'
import {StyleSheet, View} from 'react-native'
import Userlist from './pages/user/index'
import Registrasi from './pages/regist/index'

const app = () => {
    return (
        <View>
            <Userlist/>
            <Registrasi/>
        </View>
    )
}
export default App
const styles = StyleSheet.create({})