import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import MengSplash from './mengkoding/splashscreen';
import MainMenu from './mengkoding/mainmenu';
import MengLogin from './mengkoding/login';

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <MainMenu />
         
        </View>
      </ScrollView>
    );
  }
}
