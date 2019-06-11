import React  from 'react'
import { Text, View , StyleSheet , ScrollView ,Image , TouchableOpacity , TouchableHighlight } from 'react-native'

import Swiper from 'react-native-swiper';


// 轮播图样式
const styles = StyleSheet.create({
    wrapper: {
        height: 200,
        width: '100%'
    },
    viewSwiper: {
        height: 200
    },
    swipImg: {
        height: '100%',
        width: '100%'
    },
    iconFlex: {
        width:'100%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    iconView: {
        width: '33.3%',
        alignItems: 'center'

    },
    iconImg : {
        width: 50,
        height: 50,
        marginVertical: 20
    }
  })

export default class home extends React.Component {
    constructor(){
        super()
        this.state = {
            imgData :[
                "https://m.360buyimg.com/mobilecms/s772x376_jfs/t23224/12/1547449730/265644/6da76a53/5b627790N1beab594.jpg!cr_1125x549_0_72!q70.jpg.dpg.webp",
                "https://m.360buyimg.com/mobilecms/s772x376_jfs/t23389/341/1459755771/98229/bdf1b674/5b619766Nb8e94478.jpg!cr_1125x549_0_72!q70.jpg.dpg.webp",
                "https://m.360buyimg.com/mobilecms/s772x376_jfs/t23560/365/1407572473/129109/377153ef/5b6010acN1b265667.jpg!cr_1125x549_0_72!q70.jpg.dpg.webp",
                "https://m.360buyimg.com/mobilecms/s772x376_jfs/t25549/223/5998595/106769/8dfb1308/5b62a8a3Nae1a28e1.jpg!cr_1125x549_0_72!q70.jpg.dpg.webp",
                "https://m.360buyimg.com/mobilecms/s772x376_jfs/t24148/59/1544888845/169957/6b3a521d/5b62a6edNd0172ab9.jpg!cr_1125x549_0_72!q70.jpg.dpg.webp",
              ]
        }
    }
    render() {
        return (
            <ScrollView style={{flex:1,backgroundColor:'#fff'}}>
                <View >
                    {/* 轮播图 */}
                    <View style={styles.viewSwiper}>
                        <Swiper style={styles.wrapper}
                            showsButtons={false}  //左右点击切换按钮
                            autoplay={true}
                        >
                            {this.state.imgData.map((item,index)=>{
                                return <Image source={{ uri :item }} key={index} style={styles.swipImg} resizeMode='cover'></Image>
                            })}
                        </Swiper>
                    </View>

                    {/* 九宫格 */}
                            
                    <View style={ styles.iconFlex }>
                        <View style={styles.iconView}>
                            <Image source={require("../image/1.png")} style={styles.iconImg}></Image>
                            <Text>新闻</Text>
                        </View>
                        <View style={styles.iconView}>
                            <Image source={require("../image/2.png")} style={styles.iconImg}></Image>
                            <Text>商城</Text>
                        </View>
                        <View style={styles.iconView}>
                            <Image source={require("../image/3.png")} style={styles.iconImg}></Image>
                            <Text>文化</Text>
                        </View>
                            
                        <View style={styles.iconView}>
                            <Image source={require("../image/4.png")} style={styles.iconImg}></Image>
                            <Text>城市</Text>
                        </View>
                        
                        <View style={styles.iconView}  >
                            <TouchableOpacity style={{alignItems: 'center'}} activeOpacity={1} onPress={() => this.Actions.movieList()}>
                                <Image source={require("../image/6.png")} style={styles.iconImg} ></Image>
                                <Text>电影</Text>
                            </TouchableOpacity>
                        </View>
                        
                        
                        <View style={styles.iconView}>
                            <Image source={require("../image/5.png")} style={styles.iconImg}></Image>
                            <Text>电话</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
