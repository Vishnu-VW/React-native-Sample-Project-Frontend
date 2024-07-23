
import { View, StyleSheet } from 'react-native';
import DatePickerButtons from '../../components/DatePickerButtons';

const DatePickerComp = () => {
    
  return (
    <View style = {styles.container}>  
        <DatePickerButtons label = {'Set Date'} mode = {'date'}/>
        <DatePickerButtons label = {'Set Time'} mode = {'time'}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
})

export default DatePickerComp;