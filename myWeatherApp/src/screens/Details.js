import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Details = ({route, navigation}) => {
  const item = route.params.item;

  const theme = useColorScheme();
  const color = theme == 'dark' ? 'white' : 'black';
  const backColor = theme == 'dark' ? 'black' : 'white';

  const itemImage = `http://openweathermap.org/img/w/${item.weather[0].icon}.png`;

  return (
    <View style={[styles.container, {backgroundColor: backColor}]}>
      <View style={styles.containUp}>
        <Text style={[styles.name, {color: color}]}>
          {item.name + ', ' + item.sys.country}
        </Text>
        <View style={styles.col}>
          <Image
            style={styles.image}
            source={{
              uri: itemImage,
            }}
          />
          <Text style={[styles.temp, {color: color}]}>
            {item.main.temp.toFixed() + '°C'}
          </Text>
        </View>
      </View>
      <View style={styles.containDown}>
        <View style={[styles.row, {backgroundColor: color}]}>
          <Ionicons
            style={styles.icon}
            name={'person-outline'}
            size={25}
            color={'#FF7417'}
          />
          <Text style={[styles.temp, {color: backColor}]}>
            {item.main.feels_like.toFixed() + '°C'}
          </Text>
        </View>
        <View style={[styles.row, {backgroundColor: color}]}>
          <Ionicons
            style={styles.icon}
            name={'arrow-up-outline'}
            size={25}
            color={'#FF7417'}
          />
          <Text style={[styles.temp, {color: backColor}]}>
            {item.main.temp_max.toFixed() + '°C'}
          </Text>
        </View>
        <View style={[styles.row, {backgroundColor: color}]}>
          <Ionicons
            style={styles.icon}
            name={'arrow-down-outline'}
            size={25}
            color={'#FF7417'}
          />
          <Text style={[styles.temp, {color: backColor}]}>
            {item.main.temp_min.toFixed() + '°C'}
          </Text>
        </View>
        <View style={[styles.row, {backgroundColor: color}]}>
          <Ionicons
            style={styles.icon}
            name={'cloud-outline'}
            size={25}
            color={'#FF7417'}
          />
          <Text style={[styles.temp, {color: backColor}]}>
            {item.main.pressure.toFixed() + ' mBar'}
          </Text>
        </View>
        <View style={[styles.row, {backgroundColor: color}]}>
          <Ionicons
            style={styles.icon}
            name={'water-outline'}
            size={25}
            color={'#FF7417'}
          />
          <Text style={[styles.temp, {color: backColor}]}>
            {item.main.humidity.toFixed() + ' g/m3'}
          </Text>
        </View>
        <View style={[styles.row, {backgroundColor: color}]}>
          <Ionicons
            style={styles.icon}
            name={'flag-outline'}
            size={25}
            color={'#FF7417'}
          />
          <Text style={[styles.temp, {color: backColor}]}>
            {item.wind.speed.toFixed() + ' km/h'}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containUp: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  containDown: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 25,
  },
  col: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  row: {
    width: '70%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 25,
    marginTop: 15,
    paddingRight: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  icon: {
    margin: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: '500',
    letterSpacing: 3.5,
  },
  temp: {
    fontSize: 24,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  tempSet: {
    fontSize: 21,
    fontWeight: '200',
    letterSpacing: 0.5,
  },
});

export default Details;
