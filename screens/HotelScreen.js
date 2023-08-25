
import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import { FlatList, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon, ChatBubbleOvalLeftIcon, HeartIcon } from 'react-native-heroicons/outline';
import { ArrowsPointingOutIcon, UserGroupIcon, StarIcon } from 'react-native-heroicons/solid'
import Ionicons from '@expo/vector-icons/Ionicons'
import { urlFor } from '../lib/client';




const HotelScreen = () => {

    const navigation = useNavigation();
    [tip, setTip] = useState(true)

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown:false, 
        })
    }, [])


    const {params :{
        id,
        name,
        imgUrl,
        rate,
        square,
        roomsCount,
        cost,
        adres,
        desc,
        assets,
    }} = useRoute()

    

  return (
    <SafeAreaView className='bg-zinc-100 mt-4 flex-1 px-6'>

      {/* Navbar */}
      <View className='flex-row justify-between mb-5 items-center'>
        <TouchableOpacity activeOpacity={0.6} onPress={() => { navigation.goBack() }
        }><ArrowLeftIcon size={32} color='#464646'/></TouchableOpacity>
        <ChatBubbleOvalLeftIcon size={32} color='#464646'/>
      </View>

      {/* Hotel Image */}
      <ScrollView onScroll={() => setTip(false)}
       pagingEnabled snapToAlignment='center' horizontal
       className='p-0 space-x-7 mx-3 max-h-60' showsHorizontalScrollIndicator={false}>
        {assets.map((image)=>(
          <Image key={image._id} className='w-80 h-auto rounded-3xl justify-center'
          source={{
            uri: urlFor(image).url()
          }}/>
        ))}
        
      </ScrollView>
      {tip && (
        <Text className='text-gray-300 text-xs animate-pulse mt-1 my-0 p-0 text-center'>scroll to view</Text>
      )}
      


      {/* <View className='flex-row space-x-1 justify-center'>
        {assets.map((_, idx)=> (
            <View key={idx.toString()} style={
              idx === 3 && styles.dotActive
            } className='w-2 h-2 bg-gray-400 rounded-full mt-2'></View>
          )
        )}
      </View>
      <View className='relative '>
        <Image className='rounded-3xl w-auto h-56' source={{
            uri: urlFor(imgUrl).url(),
        }}
        />
        
        <View className='absolute p-4'>
          <View className='flex-row items-center justify-between space-x-56'> 
             Rate 

            <View className='blur-xl rounded-2xl bg-neutral-400 flex-1'>
                <View className='flex-row items-center px-2 py-1 space-x-2 w-16'>
                    <StarIcon size={14} color='#FFD178' />
                    <Text className='text-sm text-white'>{rate}</Text>
                </View>
            </View>
             Favorite 

            <TouchableOpacity  activeOpacity={0.7}>
              <HeartIcon size={24} className='bg-neutral-400 p-5 blur-xl' color='#ffffff'/>
            </TouchableOpacity>
          </View>
        </View>
      </View> */}


      {/* Name & Cost */}
      <View className='my-4'>
        <View className='flex-row justify-between'>
          <View>
            <Text className='text-lg w-60 font-bold'>{name}</Text>
            <Text className='text-sm text-gray-400'>{adres}</Text>
          </View>
          <View>
            <Text className='text-cyan-600 font-extrabold text-lg'>{'\u0024'} {cost}</Text>
            <Text className='text-xs text-gray-400 text-right'>per day</Text>
          </View>
        </View>
      </View>

      {/* Short Info */}
      <View className='flex-row space-x-5 items-center mb-4'>
          <View className='space-x-1 flex-row items-center'>
            <Ionicons name="bed" size={22} color="#A1A7B0" />
            <Text className='text-gray-400 text-sm'>{roomsCount} bedrooms</Text>
          </View>
          <View className='space-x-1 flex-row items-center'>
            <ArrowsPointingOutIcon size={22} color='#A1A7B0'/>
            <Text className='text-gray-400 text-sm'>{square}м²</Text>
          </View>
      </View>
      {/* Description */}

      <View className='border-solid border-gray-400 border-t opacity-50'>
      </View>
      <Text className='w-auto text-base text-justify py-3'>{desc}</Text>
      <View className='border-solid border-gray-400 border-b opacity-50'></View>


      {/* Features */}

      {/* Reservate */}
      <View className='mt-10 flex-row justify-center'>
        <TouchableOpacity className='bg-cyan-600 w-32 h-12 rounded-xl' activeOpacity={0.5}>
            <Text className='text-center text-white py-3 px-5 text-base font-semibold'>Reservation</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 35,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: '#ccc',
  },
  dotActive: {
    backgroundColor: '#000',
  },
});
export default HotelScreen