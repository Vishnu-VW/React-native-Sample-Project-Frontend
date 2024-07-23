import React from 'react'
import {View,Text, StyleSheet,Image} from 'react-native'
import RoundButtonComp from '../../components/RoundButtonComp'
import FullRoundButtonComp from '../../components/FullRoundButtonComp'

const IntroPage = ({navigation}) => {
    return (
        <View style = {{
                flex : 1,
                backgroundColor : '#fed344'
            }}>
            <View style = {{flex : 0.5}}> 
                <Image 
                source = {require('../../assets/signin.png')}
                style = {Styles.image}
                resizeMode='cover'
                />
            </View>
            <View style = {{
                flex : 0.5,       
                }}>
                <View>
                    <Text style = {{
                        fontWeight : 'bold',
                        fontSize : 30,
                        textAlign : 'center',
                        color : 'black'
                    }}>
                        Hello!
                    </Text>
                    <Text style = {{
                        fontWeight : 'bold',
                        fontSize : 15,
                        textAlign : 'center',
                        color : 'grey'
                    }}>
                        Welcome to My App
                    </Text>
                </View>
                <View style = {{
                    flexDirection : 'row',
                    justifyContent : 'center',
                    marginTop : 20
                }}>
                    <RoundButtonComp label = {'Login'} isvalue = {true} onPress={() => navigation.navigate('LoginScreen')}/>
                    <RoundButtonComp label = {'SignUp'} onPress = {() => navigation.navigate('SignupScreen')}/>
                   
                </View>        
                <View style = {{
                    // flex : 1,
                    marginTop : 40,
                    
                }}>
                    <Text style = {{
                        textAlign : 'center'
                    }}>
                        Or Via Social media
                    </Text>
                   
                    <View style = {{
                        flexDirection : 'row',
                        // justifyContent : 'center',
                        marginTop : 20,
                        justifyContent : 'center',
                        alignItems : 'flex-end'
                    }}>
                        <FullRoundButtonComp image = {require('../../assets/fb.png')}/>
                        <FullRoundButtonComp image = {require('../../assets/google.png')}/>
                    </View>
                </View>
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    image : {
        
    }
})
export default IntroPage;