import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import WelcomeScreen from "../screens/welcomescreen";

const Routes=()=>{
    const Stack = createNativeStackNavigator();

    return (


        <NavigationContainer>
<Stack.Navigator  initialRouteName="WelcomeScreen">

<Stack.Group 
// screenOptions={{headerShown: false}}
>
          <Stack.Screen 
          name="WelcomeScreen">
            {props => <WelcomeScreen {...props} />}
          </Stack.Screen>
        </Stack.Group>





</Stack.Navigator>

        </NavigationContainer>

    )

}
export default Routes;

