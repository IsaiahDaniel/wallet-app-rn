/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Pressable, Text} from 'react-native';
import React from 'react';
import { COLORS } from '../constants';

type buttonProps = {
  text: string;
  onPress: any;
};

export default function Button({text, onPress}: buttonProps) {
  return (
    <Pressable style={{ backgroundColor: COLORS.primary, paddingLeft: 20, paddingRight: 20, paddingVertical: 20, borderRadius: 10, marginTop: 30 }} onPress={onPress}>
      <Text style={{ color: COLORS.white, textAlign: 'center' }}>{text}</Text>
    </Pressable>
  );
}
