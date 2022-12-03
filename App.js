import React from 'react';

//uti;ity components
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//paths
import * as routes from './constants/routes';


//screens
import { OnBoarding, GetStarted, Signup, Login } from './app/screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name={routes.onboarding}
          component={OnBoarding}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name={routes.getStarted}
          component={GetStarted}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name={routes.signup}
          component={Signup}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name={routes.login}
          component={Login}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
