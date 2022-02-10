import React, {useEffect, useState} from 'react'
import {} from 'react-native'
import {Text} from 'native-base'
import { View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function Home(){
    const [data, setdata] = useState({})

    useEffect(()=>{
        fetchCookie().then(e=>console.log(e))
    },[data])

    async function fetchCookie(){
        const jsonValue = await AsyncStorage.getItem('@token')
        return jsonValue
    }
    return(
        <>
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text>Welcome Home</Text>
            </View>
        </>
    )
}