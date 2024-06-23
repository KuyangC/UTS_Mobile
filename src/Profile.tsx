import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

function ProfileScreen() {
    return (
        <SafeAreaView style={style.Background}>
            <Text style={style.headingStyle}>Profile</Text>
            <Image style={style.imgProfile}source={require('../assets/images/1mb.png')}/>
            <Text style={style.textStyle}>Bintang Bennaya Hasiholan Hutabarat</Text>
            <Text style={style.textStyle}>1152200004</Text>
        </SafeAreaView>
    )
}

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
        color: '#EEEEEE',
        textAlign: 'center',
        marginBottom: 30,
    },
    textStyle: {
        fontSize: 28,
        color: '#EEEEEE',
        textAlign: 'center',
        top: 20,
    },
    imgProfile: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 250,
        width: 250,
        borderRadius: 20,
    }
});

export default ProfileScreen;