import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import SlideItem from './SlideItem'
import { urlFor } from '../../lib/client'

const Slider = ({images}) => {
    
    

    return (
        <View>
        <FlatList horizontal showsHorizontalScrollIndicator ={false} data={images}

        />
        </View>
    )
}

export default Slider