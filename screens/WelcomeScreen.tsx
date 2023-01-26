/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {COLORS, SIZES, images} from '../constants';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.flex}>
      <ImageBackground
        source={images.BgTwo}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={{marginHorizontal: 20, marginTop: 30}}>
        <Text style={{color: COLORS.white, fontSize: 39}}>Best Way to</Text>
        <Text style={{color: COLORS.white, fontSize: 39}}>Tracking your</Text>
        <Text style={{color: COLORS.white, fontSize: 39}}>Money</Text>
        <Text style={{color: COLORS.gray, marginTop: 30, lineHeight: 25}}>
          Best Payment Method, connects your money with your friends and family
        </Text>
        <Button
          text="Get Started"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  image: {
    width: SIZES.width,
    height: SIZES.height / 2,
  },
});

export default WelcomeScreen;
