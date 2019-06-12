import React from 'react'
import { Text, View } from 'react-native'

import { Router, Scene, Stack, Tabs } from 'react-native-router-flux'

import Main from './component/main'

import MovieList from './component/movie/movieList'

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Router>
            <Stack>
              <Scene  key='main' component={Main} hideNavBar={true} ></Scene>

              <Tabs  key='movieHome'  tabBarPosition='top'  hideNavBar={true}  lazy={true}>
                  <Scene key='in_theaters' component={ MovieList } typer='in_theaters'  title='热映电影'   hideNavBar={true} ></Scene>
                  <Scene key='coming_soon' component={ MovieList } typer='coming_soon'  title='即将上映' hideNavBar={true} ></Scene>
                  <Scene key='top250' component={ MovieList }    typer='top250'   title='Top250'  hideNavBar={true}></Scene>
              </Tabs>
            
            </Stack>
        </Router>
      </View>
    )
  }
}
