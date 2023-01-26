/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {ImageBackground, Pressable} from "react-native";

type cardProps = {
  image: any;
  children: JSX.Element[] | JSX.Element;
  color: string;
  onPress?: any;
  width?: number;
};

export default function Card({
  image,
  color,
  onPress,
  width,
  children,
}: cardProps) {
  return (
    <Pressable style={{borderRadius: 10, marginRight: 10}} onPress={onPress}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{
          height: 180,
          // width: 320,
          // width: 340,
          width: width ? width : 320,
          marginTop: 30,
          borderRadius: 10,
          backgroundColor: color,
          overflow: "hidden",
        }}>
        {children}
      </ImageBackground>
    </Pressable>
  );
}
