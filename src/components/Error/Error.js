import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'; 

const Error = () => {
    return (
        <LottieView source={require('../../assets/error.json')} autoPlay loop />
      )
}

export default Error