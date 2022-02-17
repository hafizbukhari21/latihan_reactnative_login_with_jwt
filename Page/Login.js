import React, {useEffect, useState } from 'react'
import {} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Center, Input, Stack, Button} from 'native-base'
import {BaseUrl} from '../Utils/BaseApi'
import jwt_decode from 'jwt-decode'

export default function Login({navigation}) { 
    const [data, setdata] = useState({
        email:"",
        password:""
    })

    useEffect(()=>{
        // BaseUrl.get("/showData").then(e=>console.log(e.data))
        // BaseUrl.post("/login",{
        //   email:'hafiz@gmail.com',
        //   password:'123'
        // }).then(e=>console.log(jwt_decode(e.data.token)))
        
        
      },[])

    function HandleSubmit(){
         BaseUrl.post("/login", data).then(e=>console.log(e.data.token))
    }

    async function  AddDataToken(param){
        try {
            await AsyncStorage.setItem("@token",param)
            console.log("ok")
        } catch (error) {
            console.log(error)
        }
    }

    
const ShowData = async () => {
 
      const jsonValue = await AsyncStorage.getItem('@token')
      return jsonValue != null ? jsonValue : null;
    
}


function ShowDataTrigger(){
    ShowData().then(e=>console.log(e))
}

   
    return(
        <>
            <Center flex={1} backgroundColor="white">
                <Center
                    
                    width={500}
                    height={500}
                >
                    <Stack
                        w={{
                            base:"60%"
                        }}
                        space = {4}
                    >
                    <Input fontSize={20} variant="underlined" placeholder="Email" 
                        onChangeText={e=>setdata({...data,email:e})}
                    />
                    <Input fontSize={20} variant="underlined" placeholder="Password" 
                        onChangeText={e=>setdata({...data,password:e})}
                        secureTextEntry={true}
                    />
                    <Button size="lg" onPress={HandleSubmit} >  Submit </Button>
                    <Button size="lg" onPress={()=>navigation.navigate("register")} >  Register </Button>
                    <Button size="lg" onPress={ShowDataTrigger} >  Show trigger </Button>
                    

                    </Stack>
                </Center>
            </Center>
        </>
    )
}
