import React, { Component } from 'react';
import { View, Text, NativeModules, TouchableOpacity } from 'react-native';

export default class HRMapAndroid extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'color' }}>
        <TouchableOpacity onPress={() => NativeModules.HereMap.load(10.0146196, 76.3625102, 10.0068604, 76.3717159)} style={{ height: 50, width: 300, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }}>
          <Text style={{ color: 'white' }}>HereMap</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
