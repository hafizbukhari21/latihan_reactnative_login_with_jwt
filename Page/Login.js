import React, {useEffect, useState } from 'react'
import {Text, Dimensions} from 'react-native'
import {HStack, Spinner, Heading} from  'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Center, Input, Stack, Button} from 'native-base'
import {BaseUrl} from '../Utils/BaseApi'
import jwt_decode from 'jwt-decode'
import { View } from 'react-native'

export default function Login({navigation}) { 
    const [data, setdata] = useState({
        email:"",
        password:""
    })
    const [isLoading, setIsloading] = useState(false)

    useEffect(()=>{
        // BaseUrl.get("/showData").then(e=>console.log(e.data))
        // BaseUrl.post("/login",{
        //   email:'hafiz@gmail.com',
        //   password:'123'
        // }).then(e=>console.log(jwt_decode(e.data.token)))
        
        
      },[])

    function HandleSubmit(){
        setIsloading(true)
         BaseUrl.post("/login", data).then(e=>AddDataToken(e.data.token)).then(e=>ShowDataTrigger())
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
      setIsloading(false)
      return jsonValue != null ? navigation.push("home") : null;
    
}


function ShowDataTrigger(){
    ShowData().then(e=>console.log(e))
}

function LoadingAnim(){
    return(
        <View style={{
           position:"absolute", 
           zIndex:1,
           flex:1,
           justifyContent:"center",
           alignItems:"center",
           width: Dimensions.get('window').width,
           height: Dimensions.get('window').height,
           backgroundColor:"rgba(0,0,0,0.8)"
           
        }}>
            <View>
            <Text style={{fontSize:40, color:"white" }}><Spinner size="lg"/>Loading</Text>
            </View>
        </View>

        
    )
}

   
    return(
        <>  
            {isLoading && <LoadingAnim/>}
            <Center flex={1} backgroundColor="white" zIndex={0}>
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
                    <Button size="lg" onPress={HandleSubmit} >  Login. </Button>
                    
                    

                    </Stack>
                </Center>
            </Center>
        </>
    )
}
