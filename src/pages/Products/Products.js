import {FlatList} from 'react-native';
import React from 'react';
import Config from 'react-native-config';
import Card from '../../components/Card/Card';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const Products = ({navigation}) => {
  const {loading, data, error} = useFetch(Config.API_URL);

  const handleProductSelect = id => {
    navigation.navigate('Detail', {id});
  };

  const renderProduct = ({item}) => (
    <Card product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return <FlatList data={data} renderItem={renderProduct} />;
};

export default Products;
