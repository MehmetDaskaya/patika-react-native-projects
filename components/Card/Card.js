import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import styles from './Card.style';

function Card({ products }) {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={{ uri: products.imgURL }} />
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{products.title}</Text>
                <Text style={styles.price}>{products.price}</Text>
                <Text style={products.inStock ? styles.TrueColor : styles.FalseColor}>{products.inStock === true ? 'STOKTA VAR' : 'STOKTA YOK'}</Text>
            </View>
        </SafeAreaView>
    );
};
export default Card;