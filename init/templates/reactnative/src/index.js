import React from 'react';
import { ScrollView, View } from 'react-native';

import './config/ReactotronConfig';

import Header from './components/Header';
import Tabs from './components/Tabs';

const App = () => (
  <View style={{ flex: 1, backgroundColor: '#FFF' }}>
    <Header />
    <ScrollView>
    </ScrollView>
    <Tabs />
  </View>
);

export default console.tron.overlay(App);
