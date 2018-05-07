import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from '../components/card';
import axios from 'axios';

export default class AlbumDetail extends Component {

    render() {
        return (
            <View>
                <Card>
                    <Text>{this.props.album.title}</Text>
                </Card>    
            </View>
        );
    }

}