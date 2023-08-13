import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryElement from './CategoryElement'

const Categorys = () => {
  return (
    <View>
      <ScrollView className=''
        horizontal
        contentContainerStyle={{
          paddingHorizontal:24,
          paddingTop:20,
        }}
      
        showsHorizontalScrollIndicator= {false}
        >
          <CategoryElement
          name='Best' />
          <CategoryElement
          name='Popular' />
          <CategoryElement
          name='New' />
          <CategoryElement
          name='Best' />
          <CategoryElement
          name='Popular' />
          <CategoryElement
          name='New' />
      </ScrollView>
    </View>
  )
}

export default Categorys