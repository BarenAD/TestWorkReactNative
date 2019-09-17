/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SelectBlock from "./src/components/SelectBlock";
import WeatherModel from "./src/Models/Model";
import WeatherView from "./src/components/WeatherView";

export default class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      selected_block_id: 1
    };
    this.Model = new WeatherModel();
    this.handle_change_selected_block = this.handle_change_selected_block.bind(this);
  }

  handle_change_selected_block(ID)
  {
    this.setState({selected_block_id: ID});
  }

  render(){
    return (
        <View
            style={{
              flex: 1
            }}
        >
          <View
              style={{
                flex: 3
              }}
          >
            <SelectBlock
                select_block_id={this.state.selected_block_id}
                on_change_select_block={this.handle_change_selected_block}
            />
          </View>

          <View
              style={{
                flex: 2
              }}
          >
              <WeatherView
                on_get_weather={this.Model.getBasicWeather}
              />
          </View>

          <View
              style={{
                flex: 1
              }}
          >
          </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({

});