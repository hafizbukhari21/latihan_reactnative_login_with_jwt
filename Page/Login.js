import React, {useEffect, useState } from 'react'
import {AsyncStorage} from 'react-native'
import {Center, Input, Stack, Button} from 'native-base'
import {BaseUrl} from '../Utils/BaseApi'
import jwt_decode from 'jwt-decode'

export default function Login() { 
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
         BaseUrl.post("/login", data).then(e=>console.log(jwt_decode(e.data.token)))
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

                    </Stack>
                </Center>
            </Center>
        </>
    )
}
