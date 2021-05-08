import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { ProductCard, SearchInput } from '../components';

import productImg from  '../assets/produto.png';
import { theme } from '../styles';

const products = [

    {
        id: 1,
        imgUrl: productImg,
        name: "Computador Desktop",
        price: 2279.0,
    },

    {
        id: 2,
        imgUrl: productImg,
        name: "Laptop",
        price: 2275.0,

    },

    {
        id: 3,
        imgUrl: productImg,
        name: "Laptop Intel",
        price: 2272.0,

    },

    {
        id: 4,
        imgUrl: productImg,
        name: "Laptop AMD",
        price: 2273.0,

    },

    {
        id: 5,
        imgUrl: productImg,
        name: "Laptop AMD Intel",
        price: 2271.0,

    }

];

const Catalog: React.FC = () => {

    const [search, setSearch] = useState("");

    const data = search.length > 0 ? products.filter(product => product.name.toLocaleLowerCase().includes(search.toLowerCase())) : products;

    return (

        <ScrollView contentContainerStyle={theme.scrollContainer}>

            <SearchInput placeholder="Nome do produto" search={search} setSearch={setSearch} />

            {data.map((product) => (

                <ProductCard { ... product} />

            ))}

        </ScrollView>

    );

}

export default Catalog;