
import { View, Text, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserCircleIcon } from 'react-native-heroicons/outline';

const FavoriteScreen = () => {
  return (
    <SafeAreaView className='bg-zinc-100 mt-4 flex-1 px-6'>
      
        {/* Nav */}
        <View className='flex-row justify-between items-center'>
            <View className='space-x-5 flex-row'>
              <AntDesign name="star" size={32} color="#4D9FC0" />
              <Text className='text-xl font-bold text-gray-700'>My Favorites</Text>
            </View>
            <Pressable><UserCircleIcon size={40} color='#464646'/></Pressable>
        </View>
    </SafeAreaView>
  )
}

export default FavoriteScreen