import { View, Text, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import SuggestionCard from './SuggestionCard'
import { useEffect, useState } from 'react'
import { client } from '../../lib/client'


const FeaturedRow = ({id,title, description}) => {

  const [hotels,setHotels] = useState([]);


  useEffect(()=>{
    client.fetch(
      `
      *[_type =="featured" && _id == $id  ]{
        hotels[] ->{
          ...
        }
      }[0]
      `, {id}
    ).then(data => {
      setHotels(data?.hotels);
    });
  }, [])




  return (
    <View className='my-2'>
        <View className='mt-4 flex-row justify-between px-3 items-center'>
           <Text className='text-lg font-bold '>{title}</Text>
           <TouchableOpacity>
               <ArrowRightIcon className='relative' size={20} color='#4C9FC1'/>
           </TouchableOpacity>
        </View>
        <Text className='text-xs px-3 text-gray-400'>{description}</Text>
        <ScrollView className='pt-4'
         horizontal showsHorizontalScrollIndicator={false}
         contentContainerStyle = {{
          paddingHorizontal: 15,
         }}
        >
          {hotels?.map((item) => (
            <SuggestionCard
              key={item._id}
              id={item._id}
              imgUrl={item.hotel_image}
              roomsCount={item.room_count}
              name={item.name}
              rate={item.rate}
              square={item.square}
              cost={item.cost}
            />
          ))}

        </ScrollView>
    </View>
  )
}

export default FeaturedRow