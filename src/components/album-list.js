import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default class AlbumList extends Component {

    componentWillMount() {
        console.log('componentWillMount in AlbumList');
        // Do HTTP Request
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => {
                console.log(response);
            }, () => {

            });
    }

    render() {
        return (
            <View>
                <Text>Album List</Text>
            </View>
        );
    }
}