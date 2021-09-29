import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import duduk from '../assets/orangduduk.png';

export default class MengLogin extends Component {
  render() {
    return (
      <View style={{flex: 1, padding: 15}}>
        <Image source={duduk} style={style.gambar} />
        <Text style={{color: '#190844', fontWeight: 'bold', fontSize: 35}}>
          Sign in
        </Text>
        <View
          style={{justifyContent: 'center', marginVertical: 20, padding: 10}}>
          <View>
            <TextInput placeholder="Email address" />
            <View style={{backgroundColor: 'black', height: 1}} />
          </View>
          <View style={{marginTop: 30}}>
            <TextInput placeholder="Password" />
            <View style={{backgroundColor: 'black', height: 1}} />
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#6951ae',
            padding: 11,
            width: '70%',
            alignSelf: 'center',
            alignItems: 'center',
            borderRadius: 5,
            marginTop: '10%'
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Continue</Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 50,
            textAlign: 'center',
            justifyContent: 'center',
          }}>
          <View style={{}}>
            <Text style={{textAlign: 'center', color: '#808080'}}>
              New user?
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={{fontWeight: 'bold', color: '#68559d'}}>
              {' '}
              Create account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  gambar: {
    width: '100%',
    height: 200,
    marginVertical: 40,
  },
});
