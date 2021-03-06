import React, { useState, useEffect } from "react";
import {
  ImageSourcePropType,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { ProductCard, SearchInput } from "../components";
import productImg from "../assets/produto.png";
import { theme } from "../styles";
import { api } from "../services";

interface CatalogProps {
  id: Number;
  imgUrl: ImageSourcePropType;
  name: String;
  price: Number;
}

const Catalog: React.FC<CatalogProps> = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fillProducts() {
    setLoading(true);
    const res = await api.get(
      `/products?page=0&linesPerPage=12&direction=ASC&orderBy=name`
    );
    setProducts(res.data.content);
    setLoading(false);
  }

  useEffect(() => {
    fillProducts();
  }, []);

  const data =
    search.length > 0
      ? products.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        )
      : products;

  return (
    <ScrollView contentContainerStyle={theme.scrollContainer}>
      <SearchInput
        placeholder="Nome do produto"
        search={search}
        setSearch={setSearch}
      />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        data.map((product) => <ProductCard key={product.id} {...product} />)
      )}
    </ScrollView>
  );
};

export default Catalog;
