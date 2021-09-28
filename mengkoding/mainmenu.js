import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import cari from '../assets/loupe.png';
import think from '../assets/think.png';
import menu from '../assets/menu.png';
import event from '../assets/event.png';
import play from '../assets/play.png';
import arrow from '../assets/arrow.png';
import joji from '../assets/joji.jpeg';

export default class MainMenu extends Component {
  render() {
    return (
      <ScrollView>
        <View
          style={{
            flex: 1,
            padding: 10,
            backgroundColor: 'gray',
          }}>
          <View>
            <Text>DISCOVER</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text
                style={{
                  marginVertical: '5%',
                  fontWeight: 'bold',
                  fontSize: 30,
                  color: '#170942',
                }}>
                Events
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#e5e5e5',
                padding: 10,
                alignItems: 'center',
                width: '35%',
                height: '5%',
                borderRadius: 20,
              }}>
              <Image source={cari} style={gaya.lup} />
              <TextInput style={gaya.searchcari} placeholder="Search" />
            </View>
          </View>
          <TouchableOpacity>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: '#00083a',
                padding: 15,
                justifyContent: 'space-between',
                borderRadius: 10,
                elevation: 5,
                marginVertical: '8%',
              }}>
              <View style={{ justifyContent: 'space-between' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                  VOLUNTEER #2
                </Text>
                <Text
                  style={{
                    color: '#ffa41d',
                    fontWeight: 'bold',
                    fontSize: 35,
                  }}>
                  INTRO TO
                </Text>
                <Text
                  style={{
                    color: '#ffa41d',
                    fontWeight: 'bold',
                    fontSize: 35,
                  }}>
                  DESIGN
                </Text>
                <Text
                  style={{
                    color: '#ffa41d',
                    fontWeight: 'bold',
                    fontSize: 35,
                  }}>
                  SYSTEM
                </Text>
              </View>
              <View>
                <Image source={think} style={gaya.mikir} />
              </View>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{ color: '#170942', fontSize: 25 }}>
              Events Categories
            </Text>
            <Image source={menu} style={gaya.hanu} />
          </View>
          <ScrollView horizontal>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                backgroundColor: 'grey',
              }}>
              <KotakPutih gambar={event} judul="Event" />
              <KotakPutih gambar={event} judul="Technology" />
              <KotakPutih gambar={event} judul="Go Green" />
            </View>
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <Text style={{ color: '#170942', fontSize: 25 }}>
              Upcoming Events
            </Text>
            <Image source={menu} style={gaya.hanu} />
          </View>
          <TouchableOpacity>
            <KotakHitam satu={joji} dua={joji} tiga={joji} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const KotakPutih = (prop) => {
  return (
    <View
      style={{
        width: 110,
        height: 130,
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 20,
        padding: 5,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Image source={prop.gambar} />
      <Text>{prop.judul}</Text>
    </View>
  );
};

const KotakHitam = (prop) => {
  return (
    <View
      style={{
        backgroundColor: '#05010e',
        width: '100%',
        height: 165,
        marginTop: '5%',
        borderRadius: 10,
        paddingTop: 15,
        paddingLeft: 15,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Isyana Concert
        </Text>
        <View
          style={{
            backgroundColor: '#399d29',
            padding: 5,
            width: 70,
            height: 20,
            justifyContent: 'center',
            borderTopLeftRadius: 6,
            borderBottomLeftRadius: 6,
          }}>
          <Text style={{ color: 'white', fontSize: 13, textAlign: 'center' }}>
            Open
          </Text>
        </View>
      </View>
      <Text style={{ color: 'white', fontSize: 12, marginTop: 6 }}>
        Registration : 01 - 31 Aug 2020
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 19,
          justifyContent: 'space-between',
          paddingRight: 20,
          marginRight: 10,
          marginLeft: 20,
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={prop.satu} style={gaya.mengjoji} />
          <Image source={prop.dua} style={gaya.mengjoji} />
          <Image source={prop.tiga} style={gaya.mengjoji} />
        </View>
        <View
          style={{
            backgroundColor: '#6951ae',
            width: 40,
            height: '100%',
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={play} style={{ width: 15, height: 15 }} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 19,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            marginRight: 15,
            fontSize: 12,
            fontWeight: 'bold',
          }}>
          Open position
        </Text>
        <Image source={arrow} style={{ width: 20, height: 20 }} />
      </View>
    </View>
  );
};

const gaya = StyleSheet.create({
  lup: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchcari: {
    width: '100%',
  },
  mikir: {
    width: 130,
    height: 150,
  },
  hanu: {
    width: 20,
    height: 20,
  },
  mengjoji: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    marginLeft: -20,
  },
});
