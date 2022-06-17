import React from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, ScrollView, } from 'react-native';
import Card from './components/Card/Card';
import styles from './App.style';
import productData from './product-data.json';

function App() {
  const renderProducts = ({ item }) => <Card products={item} />
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>PATIKASTORE</Text>
      </View>
      <View style={styles.SearchContainer}>
        <TextInput style={styles.input} placeholder='Ara...' />
      </View>
      <ScrollView>
        <FlatList
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          data={productData}
          renderItem={renderProducts}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;