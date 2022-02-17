import React, {useEffect, useState } from 'react'
import {} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Center, Input, Stack, Button} from 'native-base'
import {BaseUrl} from '../Utils/BaseApi'


export default function Register (){
    const [data, setdata] = useState({
        email:"",
        password:"",
        name:""
    })

    function Handlesubmit(){

    }

    function ShowDataTrigger(){
        
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
                        onChangeText={e=>setdata({...data,name:e})}
                    />
                    <Input fontSize={20} variant="underlined" placeholder="Email" 
                        onChangeText={e=>setdata({...data,email:e})}
                    />
                    <Input fontSize={20} variant="underlined" placeholder="Password" 
                        onChangeText={e=>setdata({...data,password:e})}
                        secureTextEntry={true}
                    />
                    <Button size="lg" onPress={HandleSubmit} >  Submit </Button>
                    <Button size="lg" onPress={ShowDataTrigger} >  Show trigger </Button>
                    

                    </Stack>
                </Center>
            </Center>
        </>

}