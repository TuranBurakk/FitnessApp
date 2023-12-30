import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function MemberResult({route}) {
  const [user] = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Üye adı: {user.userName}</Text>
      <Text style={styles.label}>Üye soyadı: {user.userSurname}</Text>
      <Text style={styles.label}>Üye yaşı: {user.userAge}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'center',
    color: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MemberResult;
