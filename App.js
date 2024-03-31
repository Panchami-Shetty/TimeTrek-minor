import * as React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'; // Import createStackNavigator
import { DrawerContent } from './navigation/screens/DrawerNavigator';
import BottomTabNavigator from './navigation/screens/BottomTabNavigator';
import HomeScreen from './navigation/screens/Home'; // Import HomeScreen
import QuestionsScreen from './navigation/screens/Questions'; // Import QuestionsScreen

// Import other screens
import ProfileScreen from './navigation/screens/Profile';
import Notifications from './navigation/screens/Notifications';
import RateAppScreen from './navigation/screens/RateApp';
import TimeTable from './navigation/screens/TimeTable';

const Drawer = createDrawerNavigator(); // Create Drawer Navigator
const Stack = createStackNavigator(); // Create Stack Navigator

// Define a stack for screens related to Home navigation
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={BottomTabNavigator} options={{ headerShown: false }} />
      <HomeStack.Screen name="Questions" component={QuestionsScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="TimeTable" component={TimeTable} options={{ headerShown: false }} />

    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen  name=" " component={HomeStackScreen}/>
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Notifications" component={Notifications} />
        <Drawer.Screen name="RateApp" component={RateAppScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
