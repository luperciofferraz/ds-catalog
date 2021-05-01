import React from 'react';
import { Home, Catalog } from '../pages';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Routes: React.FC = () => {

    return (
        
        <Stack.Navigator>

            <Stack.Screen 
                name="Home" 
                component={Home} 
                options = {{headerShown: false}}
            />
            <Stack.Screen 
                name="Catalog" 
                component={Catalog} 
                options = {{headerShown: true}}
            />

        </Stack.Navigator>
    );

}

export default Routes;