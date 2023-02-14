import { NavigationContainer } from '@react-navigation/native';
import Home from './Components/Home';
import UserDetails from './Components/UserDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home} />
        <Stack.Screen
          name="User Details"
          component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
