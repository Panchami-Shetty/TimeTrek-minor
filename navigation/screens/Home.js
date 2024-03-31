import * as React from 'react'; 
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigate = useNavigation(); 

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/smallPic.png')}
        style={styles.smallPicture}
      />
      <Text style={styles.text}>Press + to generate personalized schedule</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => navigate.navigate('Questions')}>
        <View style={styles.calendarContainer}>
          <Ionicons name="calendar" size={45} color="#0766ad" />
        </View>
        <View style={styles.plusContainer}>
          <View style={styles.smallCircle}></View>
          <Text style={styles.addButtonText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallPicture: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  addButton: {
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
  calendarContainer: {
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusContainer: {
    position: 'absolute',
    bottom: 4,
    right: 2,
    backgroundColor: 'white',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallCircle: {
    position: 'absolute',
    backgroundColor: "#0766ad",
    width: 15,
    height: 15,
    borderRadius: 7,
  },
  addButtonText: {
    color: 'white',
    fontSize: 15,
  },
});

export default HomeScreen;

