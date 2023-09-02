
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Pressable, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon,  HeartIcon } from 'react-native-heroicons/outline';
import HeartIconSolid from 'react-native-heroicons/solid'
import { ArrowsPointingOutIcon, UserGroupIcon, StarIcon } from 'react-native-heroicons/solid'
import Ionicons from '@expo/vector-icons/Ionicons'
import { urlFor } from '../lib/client';
import { AntDesign } from '@expo/vector-icons';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import months from '../lib/moths';
import { useDispatch } from 'react-redux'
import { addToFavorite } from '../features/favoriteSlices';





const HotelScreen = () => {
    const {params :{
        id,
        name,
        rate,
        square,
        roomsCount,
        cost,
        adres,
        desc,
        assets,
    }} = useRoute()

    
    
    
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const today = new Date()

    const [isPressed, setIsPressed] = useState(false);
    const [showA, setAShow] = useState(false)
    const [showB, setBShow] = useState(false);
    const [arrivalDate, setArrivalDate] = useState(new Date());
    const [departureDate, setDepartureDate] = useState(
      new Date(today.getFullYear(), today.getMonth(), today.getDate()+1)
    );
    
    const handleFavoritePress = () =>{
      setIsPressed(!isPressed);
      if(isPressed){
        dispatch(addToFavorite({id, name, rate, cost, roomsCount, square}))
      }
      
    }

    const onArrivalChange = (event, selectedDate) =>{
      setAShow(false);
      setArrivalDate(selectedDate);
    }

    const onDepartureChange = (event, selectedDate) => {
      setBShow(false);
      setDepartureDate(selectedDate);
    }

    const getTotalCost = (start, end) => {
      let monthsIncreaser = start.getMonth();
      let finalDaysCount = months[start.getMonth()] - start.getDate();
      while(monthsIncreaser != end.getMonth()){
        monthsIncreaser += 1;
        finalDaysCount += months[monthsIncreaser];
      }
      finalDaysCount -= months[end.getMonth()] - end.getDate();
      return finalDaysCount * cost;
    }

    const getTotalDays = (start, end) => {
      let monthsIncreaser = start.getMonth();
      let finalDaysCount = months[start.getMonth()] - start.getDate();
      while(monthsIncreaser != end.getMonth()){
        monthsIncreaser += 1;
        finalDaysCount += months[monthsIncreaser];
      }
      finalDaysCount -= months[end.getMonth()] - end.getDate();
      return finalDaysCount;
    }

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown:false, 
        })
    }, [])

  return (
    <SafeAreaView className='bg-zinc-100 mt-4 flex-1 px-6'>

      {/* Navbar */}
      <View className='flex-row justify-between mb-5 items-center'>
        <TouchableOpacity activeOpacity={0.6} onPress={() => { navigation.goBack() }
        }><ArrowLeftIcon size={32} color='#464646'/></TouchableOpacity>
        <TouchableOpacity onPress={handleFavoritePress}>
          {isPressed ? <HeartIconSolid color='#F26798' size={32}/> : <HeartIcon size={32} color='#464646'/> }
        </TouchableOpacity>
      </View>

      {/* Hotel Image */}
      <ScrollView 
       pagingEnabled snapToAlignment='center' horizontal
       className='p-0 space-x-7 mx-3 max-h-60' showsHorizontalScrollIndicator={false}>
        {assets.map((image)=>(
          <Image key={image._id} id={image._id} className='w-80 h-auto rounded-3xl justify-center'
          source={{
            uri: urlFor(image).url()
          }}/>
        ))}
      </ScrollView>

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

      {/* Datepicker */}
      <View className='mt-5 space-y-2'>
        <Text className='text-xl text-center text-cyan-600 font-bold'>Booking time</Text>
        <View className='justify-between flex-row'>
          <View className='flex-row'>
            <Pressable onPress={()=> setAShow(true)}>
              <Text className='text-lg'>From <AntDesign name="caretdown" size={12} color="#4C9FC1" /> </Text>
              <Text className='text-gray-400'>{arrivalDate.toLocaleDateString()}</Text>
              {showA && (
                <RNDateTimePicker value={arrivalDate}  maximumDate={departureDate} minimumDate={today} onChange={onArrivalChange}/>
              )}
            </Pressable>
          </View>
          <View className='flex-row'>
            <Pressable onPress={() =>setBShow(true)}>
              <Text className='text-lg'>To <AntDesign name="caretdown" size={12} color="#4C9FC1" /></Text>
              <Text className='text-gray-400'>{departureDate.toLocaleDateString()}</Text>
              {showB && (
                <RNDateTimePicker value={departureDate} minimumDate={arrivalDate} onChange={onDepartureChange}/>
              )}
            </Pressable>
          </View>
        </View>
      </View>
      
      {/* Reservate */}
      <View  className='flex-row mt-10 bg-white rounded-2xl py-3 px-4 justify-between w-auto items-center'>
        <View>
          <Text  className='text-lg text-black font-bold'>Total {'\u0024'} {getTotalCost(arrivalDate,departureDate)}</Text>
          <Text className='text-sm text-gray-400'>for {getTotalDays(arrivalDate,departureDate)} day{getTotalDays(arrivalDate,departureDate)>1 && ('s')}</Text>
        </View>
        <TouchableOpacity 
        className='bg-cyan-600 w-32 h-12 rounded-xl' activeOpacity={0.5}>
            <Text className='text-center text-white py-3 px-5 text-base font-semibold'>Reservation</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
export default HotelScreen