import { View, Text, Pressable } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserCircleIcon } from 'react-native-heroicons/outline';
import { useRoute } from '@react-navigation/native';

const BookingScreen = () => {
//   const {params} = {
//     id,
//     name,
//     rate,
//     square,
//     roomsCount,
//     adres,
//     arrivaleDate,
//     departureDateby,
//   } = useRoute()
  return (
    <SafeAreaView className='bg-zinc-100 mt-4 flex-1 px-6'>
      
        {/* Nav */}
        <View className='flex-row justify-between items-center'>
            <View className='space-x-5 flex-row'>
              <MaterialCommunityIcons name="calendar-clock" size={32} color="#4D9FC0" />
              <Text className='text-xl font-bold text-gray-700'>My Reservations</Text>
            </View>
            <Pressable><UserCircleIcon size={40} color='#464646'/></Pressable>
        </View>
    </SafeAreaView>
  )
}

export default BookingScreen