import { View, Text, Dimensions, StyleSheet, Image, Animated, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { Screensdata } from './data'

const Onboard = ({navigation}) => {
  const scrollx = useRef(new Animated.Value(0)).current;
  const [currentIndex,setCurrentIndex] = useState(0);
  const slideRef = useRef(null);
  const {width,height} = Dimensions.get("screen");
  const onViewableItemsChanged = info => {
    // console.log(info.viewableItems[0].index);
    setCurrentIndex(info.viewableItems[0].index)
  }
  const viewabilityConfigCallbackPairs = useRef([{onViewableItemsChanged}])
  // console.log(currentIndex);
  // console.log(Screensdata.length)
  const Page = ({item}) => {
    return (
    <View style= {{
      width,
      height,
      backgroundColor : item.color ,
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center',
      // padding : 20
      }}>
        <Image 
        source = {item.image}
        style = {{
          width : "100%",
          height : "100%",
          flex : 0.7,
          resizeMode : 'cover'
        }}
      />
      <View style = {{
        flex : 0.3,
        // justifyContent : 'center',
        alignItems : 'center',
        marginTop : 50
      }}>
        <Text style = {{
          fontSize : 20,
          color : 'black',
          fontWeight : '800',
          marginBottom : 10
        }}>{item.heading}</Text>
        <Text 
        style = {{
          fontSize : 15,
          color : '#3b3a39'
        }}
        >{item.subheading}</Text>
      </View>
    </View>
    )
  }
  
  const Indicator = ({scrollx}) =>{
    // console.log(scrollx)
    return(
      <View
        style = {{
          position : 'absolute',
          bottom : 60,
          flexDirection : 'row'
        }}

      >
        {Screensdata.map((_,i) => {
          // console.log(i)
          const inputRange = [(i-1) * width, i*width, (i+1)*width];

          // console.log(inputRange)
          const scale = scrollx.interpolate({
            inputRange,
            outputRange : [0.8, 1.4, 0.8],
            extrapolate : 'clamp'
          })
          const opacity = scrollx.interpolate({
            inputRange,
            outputRange : [0.6, 0.9, 0.8],
            extrapolate : 'clamp'
          })
          return (
            <Animated.View 
              key = {`indicator_${i}`}
              style = {{
                height : 10,
                width : 10,
                borderRadius : 5,
                backgroundColor : '#333',
                margin : 10,
                transform: [{scale}],
                opacity
              }}
            />
          )
        })
      }
      
      </View>
    )
  }
  const scrollToNext = () =>{
    if(currentIndex < Screensdata.length -1){
      slideRef.current.scrollToIndex({index : currentIndex + 1})
    }
    else{
      console.log("last page");
      navigation.navigate('SideNav');
    }
  } 

  return (
    <View style = {{
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center'
    }}>
      <Animated.FlatList
        ref = {slideRef}
        data={Screensdata}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Page item = {item}/>}
        horizontal
        showsHorizontalScrollIndicator = {false}
        pagingEnabled
        onScroll={Animated.event(
          [{nativeEvent : {contentOffset : {x : scrollx}}}],
          {useNativeDriver : false}, 
        )}
        bounces = {false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      <Indicator scrollx = {scrollx}/>
      <View 
        style = {{
          position : 'absolute',
          bottom : 10,
        }}
      >
        <View>
          <TouchableOpacity onPress={scrollToNext}>
            
              <Text
              style = {{
                color : 'white',
                textAlign : 'center',
                marginBottom : 10,
                paddingHorizontal : 15,
                paddingVertical : 8,
                backgroundColor : 'black',
                borderRadius : 15,
              }}
                 
              > 
              {/* {console.log(Screensdata.length)} */}
              {
                
                currentIndex == Screensdata.length -1 ? 'Finish' : 'Next'
              }
              </Text>
          </TouchableOpacity>
        </View>



      </View>
    </View>
  )
}

const styles = StyleSheet.create({
 
})
export default Onboard