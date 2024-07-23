import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeAsyncData = async (key, value) =>{
    try{
        await AsyncStorage.setItem(key, value);
    }
    catch(e){
        console.log("error in async ===> ", e);
    }
}; 

export const getAsyncData = async (key) => {
    try{
        const value = await AsyncStorage.getItem(key);
        if(value){
            return (value);
        }
        else{
            return null;
        }
    }
    catch(e){
        console.log("== error in getting the data");
        return null;
    }
}

