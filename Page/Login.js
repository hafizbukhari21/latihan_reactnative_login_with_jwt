import React, {useEffect, useState } from 'react'
import {} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Center, Input, Stack, Button} from 'native-base'
import {BaseUrl} from '../Utils/BaseApi'
import jwt_decode from 'jwt-decode'

export default function Login() { 
   
    


   
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
                        
                        secureTextEntry={true}
                    />
                    <Button size="lg"  >  Submit </Button>
                    
                    

                    </Stack>
                </Center>
            </Center>
        </>
    )
}
