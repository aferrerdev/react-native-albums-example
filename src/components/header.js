import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Albums!</Text>
        </View>
    );
};
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        paddingTop: 20,
        // Add shadow
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 20
    }
};
export default Header;