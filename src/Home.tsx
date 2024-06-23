import { useState } from "react";
import { Image, Button, TextInput, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react'

function HomeScreen() {
    const [text, setText] = useState("")

    function test(currentText){
        setText(currentText)
    }

    return (
        <SafeAreaView style={{backgroundColor: "#141414",  height: "100%"}}>
            <ScrollView>
                <Text style={style.headingStyle}>Explore</Text>
                <View style={{alignItems: "center"}}>
                    <TextInput 
                    style={style.searchBar}
                    onChangeText={(Value) => test(Value)}
                    Value={text}
                    placeholder="Search for a Campus"
                    />
                </View>
                <View style={{marginLeft: 20}}>
                    <View style={{alignContent: "center", marginTop: 30}}>
                        <Image style={{height: 200, width: 330}}source={require("../assets/images/iti.jpg")}/>
                    </View>
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 2, color: '#ffffff'}}>Institut Teknologi Indonesia</Text>
                    <Text style={{fontSize: 12, marginTop: 2, color: '#ffffff', width: 280}}>
                    nstitut Teknologi Indonesia (ITI) merupakan perguruan tinggi swasta yang berlokasi di Kecamatan Setu, Kota Tangerang Selatan.
                    </Text>
                </View>
                 <View style={{marginLeft: 20}}>
                    <View style={{alignContent: "center", marginTop: 30}}>
                        <Image style={{height: 200, width: 330}}source={require("../assets/images/unpam.jpg")}/>
                    </View>
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 2, color: '#ffffff'}}>Universitas Pamulang</Text>
                    <Text style={{fontSize: 12, marginTop: 2, color: '#ffffff', width: 280}}>
                        Universitas Pamulang berdiri tahun 2000, didirikan oleh Yayasan Prima Jaya.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    viewStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    headingStyle: {
        fontSize: 30,
        color: '#ffffff',
        textAlign: 'left',
        marginLeft: 10,
        marginBottom: 10,
    },
    textStyle: {
        fontSize: 28,
        color: 'black',
    },
    searchBar: {
        width: "85%",
        height: 50,
        borderWidth: 1,
        paddingLeft: 20,
        fontSize: 18,
        borderRadius: 30,
        borderColor: "#ffffff"
        
    },
});

export default HomeScreen
