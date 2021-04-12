import React from 'react'
import {StyleSheet, View} from 'react-native'
import Homescreen from './pages/user/index'
import Registrasi from './pages/regist/index'

const app = () => {
    return (
        <View>
            <Homescreen/>
            <Registrasi/>
        </View>
    )
}
export default App
const styles = StyleSheet.create({})