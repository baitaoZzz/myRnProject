import React, { Component } from 'react'
import { Text, View , ActivityIndicator , Image , ScrollView} from 'react-native'

export default class movieDetail extends Component {
    constructor(props){
        super()
        this.state = {
            id : props.id,
            isLoading: true,
            dataDetail:{}
        }
    }
    componentWillMount(){
        // console.log(this.props.id)
        this.getDetail()
    }
    render() {
        if(this.state.isLoading){
            return < ActivityIndicator />
        }
        return (
            <ScrollView>
                <View style={{ alignItems : 'center',padding: 10}}>
                    <Image source={{ uri : this.state.dataDetail.images.large }} style={{width: 160,height: 240, margin: 10}}></Image>
                    <Text style={{lineHeight : 30}} selectable={true}>      { this.state.dataDetail.summary}</Text>
                </View>
            </ScrollView>
        )
    }

    getDetail = async () =>{
        const res = await fetch(this.BaseURL + 'subject/' + this.state.id)
        const data = await res.json()
        console.log(data)
        this.setState({
            isLoading: false,
            dataDetail: data
        })
    }
}
