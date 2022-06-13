import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from './Detail.style'
const Detail = ({route}) => {
  return (
    <View style={styles.container}>
      <Image  style={styles.image}/>
      <Text  style={styles.title}>Detail</Text>
      <Text  style={styles.desc}>Detail</Text>
      <Text  style={styles.price}>Detail</Text>
    </View>
  )
}

export default Detail