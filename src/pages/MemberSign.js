import React, {useState} from 'react';
import {SafeAreaView, Alert, StyleSheet, View} from 'react-native';
import Input from '../component/Input';
import Button from '../component/Button';

function MemberSign({navigation}) {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);

  function handleSubmit() {
    if (!userName || !userSurname || !userAge) {
      Alert.alert('Fitness App', 'Bilgileri tam doldurunuz...');
    }
    const user = {
      userName,
      userSurname,
      userAge,
    };
    navigation.navigate('MemberResultScreen', [user]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Input
        label="üye adı"
        placeholder="Üye ismini giriniz..."
        onChangeText={text =>
          setUserName(text.replace(/^(.)|\s(.)/g, c => c.toUpperCase()))
        }
        capitalize="words"
      />
      <Input
        label="üye soyadı"
        placeholder="Üye soyadını giriniz..."
        onChangeText={setUserSurname}
      />
      <Input
        label="üye yaşı"
        placeholder="Üye yaşını giriniz..."
        onChangeText={setUserAge}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <Button text="Kaydı Tamamla" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  buttonContainer: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MemberSign;
