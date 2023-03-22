import React, {useState} from 'react';
import {height, width} from '../components/Dimensions';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  Alert,
  Pressable,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getCityName} from '../service/Service';

const Search = props => {
  const {navigation} = props;

  const theme = useColorScheme();
  const color = theme == 'dark' ? 'white' : 'black';
  const backColor = theme == 'dark' ? 'black' : 'white';

  const [error, setError] = useState(false);
  const [city, setCity] = useState('');

  const findCity = () => {
    getCityName(city)
      .then(item => {
        navigation.navigate('Details', {item: item});
      })
      .catch(err => {
        Alert.alert('Error!', 'Not Found!');
        setError(err);
      });
  };

  return (
    <View style={[styles.container, {backgroundColor: 'black'}]}>
      <ImageBackground
        source={require('../assets/1.jpg')}
        style={styles.backImage}
        imageStyle={{opacity: 0.4, backgroundColor: 'black'}}>
        <View style={styles.absl}>
          <View style={[styles.view, {borderColor: '#FF7417'}]}>
            <TextInput
              style={[styles.input, {color: '#DB8348'}]}
              value={city}
              onChangeText={val => setCity(val)}
              placeholder="Search City"
              placeholderTextColor={'#DB8348'}
              cursorColor={'#DB8348'}
              onSubmitEditing={() => {
                if (city.length != 0) {
                  findCity();
                  Keyboard.dismiss();
                }
              }}
            />
            <TouchableOpacity
              disabled={city.length == 0 ? true : false}
              onPress={() => {
                findCity();
              }}>
              <Ionicons
                style={styles.icon}
                name="search-outline"
                size={22}
                color={'#FF7417'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.desc}>
            <Text style={[styles.text1, {color: '#FF7417'}]}>
              You can search your city!
            </Text>
          </View>
          <View style={styles.desc}>
            <Text style={[styles.text2, {color: '#DB9260'}]}>
              You can press the search icon or the button then you write your
              city!
            </Text>
          </View>
          <View style={styles.buttonCon}>
            <Pressable
              style={styles.btn}
              onPress={() => {
                if (city.length != 0) {
                  findCity();
                }
              }}>
              <Text style={[styles.text3, {color: color}]}>Search!</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
  },
  contain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  absl: {
    width: width,
    height: height * 0.89,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  desc: {
    marginTop: 40,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  backImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 5,
    width: '80%',
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  text1: {
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: 10,
  },
  text2: {
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 2,
  },
  text3: {
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  buttonCon: {
    marginTop: 100,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: '75%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#FF7417',
  },
});

export default Search;
