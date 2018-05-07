import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from './card';
import axios from 'axios';

export default class AlbumDetail extends Component {

    render() {
        return (
            <Card>
                <Text>{this.props.album.title}</Text>
            </Card>
        );
    }

}