import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomeMap from '../../components/HomeMap';
import UberTypes from '../../components/UberTypes/index';
const SearchResults = () => {
  return (
    <View>
      <HomeMap />
      <UberTypes />
    </View>
  );
};
export default SearchResults;

const styles = StyleSheet.create({});
