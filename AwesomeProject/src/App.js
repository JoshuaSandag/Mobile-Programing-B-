import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Homescreen from './pages/user/index'
import Registrasi from './pages/regist/index'

const app = () => {
    return (
        <view>
            <Homescreen/>
            <Registrasi/>
        </view>
    )
}
export default App
const styles = StyleSheet.create({})