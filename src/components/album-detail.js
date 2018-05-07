import React, { Component } from 'react';
import { Text } from 'react-native';
import axios from 'axios';
import Card from './card';
import CardSection from './card-section';

export default class AlbumDetail extends Component {

    render() {
        return (
            <Card>
                <CardSection>
                    <Text>{this.props.album.title}</Text>
                </CardSection>
                <CardSection>
                    <Text>{this.props.album.title}</Text>
                </CardSection>
            </Card>
        );
    }

}