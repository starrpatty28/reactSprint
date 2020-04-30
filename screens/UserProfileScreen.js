import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserProfileScreen = props => {
  return (
    <View style={styles.container}>
    <Text>Yassss User!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export default UserProfileScreen;