import Svg, { Line, G, Circle, Text, Path } from 'react-native-svg';
import React, {useState, useEffect, Component, PureComponent, useCallback} from 'react';
import { Image, StyleSheet, View, ScrollView, SafeAreaView, TextInput, Dimensions, ImageBackground, Button, Alert, StatusBar } from 'react-native';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit';


class LineGraph extends Component {


  
       
        render()
        {
          const windowswidth = Dimensions.get('window').width;
        return (

            <View>
            <Svg height="200" width={windowswidth}>
            <G>
          <Line x1="0" y1="100" x2={windowswidth} y2="100" stroke="red" strokeWidth="5" strokeLinecap='round' strokeDasharray="1, 20" />
        
            <Text textAnchor='middle' alignmentBaseline='middle' fill='black' x1="0" x2 ={windowswidth} >Satu</Text>
          </G>
        
          <Text textAnchor='middle' alignmentBaseline='middle' fill='black' fontSize="17">Satu</Text>
        </Svg>
          </View>
        
        );


        const LineStyle = StyleSheet.create({



        });


        }



}

export default LineGraph;