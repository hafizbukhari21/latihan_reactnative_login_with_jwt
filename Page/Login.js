import React, {useEffect, useState } from 'react'
import {} from 'react-native'
import {Center, Input, Stack, Button} from 'native-base'
import jwt_decode from 'jwt-decode'
import {BaseUrl} from '../Utils/BaseApi'

export default function Login() {

  
    const [data, setData] = useState({
        email:"",
        password:""
    })
   

    // function HandleSubmit(){
    //     BaseUrl.post("/login",data).then(e=>console.log(jwt_decode(e.data.token)))
    // }
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
                    
                       
                    />
                    <Input fontSize={20} variant="underlined" placeholder="Password" 
                       
                    />
                    <Button size="lg"  >  Submit </Button>
                    </Stack>
                </Center>
            </Center>
        </>
    )
}
