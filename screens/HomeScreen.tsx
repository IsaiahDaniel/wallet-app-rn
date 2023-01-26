/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useRef} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {COLORS, images} from '../constants';
import Card from '../components/Card';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomSheet from 'reanimated-bottom-sheet';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const sheetRef = useRef(null);
  const navigation = useNavigation();

  const CARD_DATA = [
    {
      id: 1,
      accountNumber: '*** 123',
      totalBalance: '$10000',
      image: require('../assets/images/background_transparent.png'),
      color: COLORS.secondary,
      cardType: images.MasterCard,
    },
    {
      id: 2,
      accountNumber: '*** 456',
      totalBalance: '$50000',
      image: require('../assets/images/background_transparent.png'),
      color: COLORS.primary,
      cardType: images.Visa,
    },
  ];

  const TRANSACTION_DATA = [
    {
      id: 1,
      icon: 'taxi',
      amount: '-$5000',
      color: COLORS.primary,
      item: 'Taxi',
      subItem: 'Uber Car',
      date: '14 jun 2021',
    },
    {
      id: 2,
      icon: 'shopping-bag',
      item: 'Shopping',
      subItem: 'Ali Express',
      amount: '-$8000',
      color: COLORS.secondary,
      date: '14 oct 2021',
    },
    {
      id: 3,
      icon: 'ios-airplane-outline',
      item: 'Travel',
      subItem: 'Emirates',
      amount: '-$300000',
      color: COLORS.accent,
      date: '14 oct 2021',
    },
  ];

  const SEND_MONEY_DATA = [
    {
      id: 1,
      image: images.PersonOne,
      bg: COLORS.primary,
      name: 'Cynthia',
      amount: 400,
    },
    {
      id: 2,
      image: images.PersonTwo,
      bg: COLORS.accent,
      name: 'Ruth',
      amount: 700,
    },
    {
      id: 3,
      image: images.PersonThree,
      bg: COLORS.grayDark,
      name: 'Elizabeth',
      amount: 700,
    },
  ];

  const RenderGreeting = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text style={{fontSize: 20, fontWeight: '600', lineHeight: 30}}>
            Hey Kabib
          </Text>
          <Text>Welcome Back</Text>
        </View>

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
    );
  };

  const RenderBottomSheet = () => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 25,
          paddingVertical: 20,
          width: '100%',
          // height: 50,
          marginTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              marginBottom: 40,
              fontSize: 14,
            }}>
            Send Money To
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              marginBottom: 40,
              fontSize: 14,
              color: COLORS.primary,
            }}>
            +Add
          </Text>
        </View>
        <FlatList
          data={SEND_MONEY_DATA}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View
              style={{
                marginRight: 20,
                backgroundColor: item.bg,
                padding: 9,
                borderRadius: 10,
              }}>
              <Image
                source={item.image}
                style={{width: 76, height: 66, borderRadius: 10}}
                resizeMode="cover"
              />
              <Text style={{fontSize: 12, marginTop: 10, color: 'white'}}>
                {item.name}
              </Text>
              <Text style={{fontSize: 10, marginTop: 15, color: 'white'}}>
                ${item.amount}
              </Text>
            </View>
          )}
          // numColumns={3}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          marginTop: 90,
          marginHorizontal: 20,
        }}>
        <RenderGreeting />
        <FlatList
          data={CARD_DATA}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <Card
              image={item.image}
              color={item?.color}
              onPress={() => navigation.navigate('Balance')}>
              <View
                style={{
                  padding: 20,
                  flex: 1,
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text style={{color: COLORS.white, fontSize: 15}}>
                    {item.accountNumber}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Text style={{color: COLORS.white}}>Total Balance</Text>
                    <Text style={{color: COLORS.white, fontSize: 20}}>
                      {item.totalBalance}
                    </Text>
                  </View>
                  <Image
                    source={item.cardType}
                    resizeMode="contain"
                    style={{width: 50, height: 30}}
                  />
                </View>
              </View>
            </Card>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold'}}>Transactions</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Recent</Text>
            <AntDesign name="caretdown" size={10} style={{marginLeft: 4}} />
          </View>
        </View>

        <View style={{marginTop: 20}} />

        <View>
          <FlatList
            data={TRANSACTION_DATA}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 15,
                  }}>
                  <View style={{backgroundColor: item.color, borderRadius: 6}}>
                    {item.icon === 'taxi' && (
                      <FontAwesome
                        name="taxi"
                        size={23}
                        color={'#fff'}
                        style={{marginRight: 0, padding: 10}}
                      />
                    )}
                  </View>
                  <View style={{backgroundColor: item.color, borderRadius: 6}}>
                    {item.icon === 'shopping-bag' && (
                      <Feather
                        name={item.icon}
                        size={23}
                        color={'#fff'}
                        style={{marginRight: 0, padding: 10}}
                      />
                    )}
                  </View>
                  <View style={{backgroundColor: item.color, borderRadius: 6}}>
                    {item.icon === 'ios-airplane-outline' && (
                      <Ionicons
                        name="ios-airplane-outline"
                        size={23}
                        color={'#fff'}
                        style={{marginRight: 0, padding: 10}}
                      />
                    )}
                  </View>
                  <View style={{marginLeft: 10}}>
                    <Text style={{fontWeight: 'bold', marginBottom: 5}}>
                      {item.item}
                    </Text>
                    <Text style={{color: COLORS.grayDark}}>{item.subItem}</Text>
                  </View>
                </View>

                {/* Left side */}
                <View>
                  <Text style={{fontWeight: 'bold', textAlign: 'right'}}>
                    {item.amount}
                  </Text>
                  <Text style={{color: COLORS.grayDark, marginTop: 3}}>
                    {item.date}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>

      <BottomSheet
        ref={sheetRef}
        renderContent={RenderBottomSheet}
        snapPoints={[240, 85]}
        initialSnap={1}
        borderRadius={42}
        enabledContentTapInteraction={false}
      />
    </View>
  );
}
