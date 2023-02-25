import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import EditEntries from "./screens/EditEntries";
import AddEntries from "./screens/AddEntries";
import { headerStyle } from "./helper";

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerStyle}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Add" component={AddEntries} options={{headerTitle: 'Add Entries'}}/>
        <Stack.Screen name="EditEntries" component={EditEntries} options={{headerTitle:'Edit Entries'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
