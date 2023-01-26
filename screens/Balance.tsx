/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, Pressable} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {COLORS, images} from "../constants";
import Card from "../components/Card";
import Button from "../components/Button";
import {useNavigation} from "@react-navigation/native";

export default function Balance() {
  //   console.log('route', route);
  const navigation = useNavigation();
  return (
    <View style={{paddingHorizontal: 25, marginTop: 60}}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} />
        </Pressable>
        <Text style={{fontSize: 16, fontWeight: "bold"}}>Card Details</Text>
        <View
          style={{
            backgroundColor: COLORS.tertiary,
            borderRadius: 10,
            paddingHorizontal: 6,
            paddingVertical: 2,
          }}>
          <Image
            source={images.avatar}
            resizeMode="cover"
            style={{width: 50, height: 50}}
          />
        </View>
      </View>

      <View style={{marginTop: 60}}>
        <Text style={{textAlign: "center", marginBottom: 20}}>
          Total Balance
        </Text>
        <Text style={{fontSize: 20, textAlign: "center", fontWeight: "bold"}}>
          $568.000
        </Text>
      </View>

      <View style={{margin: "auto"}}>
        <Card image={images.BgTwo} width={327} color={COLORS.gray}>
          <View
            style={{
              padding: 20,
              flex: 1,
              justifyContent: "space-between",
            }}>
            <View>
              <Text style={{color: COLORS.white, fontSize: 15}}>***3444</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <View>
                <Text style={{color: COLORS.white}}>Total Balance</Text>
                <Text style={{color: COLORS.white, fontSize: 20}}>$38290</Text>
              </View>
              <Image
                source={images.MasterCard}
                resizeMode="contain"
                style={{width: 50, height: 30}}
              />
            </View>
          </View>
        </Card>
      </View>

      <Button text="Cancel" onPress={() => console.log("hi")} />
    </View>
  );
}
