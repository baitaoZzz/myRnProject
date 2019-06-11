import React from 'react'
import {  View } from 'react-native'
import { Scene , Tabs, Router } from 'react-native-router-flux'
import NewMovie from './tabbar/newMovie';
import PopularMovie from './tabbar/popularMovie';
import NoticeMovie from './tabbar/noticeMovie'

export default class movieList extends React.Component {
    render() {
        return (
            <View style={{flex: 1 , backgroundColor: "#fff"}}>
                <Router>
                    <Tabs tabBarPosition="top">
                        <Scene 
                            key='newMovie'  
                            component={NewMovie} 
                            title='最新电影'
                            hideNavBar={true}
                        ></Scene>
                        <Scene 
                            key='popularMovie'  
                            component={PopularMovie}  
                            title='热门电影'
                            hideNavBar={true}
                        ></Scene>
                        <Scene 
                            key='noticeMovie'  
                            component={NoticeMovie} 
                            title='电影预告'
                            hideNavBar={true}
                        ></Scene>
                    </Tabs>
                </Router>
            </View>
        )
    }
}
