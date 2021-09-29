import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import inisplash from '../assets/Splash.png';

export default class MengSplash extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <View
          style={{
            padding: '5%',
            justifyContent: 'center',
          }}>
          <Text style={bergaya.teks}>Open</Text>
          <Text style={bergaya.teks}>Volunteer</Text>
          <Image source={inisplash} style={bergaya.gambar} />
        </View>
      </View>
    );
  }
}

const bergaya = StyleSheet.create({
  teks: {
    color: '#190844',
    fontWeight: 'bold',
    fontSize: 35,
  },
  gambar: {
    alignSelf: 'center',
    width: '100%',
    height: 200,
  },
});
