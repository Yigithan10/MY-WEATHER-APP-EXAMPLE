import React from 'react';
import {StatusBar, useColorScheme, Easing} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Navbar from './src/components/Navbar';
import Navigation from './src/screens/Navigation';
import Details from './src/screens/Details';

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 50,
    easing: Easing.linear,
  },
};

const App = () => {
  const Stack = createStackNavigator();

  const theme = useColorScheme();
  const color = theme == 'dark' ? 'white' : 'black';
  const backColor = theme == 'dark' ? 'black' : 'white';

  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor={backColor}
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        // translucent={true}
      />
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,

          //...TransitionPresets.SlideFromRightIOS

          // transitionSpec: {
          //   open: config,
          //   close: closeConfig,
          // }
        }}
        initialRouteName="Navigation">
        <Stack.Screen
          name="Navigation"
          component={Navigation}
          options={{
            header: ({navigation}) => (
              <Navbar navigation={navigation} home={true} />
            ),
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            header: ({navigation}) => (
              <Navbar navigation={navigation} home={false} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
