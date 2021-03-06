import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const HomeMap = (props) => {
  return (
    <View
      style={{
        height: 300,
        backgroundColor: 'lightpink',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <MapView
        style={{height: '100%', width: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};
export default HomeMap;
const styles = StyleSheet.create({});
