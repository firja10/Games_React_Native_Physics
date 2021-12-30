import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Halaman extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {{backgroundColor:'#424242', justifyContent: 'center', alignItems:'center', height:'100%'}}>
        <Text style = {{color:'#ffff', justifyContent:'center', alignItems:'center'}}> Halaman </Text>
      </View>
    );
  }
}
