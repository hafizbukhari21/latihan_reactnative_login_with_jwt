import React, {useEffect} from 'react'
import {} from 'react-native'
import {Center, Input, Stack, Button} from 'native-base'
import {BaseUrl} from '../Utils/BaseApi'
import jwt_decode from 'jwt-decode'

export default function Login() { 

    useEffect(()=>{
        // BaseUrl.get("/showData").then(e=>console.log(e.data))
        BaseUrl.post("/login",{
          email:'hafiz@gmail.com',
          password:'123'
        }).then(e=>console.log(jwt_decode(e.data.token)))
        
      },[])
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
                    <Input fontSize={20} variant="underlined" placeholder="Email" />
                    <Input fontSize={20} variant="underlined" placeholder="Password" />
                    <Button size="lg" >  Submit </Button>

                    </Stack>
                </Center>
            </Center>
        </>
    )
}
