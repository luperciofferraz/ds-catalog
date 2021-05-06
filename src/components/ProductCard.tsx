import React from 'react';
import { View, Text, ImageSourcePropType, TouchableOpacity, Image } from 'react-native';

interface ProductProps  {

    id: Number;
    name: String;
    imgUrl: ImageSourcePropType;
    price: Number;
}

const ProductCard: React.FC<ProductProps> = ({ id, name, imgUrl, price}) => {

    return (

        <TouchableOpacity>

            <Image source={imgUrl} />

            <View>
                <Text>{name}</Text>

                <View>
                    <Text>R$</Text>
                    <Text>{price}</Text>
                </View>
            </View>
            

        </TouchableOpacity>
    );

}

export default ProductCard;