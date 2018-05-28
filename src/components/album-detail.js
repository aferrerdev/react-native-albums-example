import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import axios from 'axios';
import Card from './card';
import CardSection from './card-section';
import Button from './button';

export default class AlbumDetail extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image
                            style={styles.thumbnailStyle}
                            source={{ uri: this.props.album.thumbnail_image }} 
                        />
                    </View>
                    <View style={styles.headerContentStyle}>
                        <Text style={styles.headerTextStyle}>{this.props.album.title}</Text>
                        <Text>{this.props.album.artist}</Text>
                    </View>    
                </CardSection>
                <CardSection>
                    <Image style={styles.imageStyle} source={{ uri: this.props.album.image }} />
                </CardSection>
                <CardSection>
                    <Button />
                </CardSection>    
            </Card>
        );
    }
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}