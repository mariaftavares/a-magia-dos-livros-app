import 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import BookListScreen from '../screens/BookListScreen';
import BookDetails from '../screens/BookDetails';
import Initial from '../screens/Initial'
import About from '../screens/About'


const categoryData = require('../data/category.json')

export default function Navigation({ colorScheme }) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DefaultTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return(
    <Drawer.Navigator>
      {
        categoryData.map(category => <Drawer.Screen key={category.id} name={category.name} component={BookListScreen} initialParams={{ category: category.name }}/>)
      }
    </Drawer.Navigator>
  )
}

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Initial" component={Initial} options={{ headerShown: false }}/>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }}  />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="BookDetails" component={BookDetails} options={{title: 'Detalhes do Livro'}}/>
      </Stack.Group>
    </Stack.Navigator>
  );
}
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="Sobre"
      screenOptions={{
        tabBarActiveTintColor: '#448589',
        
      }}>
      <BottomTab.Screen
        name="Sobre"
        component={About}
        options={({ navigation }) => ({
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Categorias"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
