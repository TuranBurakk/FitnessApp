import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

import Button from '../component/Button/Button';

function Welcome({navigation}) {
  function goToMemberSign(params) {
    navigation.navigate('MemberSignScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome</Text>
      <Button text="Üye kaydı oluştur" onPress={goToMemberSign} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default Welcome;
