import React from 'react'
import {  View ,  Text , FlatList , ActivityIndicator , Image , StyleSheet} from 'react-native'


const  Styles = StyleSheet.create({
    ViewList: {
        flexDirection: 'row',
        padding: 10
    },
    ViewSmall: {
        justifyContent: 'space-around',
        marginLeft: 10
    }
})

export default class movieList extends React.Component {
    constructor(props) {
        super()
        this.state = {
            isType: props.typer,
            dataList:[],
            isLoading: true,
            page: 1,  //当前页数
            total: 0 , //总页数
            EndLoading: true
        }
    }

    componentWillMount(){
        this.getMovieList()
    }

    render() {
        if(this.state.isLoading){
            return <ActivityIndicator size='large' />
        }
        return (
            <FlatList
                data={this.state.dataList}
                renderItem={({item,index}) => this.ViewList(item)}
                keyExtractor={(item,index) => index + ''}
                ItemSeparatorComponent={()=> <View style={{borderTopWidth: 1,borderTopColor: '#ccc',marginHorizontal: 10 }}></View>}
                onEndReachedThreshold={0.2}
                onEndReached={()=> this.scrollData()}
                ListFooterComponent={()=>  this.state.EndLoading ? <ActivityIndicator size='large' /> : null}
            >
            </FlatList>
           
           
        )
    }
    getMovieList = async () => {
        const res =  await fetch(this.BaseURL + this.state.isType + `?start=${(this.state.page - 1) * 10}&count=10`)
        const data = await res.json()
        this.setState({
            dataList: this.state.dataList.concat(data.subjects),
            isLoading: false,
            total: data.total
        })
        if(( this.state.page -1 ) * 10 >= this.state.total){
            this.setState({
                EndLoading : false
            })
            
        }

    }
    // 电影列表
    ViewList = (item) => {
        
        return (
            <View style={Styles.ViewList}>
                <Image  source={{uri : item.images.small}} style={{width:120,height: 160}}></Image>
                <View style={Styles.ViewSmall}>
                    <Text>电影名字：{item.title}</Text>
                    <Text>电影类型：{item.genres.join(',')}</Text>
                    <Text>电影评分：{item.rating.average}分</Text>
                    <Text>上映年份：{item.year}年</Text>
                </View>
            </View>
        )
    }

    //上拉加载更多
    scrollData = () => {
        
        const  dPage = ( this.state.page -1 ) * 10
        if(dPage >= this.state.total){
            
            return null
        }
        this.setState({
            page: this.state.page + 1,
        },function () { 
            this.getMovieList()
        })
        
    }
}
