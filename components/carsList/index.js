import React from 'react'
import {View, Dimensions, Text, FlatList} from 'react-native'
import styles from "./style";

import cars from "./cars";
import CarItem from "../CarItem";

const carsList = (props) => {
    console.log(cars)
    return(
        <View style={styles.container}>
            <FlatList
                data = {cars}
                renderItem={({item}) => <CarItem car={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

export default carsList
