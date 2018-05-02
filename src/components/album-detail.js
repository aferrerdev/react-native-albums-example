import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default class AlbumDetail extends Component {

    render() {
        return (
            <View>
                <Text>{this.props.album.title}</Text>
            </View>
        );
    }

}