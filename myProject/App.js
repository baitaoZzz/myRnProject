import React from 'react'
import { Text, View } from 'react-native'

import { Router, Scene, Stack } from 'react-native-router-flux'

import Main from './component/main'
import MovieList from './component/tabs/movie/movieList';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Router>
            <Stack>
              <Scene  key='main' component={Main} hideNavBar={true} ></Scene>

              <Scene key='movieList' component={MovieList}  title='电影排行' navigationBarStyle={{height: 40}}></Scene>
            </Stack>
        </Router>
      </View>
    )
  }
}
