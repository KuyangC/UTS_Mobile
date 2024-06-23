import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Settings = () => {
  return (
    <View style={style.Background}>
      <Text style={style.headingStyle}>Ini Settings Page</Text>
    </View>
  )
}

export default Settings

const style = StyleSheet.create({
    Background: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: "#141414",  
        height: "100%",
    },
    headingStyle: {
        fontSize: 30,
        color: '#ffffff',
        textAlign: 'left',
        marginLeft: 10,
        marginBottom: 10,
    },
})