import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


const Home: React.FC = ( { navigation } ) => {

    return (

        <View>

            <Text>Home Page</Text>
            
            <TouchableOpacity
            
                onPress={() => navigation.navigate("Catalog")}
            >

                <Text>Clique Aqui</Text>

            </TouchableOpacity>
        </View>

    );

}

export default Home;