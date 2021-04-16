import React from 'react'
import {StyleSheet, ScrollView} from 'react-native'
import Userlist from './pages/user/index'
import Registrasi from './pages/regist/index'

const App = () => {
    return (
        <ScrollView>
            <Userlist/>
            <Registrasi/>
        </ScrollView>
    )
}
export default App
const styles = StyleSheet.create({})