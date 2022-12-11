import React from 'react';

//navigation components
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//icons
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

//colors
import * as colors from './constants/colors';

//paths
import * as routes from './constants/routes';


//screens
import { 
  OnBoarding, 
  GetStarted, 
  Signup, 
  Login, 
  AddressSetup, 
  PaymentSetup, 
  Home,
  Search,
  Cart,
  Saved,
  Profile
} from './app/screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

  const authContainer = (
    <Stack.Navigator>
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
        <Stack.Screen
          name={routes.addressSetup}
          component={AddressSetup}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name={routes.paymentSetup}
          component={PaymentSetup}
          options={{
            headerShown: false
          }}
        />
    </Stack.Navigator>
  );

  const mainContainer = (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.orangeText
      }}
    >
      <Tab.Screen
        name={routes.home}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FeatherIcon name='home' color={color} size={22} />
          )
        }}
      />
      <Tab.Screen
        name={routes.search}
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FeatherIcon name='search' color={color} size={22} />
          )
        }}
      />
      <Tab.Screen
        name={routes.cart}
        component={Cart}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-cart-outline' color={color} size={22} />
          )
        }}
      />
      <Tab.Screen
        name={routes.saved}
        component={Saved}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='heart-outline' color={color} size={22} />
          )
        }}
      />
      <Tab.Screen
        name={routes.profile}
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='user' color={color} size={22} />
          )
        }}
      />
    </Tab.Navigator>
  )
  return (
    <NavigationContainer>
      {mainContainer}
    </NavigationContainer>
  );
};

export default App;
