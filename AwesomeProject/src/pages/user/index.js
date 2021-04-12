import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Card from './card.js';
import Axios from 'axios';

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
   Axios.get('https://jsonplaceholder.typicode.com/users').then(res =>
     setUsers(res.data),
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {users.map(item => (
          <Card style = {styles.card}
            key={item.id}
            name ={item.name}
            username={item.username}
            email={item.email}
            adressSuite= {item.address.suite}
            adressStreet= {item.address.street}
            addressCity={item.address.city}
            adressZipCode= {item.address.zipcode}
            phone= {item.phone}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
  }, 
  
});