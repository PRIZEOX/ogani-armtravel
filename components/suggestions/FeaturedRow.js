import { View, Text, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import SuggestionCard from './SuggestionCard'


const FeaturedRow = ({id,title, description}) => {
  return (
    <View>
        <View className='mt-4 flex-row justify-between px-3 items-center'>
           <Text className='text-lg font-bold '>{title}</Text>
           <TouchableOpacity>
               <ArrowRightIcon className='relative' size={20} color='#4C9FC1'/>
           </TouchableOpacity>
        </View>
        <Text className='text-xs px-3 text-gray-400'>{description}</Text>
        <ScrollView className='pt-5'
         horizontal showsHorizontalScrollIndicator={false}>
            <SuggestionCard rate={4.53} name={'Villa, Ani Resort'} cost={550} roomsCount={4} square={235} imgUrl='https://via.placeholder.com/300x336'/>
            <SuggestionCard rate={4.23} name={'Villa, Ararat Valley'} cost={350} roomsCount={2} square={167} imgUrl='https://via.placeholder.com/300x336'/>
        </ScrollView>
    </View>
  )
}

export default FeaturedRow