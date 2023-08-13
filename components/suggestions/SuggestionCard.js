import { View, Text, Image, TouchableOpacity } from 'react-native'
import { HeartIcon } from 'react-native-heroicons/outline'
import { ArrowsPointingOutIcon, StarIcon, UserGroupIcon } from 'react-native-heroicons/solid'

const SuggestionCard = ({name, imgUrl, rate, square, roomsCount, cost}) => {
  return (
    <TouchableOpacity className='px-3' activeOpacity={0.6}>
      {/* Picture */}

      <View className='relative '>
        <Image className='rounded-3xl w-72 h-80' source={{
            uri: imgUrl
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

            <TouchableOpacity activeOpacity={0.7}>
              <HeartIcon size={24} color='#ffffff'/>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Desc */}
      <View className='px-1 mt-5'>
        <View className='flex-row items-center justify-between'> 
          <Text className='text-lg'>{name}</Text>
          <Text className='text-lg text-cyan-600'>{'\u0024'} {cost}</Text>
        </View>
        <Text className='text-xs text-gray-400 text-right'>
          per month
        </Text>
        <View className='flex-row space-x-4 items-center'>
          <View className='space-x-1 flex-row items-center'>
            <UserGroupIcon size={22} color='#A1A7B0'/>
            <Text className='text-gray-400 text-sm'>{roomsCount} bedrooms</Text>
          </View>
          <View className='space-x-1 flex-row items-center'>
            <ArrowsPointingOutIcon size={22} color='#A1A7B0'/>
            <Text className='text-gray-400 text-sm'>{square}m</Text>
            <Text className='text-xs text-gray-400 absolute pb-4 pl-14'>2</Text>
          </View>
        </View>
      </View>
     
        
    </TouchableOpacity>
  )
}

export default SuggestionCard