import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ApiCallingWithFeatch from './src/Container/FeatchApi/GetApi/ApiCallingWithFeatch';
import FeatchAPIWithMap from './src/Container/FeatchApi/GetApi/FeatchAPIWithMap';
import UserDetails from './src/Container/FeatchApi/GetApi/UserDetails';
import FeatchDataWithFlatList from './src/Container/FeatchApi/GetApi/FeatchDataWithFlatList';
import PostDataWithTextInput from './src/Container/FeatchApi/PostApi/PostDataWithTextInput';
import ApiCallPromise from './src/Container/FeatchPromise/ApiCallPromise';
import AxiousApiCalling from './src/Container/AxiousApi/AxiousApiCalling';
import Home from './src/Container/Home';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        name="AppStart"
        initialRouteName="PostDataWithTextInput"

        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="ApiCallingWithFeatch" component={ApiCallingWithFeatch} />
        <Stack.Screen name="FeatchAPIWithMap" component={FeatchAPIWithMap} />
        <Stack.Screen name="UserDetails" component={UserDetails} />
        <Stack.Screen name="FeatchDataWithFlatList" component={FeatchDataWithFlatList} />
        <Stack.Screen name="PostDataWithTextInput" component={PostDataWithTextInput} />
        <Stack.Screen name='ApiCallPromise' component={ApiCallPromise} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='AxiousApiCalling' component={AxiousApiCalling} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
