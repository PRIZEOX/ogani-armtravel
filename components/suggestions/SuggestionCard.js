import { View, Text, Image, TouchableOpacity } from 'react-native'
import { HeartIcon } from 'react-native-heroicons/outline'
import { ArrowsPointingOutIcon, StarIcon, UserGroupIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../../lib/client'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const SuggestionCard = ({id,name, imgUrl, rate, square, roomsCount, cost, adres, desc, assets }) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity className='px-3' activeOpacity={0.6}
     onPress={()=> navigation.navigate('Hotel', {
      id,
      name,
      imgUrl,
      rate,
      square,
      roomsCount,
      cost,
      adres,
      desc,
      assets
     }) }
    >
      {/* Picture */}

      <View className='relative '>
        <Image className='rounded-3xl w-72 h-80' source={{
            uri: urlFor(imgUrl).url(),
        }}
        />
        
        <View className='absolute p-4'>
          <View className='flex-row items-center justify-between space-x-40'> 
            {/* Rate */}

            <View className='blur-xl rounded-2xl bg-neutral-400 flex-1'>
                <View className='flex-row items-center px-2 py-1 space-x-2 w-16'>
                    <StarIcon size={14} color='#FFD178' />
                    <Text className='text-sm text-white'>{rate}</Text>
                </View>
            </View>
            {/* Favorite */}

            <TouchableOpacity  activeOpacity={0.7}>
              <HeartIcon size={24} className='bg-neutral-400 p-5 blur-xl' color='#ffffff'/>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Desc */}
      <View className='px-1 mt-5'>
        <View className='flex-row items-center justify-between mb-4'> 
          <Text className='text-lg w-56 font-bold'>{name}</Text>
          <View>
            <Text className='text-lg text-cyan-600 font-extrabold'>{'\u0024'} {cost}</Text>
            <Text className='text-xs text-gray-400 text-right'>
              per day
            </Text>
          </View>
        </View>
        
        <View className='flex-row space-x-4 items-center'>
          <View className='space-x-1 flex-row items-center'>
            <Ionicons name="bed" size={22} color="#A1A7B0" />
            <Text className='text-gray-400 text-sm'>{roomsCount} bedrooms</Text>
          </View>
          <View className='space-x-1 flex-row items-center'>
            <ArrowsPointingOutIcon size={22} color='#A1A7B0'/>
            <Text className='text-gray-400 text-sm'>{square}м²</Text>
          </View>
        </View>
      </View>
     
        
    </TouchableOpacity>
  )
}

export default SuggestionCard