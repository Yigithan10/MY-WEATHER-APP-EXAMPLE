import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
  ImageBackground,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import * as RNLocalize from 'react-native-localize';
import Card from '../components/Card';
import {height, width} from '../components/Dimensions';
import {getCityName} from '../service/Service';

const Home = props => {
  const {navigation} = props;

  const theme = useColorScheme();
  const color = theme == 'dark' ? 'white' : 'black';
  const backColor = theme == 'dark' ? 'black' : 'white';

  // const [deviceCity, setDeviceCity] = useState(
  //   RNLocalize.getTimeZone().split('/')[1],
  // );
  const [deviceCity, setDeviceCity] = useState('Istanbul');
  const [allData, setAllData] = useState([]);
  const [localData, setLocalData] = useState([]);
  const [popularData1, setPopularData1] = useState([]);
  const [popularData2, setPopularData2] = useState([]);
  const [popularData3, setPopularData3] = useState([]);
  const [popularData4, setPopularData4] = useState([]);
  const [popularData5, setPopularData5] = useState([]);
  const [popularData6, setPopularData6] = useState([]);
  const [popularData7, setPopularData7] = useState([]);
  const [popularData8, setPopularData8] = useState([]);
  const [popularData9, setPopularData9] = useState([]);
  const [popularData10, setPopularData10] = useState([]);
  const [popularData11, setPopularData11] = useState([]);
  const [popularData12, setPopularData12] = useState([]);
  const [popularData13, setPopularData13] = useState([]);
  const [popularData14, setPopularData14] = useState([]);
  const [error, setError] = useState(false);
  const [isSpinner, setIsSpinner] = useState(true);

  const popularCityName1 = 'New York';
  const popularCityName2 = 'London';
  const popularCityName3 = 'Berlin';
  const popularCityName4 = 'Paris';
  const popularCityName5 = 'Ankara';
  const popularCityName6 = 'Roma';
  const popularCityName7 = 'Madrid';
  const popularCityName8 = 'Viyana';
  const popularCityName9 = 'Kiev';
  const popularCityName10 = 'Tokyo';
  const popularCityName11 = 'Atina';
  const popularCityName12 = 'Seul';
  const popularCityName13 = 'Buenos Aires';
  const popularCityName14 = 'Budapeşte';

  const getData = () => {
    return Promise.all([
      getCityName(deviceCity),
      getCityName(popularCityName1),
      getCityName(popularCityName2),
      getCityName(popularCityName3),
      getCityName(popularCityName4),
      getCityName(popularCityName5),
      getCityName(popularCityName6),
      getCityName(popularCityName7),
      getCityName(popularCityName8),
      getCityName(popularCityName9),
      getCityName(popularCityName10),
      getCityName(popularCityName11),
      getCityName(popularCityName12),
      getCityName(popularCityName13),
      getCityName(popularCityName14),
    ]);
  };

  useEffect(() => {
    getData()
      .then(
        ([
          localCity,
          popularCity1,
          popularCity2,
          popularCity3,
          popularCity4,
          popularCity5,
          popularCity6,
          popularCity7,
          popularCity8,
          popularCity9,
          popularCity10,
          popularCity11,
          popularCity12,
          popularCity13,
          popularCity14,
        ]) => {
          setLocalData(localCity);
          setPopularData1(popularCity1);
          setPopularData2(popularCity2);
          setPopularData3(popularCity3);
          setPopularData4(popularCity4);
          setPopularData5(popularCity5);
          setPopularData6(popularCity6);
          setPopularData7(popularCity7);
          setPopularData8(popularCity8);
          setPopularData9(popularCity9);
          setPopularData10(popularCity10);
          setPopularData11(popularCity11);
          setPopularData12(popularCity12);
          setPopularData13(popularCity13);
          setPopularData14(popularCity14);

          if (allData.length === 0) {
            allData.push(localCity);
            allData.push(popularCity1);
            allData.push(popularCity2);
            allData.push(popularCity3);
            allData.push(popularCity4);
            allData.push(popularCity5);
            allData.push(popularCity6);
            allData.push(popularCity7);
            allData.push(popularCity8);
            allData.push(popularCity9);
            allData.push(popularCity10);
            allData.push(popularCity11);
            allData.push(popularCity12);
            allData.push(popularCity13);
            allData.push(popularCity14);

            console.log('dataya veriler girildi...');
          }

          setIsSpinner(false);
        },
      )
      .catch(err => {
        console.log(err);
        setError(err);
        setIsSpinner(false);
      });
  }, []);

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: '#EEB461'}]}>
      <ScrollView style={{flex: 1}}>
        {!error && !isSpinner && (
          <View style={{ width: width }}>
            <FlatList
              data={allData}
              renderItem={({item}) => (
                <Card item={item} navigation={navigation} />
              )}
            />
          </View>
        )}
      </ScrollView>

      {error && !isSpinner && (
        <View style={styles.view}>
          <View style={styles.contain}>
            <Text style={[styles.error, {color: '#FF7417'}]}>Error!</Text>
            <Text style={[styles.error, {color: '#FF7417'}]}>
              Try again later!
            </Text>
          </View>
        </View>
      )}

      {isSpinner && (
        <View style={styles.view}>
          <View style={styles.contain}>
            <ActivityIndicator color={'#FF7417'} size={'large'} />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contain: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  view: {
    width: width,
    height: height,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  scroll: {
    width: width,
  },
  backImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontSize: 34,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
});

export default Home;
