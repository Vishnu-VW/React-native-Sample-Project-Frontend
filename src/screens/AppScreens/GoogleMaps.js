import { View, Text, Modal, StyleSheet,  TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';

const GoogleMaps = () => {
  const [marker, setMarker] = useState();
    const mapRef = useRef();

    const navigation = useNavigation();
  return (
    <Modal visible={true}>
       <View style = {{flex : 1, backgroundColor : 'white'}}> 
        <MapView 
        ref= {mapRef} 
        zoomControlEnabled={true}
        showsMyLocationButton= {true}
        provider={PROVIDER_GOOGLE}
        style = {styles.map}
        region={ {
          latitude : 17.43328157220084,
          longitude : 78.38724768465751,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        onPress={e => setMarker(e.nativeEvent.coordinate)}>
        {marker !== undefined ? <Marker 
        coordinate={marker}
        />  : null}
        
        </MapView>
       <View style = {{
        padding : 15,
        backgroundColor : 'white',
        margin : 10,
        borderRadius : 15,
        flexDirection : "row",
        alignItems : 'center',
        justifyContent : 'space-between'
       }}>
          <Text style = {{
            fontWeight : 'bold',
            color : 'black'

          }}> Pick Company location</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Entypo name='circle-with-cross' size={25} color='black' />
          </TouchableOpacity>
         
       </View>
       </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
})

export default GoogleMaps