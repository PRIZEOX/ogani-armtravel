import { useNavigation } from '@react-navigation/native'
import { useEffect, useLayoutEffect, useState } from 'react'
import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {UserCircleIcon} from 'react-native-heroicons/outline'
import {ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon} from 'react-native-heroicons/solid'
import Categorys from '../components/category/Categorys';
import FeaturedRow from '../components/suggestions/FeaturedRow';
import { client } from '../lib/client';


const HomeScreen = () => {
    const navigation = useNavigation();
    [featuredCategory, setFeaturedCategory] = useState([]);
    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown:false, 
        })
    }, [])

    useEffect(()=>{
        client.fetch(
            `*[_type =="featured" ]`
        ).then((data) => {
            setFeaturedCategory(data);
        })
    }, [])



    

    return (
        <SafeAreaView className='px-3 bg-zinc-100 mt-4 flex-1'>
            {/* Header */}
            <View className='flex-row pb-3 items-center mx-2 justify-between '>
                <View className=''>
                    <Text className='font-bold text-gray-400 text-xs'>
                        You here!
                    </Text>
                    <View className= 'flex-row items-center space-x-1'>
                        <Text className='font-bold text-xl'>
                            Yerevan
                        </Text>
                        <ChevronDownIcon size={18} color='#A1A7B0'/>
                    </View>
                </View>
                <UserCircleIcon size={40} color='#464646'/>
            </View>

            {/* Search */}
            <View className='mx-2 pb-3 flex-row  items-center justify-between '>
                <View className='bg-white p-3 rounded-xl flex-row  space-x-2 w-64'>
                    <MagnifyingGlassIcon size={24} color='#CED0D4'/>
                    <TextInput className='text-gray-700' placeholder='Enter city or region'></TextInput>
                </View>
                <AdjustmentsHorizontalIcon size={48} color='#4C9FC1'/>
            </View>

            {/* Body */}
            
            <ScrollView showsVerticalScrollIndicator={false} className='flex-1'>

                {/* Featured rows */}

                {featuredCategory.map(category =>(
                    <FeaturedRow
                        key={category._id}
                        id={category._id}
                        description={category.desc}
                        title={category.name}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>        
    )
}

export default HomeScreen