import React, {Component} from 'react';
import {
  View,
  Text,
  NativeModules,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from 'react-native';
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
        DestinationLng: 0,
      },
      initCoords: {
        Lat: 40.668727,
        Lng: -73.99285,
      },
      ButtonText: 'Create Route',
    };
    this.createRoute = this.createRoute.bind(this);
  }

  createRoute() {
    if (this.state.ButtonText !== 'Navigate') {
      this.setState({
        routeParams: {
          OriginLat: 37.7589503,
          OriginLng: -122.3551908,
          DestinationLat: 37.7589503,
          DestinationLng: -122.3551908,
        },
        ButtonText: 'Navigate',
      });
    } else {
      sleep(100).then(() => HEREMap.Action('Navigate'));
    }
  }

  render() {
    if (Platform.OS === 'ios') {
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
              width: 400,
            }}
          />
          <TouchableOpacity style={styles.button} onPress={this.createRoute}>
            <Text>{this.state.ButtonText}</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'color',
          }}>
          <TouchableOpacity
            onPress={() =>
              NativeModules.HereMap.load(
                37.7589503, //10.0146196,
                -122.3551908, //76.3625102,
                37.7589503,
                -122.3551908,
              )
            }
            style={{
              height: 50,
              width: 300,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'red',
            }}>
            <Text style={{color: 'white'}}>HereMap</Text>
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
    justifyContent: 'center',
  },
});
