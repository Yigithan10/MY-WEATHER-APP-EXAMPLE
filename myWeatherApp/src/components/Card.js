import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {width} from './Dimensions';

const Card = props => {
  const {item, name, navigation} = props;

  const itemImage = `http://openweathermap.org/img/w/${item.weather[0].icon}.png`;

  const theme = useColorScheme();
  const color = theme == 'dark' ? 'white' : 'black';
  const backColor = theme == 'dark' ? 'black' : 'white';

  return (
    <Ripple
      id={item.id}
      rippleColor={color}
      rippleOpacity={0.5}
      rippleCentered={true}
      onPress={() => {
        navigation.navigate('Details', {
          item: item,
        });
      }}
      style={[styles.container, {backgroundColor: backColor}]}>
      <View>
        <Text style={[styles.name, {color: color}]}>
          {item.name + ', ' + item.sys.country}
        </Text>
      </View>
      <View style={styles.row}>
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
    </Ripple>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: 80,
    marginTop: 10,
    marginBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    opacity: 0.7,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 40,
    height: 40,
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  name: {
    fontSize: 22,
    fontWeight: '500',
    letterSpacing: 2.5,
  },
  temp: {
    fontSize: 20,
    fontWeight: '300',
    letterSpacing: 0.5,
  },
});

export default Card;
