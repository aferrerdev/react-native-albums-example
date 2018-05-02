import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default class AlbumList extends Component {

    // Initialize component state
    state = {
        albums: []
    };

    componentWillMount() {
        console.log('componentWillMount in AlbumList');
        // Do HTTP Request
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => {
                // Set new state.
                this.setState({
                    albums: response.data
                 });
                 console.log(response.data);
            }, (error) => {
                console.log(error);
            });
    }

    renderAlbums() {
        return this.state.albums.map(album => <Text>{album.title}</Text>);
    }

    render() {
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}