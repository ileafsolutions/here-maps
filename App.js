import React, { Component } from 'react';
import { View, Text, NativeModules, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import MainHRMap from './HRMap.js';
let HEREMap = NativeModules.HRMapManager;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default class HRMapAndroid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routeParams: {
        OriginLat: 0,
        OriginLng: 0,
        DestinationLat: 0,
        DestinationLng: 0
      },
      initCoords: {
        Lat: 40.668727,
        Lng: -73.992850
      },
      ButtonText: 'Create Route'
    };
    this.createRoute = this.createRoute.bind(this);
  }

  createRoute() {
    if (this.state.ButtonText !== 'Navigate') {
      this.setState({
        routeParams: {
          OriginLat: 40.668727,
          OriginLng: -73.992850,
          DestinationLat: 41.070640,
          DestinationLng: -71.860219
        },
        ButtonText: 'Navigate'
      })
    } else {
      sleep(100).then(() => HEREMap.Action('Navigate'));
    }
  }

  render() {
    if (Platform.OS === "ios") {
      return (
        <View style={styles.container}>

          <MainHRMap

            InitCoords={this.state.initCoords}
            routeParams={this.state.routeParams}

            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FF0000',
              height: 400,
              width: 400
            }}

          />
          <TouchableOpacity style={styles.button} onPress={this.createRoute}><Text>{this.state.ButtonText}</Text></TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'color' }}>
          <TouchableOpacity onPress={() => NativeModules.HereMap.load(10.0146196, 76.3625102, 10.0068604, 76.3717159)} style={{ height: 50, width: 300, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }}>
            <Text style={{ color: 'white' }}>HereMap</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 30,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
