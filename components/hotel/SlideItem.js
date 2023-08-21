import { View, Text, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../../lib/client'

const SlideItem = ({images}) => {

  console.log(images)
  return (
    <View>
      {images.map((image)=>(
        <Image className=' w-52 h-32 rounded-3xl' source={{
            uri: urlFor(image).url()
        }}/>
      ))}
    </View>
  )
}

export default SlideItem