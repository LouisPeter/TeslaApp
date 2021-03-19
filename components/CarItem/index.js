import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import styles from './style'
import StyledButton from "../StyledComponent";


const CarItem = (props) => {

    const { name, tagline, taglineCTA, image } = props.car
    console.log(name, tagline, taglineCTA, image)
    return (
            <View style={styles.carContainer}>
                <ImageBackground source={image} style={styles.image} />
                <View style={styles.titles}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subTitle}>
                        {tagline}
                        {' '}
                        <Text style={styles.subTitleCTA}>
                            {taglineCTA}
                        </Text>
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <StyledButton
                        type="primary"
                        content="Custom order"
                        onPress={() => {
                            console.warn('Custom order was pressed')
                        }}
                    />
                    <StyledButton
                        type="secondary"
                        content="Existing Inventory"
                        onPress={() => {
                            console.warn('Existing inventory was pressed')
                        }}
                    />
                </View>
            </View>
    )
}

export default CarItem
