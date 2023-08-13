import { View, Text, Touchable, TouchableOpacity } from 'react-native'

const CategoryElement = ({name}) => {
  return (
    <TouchableOpacity className='mr-8'>
      <Text className='text-gray-400'>{name}</Text>
    </TouchableOpacity>
  )
}



export default CategoryElement