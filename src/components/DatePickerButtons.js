import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { formatTime } from './FormatTime';

const DatePickerButtons = ({label,mode}) => {
    const [date, setDate] = useState(new Date())
    const [formatDate, setFormatDate] = useState("")
    const [time, setTime] = useState("")
    const [open, setOpen] = useState(false);

    const handleConfirm = (date) =>{
        setOpen(false);
        const formatDate = date.getDate() + ":" + (date.getMonth()+ 1) + ":" + date.getFullYear()
        const newTime = formatTime(date.getHours() + ":" + date.getMinutes());
        setFormatDate(formatDate);
        setTime(newTime);
    }

  return (
    <>
    <View >
        <TouchableOpacity onPress={()=> setOpen(true)}>
            
            <View 
                style = {styles.button}
            >
                <Text
                    style = {styles.text}
                >{label}</Text>
            </View>
                
        </TouchableOpacity>
        {/* <View>
            {}  <Text>{formatDate ? `Selected Date ${formatDate}` : "No date Selected"}</Text>
            <Text>{time ? `Selected Time ${time}` : "No time Selected"}</Text>
        </View> */}
    </View>

    <DatePicker 
        modal
        mode= {mode}
        open = {open}
        date = {date}
        buttonColor = "#063970"
        dividerColor = "#063970"
        onConfirm = {handleConfirm}
        onCancel = {() => {setOpen(false)}}   
    /> 
    </>
  )
}

const styles = StyleSheet.create({
    // container : {
    //     // flex : 1,
    //     justifyContent : 'center',
    //     alignItems : 'center'
    // },
    button : {
        backgroundColor : '#2596be',
        padding : 10,
        alignItems : 'center',
        height : 50,
        width : 250,
        borderRadius : 20,
        marginBottom : 20
    },
    text : {
        fontSize : 20,
        fontWeight : 'bold',
        color : 'black'
    }
})

export default DatePickerButtons