/**
 * @format
 */

// Import a library to help create acomponent
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Crate a component
const App = () => (
    <View>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
