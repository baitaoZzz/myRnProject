import React from 'react'
import { Text, View } from 'react-native'

import TabNavigator  from 'react-native-tab-navigator'
import { Actions } from 'react-native-router-flux';

React.Component.prototype.Actions = Actions

import Icon from 'react-native-vector-icons/Ionicons'

import Home from './tabs/home'  //首页组件
import Movie from './tabs/movie'  //电影组件
import About from './tabs/about'  //关于组件

export default class main extends React.Component {
    constructor(){
        super()
        this.state = {
            selectedTab : 'home'
        }
    }
    render() {
        return (
            <View style={{flex:1}}>
                <TabNavigator>
                    <TabNavigator.Item
                        title='首页'
                        selected={this.state.selectedTab === 'home'}
                        onPress={() => this.setState({selectedTab: 'home'})}
                        renderIcon={() => <Icon name='md-home' size={22}></Icon>}
                        renderSelectedIcon={() => <Icon name='md-home' size={22} color='#4698FE'></Icon>}
                    >
                        <Home></Home>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title='购物车'
                        selected={this.state.selectedTab === 'movie'}
                        onPress={() => this.setState({selectedTab: 'movie'})}
                        renderIcon={() => <Icon name='md-cart' size={22}></Icon>}
                        renderSelectedIcon={() => <Icon name='md-cart' size={22} color='#4698FE'></Icon>}
                        badgeText="0"
                    >
                        <Movie></Movie>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title='关于'
                        selected={this.state.selectedTab === 'about'}
                        onPress={() => this.setState({selectedTab: 'about'})}
                        renderIcon={() => <Icon name='md-person' size={22}></Icon>}
                        renderSelectedIcon={() => <Icon name='md-person' size={22} color='#4698FE'></Icon>}
                    >
                        <About></About>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
    }
}
