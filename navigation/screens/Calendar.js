import * as React from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import CustomCalendar from 'react-native-calendars/src/calendar';
import { useNavigation, useFocusEffect } from '@react-navigation/native'; // Import useNavigation and useFocusEffect hooks
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome from Expo icons
// import { useNavigation } from '@react-navigation/native';


export default function CalendarScreen() {
  const navigation = useNavigation();
  const [showModal, setShowModal] = React.useState(true);
  const [showAddEventModal, setShowAddEventModal] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState('');
  const [event, setEvent] = React.useState('');

  // Reset the showModal state when the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      setShowModal(true);
      return () => setShowModal(false); // Clean up function
    }, [])
  );

  const handleAddEvent = () => {
    // Validate the selectedDate format
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!selectedDate || !dateRegex.test(selectedDate)) {
      Alert.alert('Error', 'Please enter a valid date in YYYY-MM-DD format');
      return;
    }
  
    if (!event) {
      Alert.alert('Error', 'Please enter an event');
      return;
    }
  
    // Add your logic to add the event to the calendar
    console.log('Adding event:', { date: selectedDate, event });
    setSelectedDate('');
    setEvent('');
    setShowAddEventModal(false);
  };
  

  return (
    <View style={{ flex: 1 }}>
      <Modal visible={showModal} animationType='fade' transparent={true}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ backgroundColor: 'white', borderRadius: 10, width: '85%', height: '65%', padding: 20, position: 'relative' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.05)', maxHeight: '80%' }}>
              <CustomCalendar />
              <TouchableOpacity
                onPress={() => setShowAddEventModal(true)}
                style={{
                  position: 'absolute',
                  bottom: -20,
                  right: -12,
                  backgroundColor: '#8EA7E9',
                  borderRadius: 20,
                  padding: 10,
                  width: 40,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <FontAwesome name="plus" size={20} color="white" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                setShowModal(false);
                navigation.navigate('Home'); // Navigate to 'Home' screen
              }}
              style={{
                marginTop: 40,
                backgroundColor: '#8EA7E9',
                borderRadius: 20,
                padding: 10,
                width: '60%',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: 'white', fontSize: 16 }}>Close Calendar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal for adding event */}
      <Modal visible={showAddEventModal} animationType='slide' transparent={true}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ backgroundColor: 'white', borderRadius: 10, width: '80%', padding: 20 }}>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>Enter Date:</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 5, marginBottom: 10 }}
              value={selectedDate}
              onChangeText={setSelectedDate}
              placeholder="YYYY-MM-DD"
            />
            <Text style={{ fontSize: 16, marginBottom: 10 }}>Enter Event:</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 5, marginBottom: 10 }}
              value={event}
              onChangeText={setEvent}
              placeholder="Enter event description"
            />
            <TouchableOpacity
              onPress={handleAddEvent}
              style={{
                backgroundColor: '#8EA7E9',
                borderRadius: 20,
                padding: 10,
                width: '60%',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: 'white', fontSize: 16 }}>Add Event</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowAddEventModal(false)}
              style={{
                marginTop: 10,
                backgroundColor: '#ccc',
                borderRadius: 20,
                padding: 10,
                width: '60%',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: 'black', fontSize: 16 }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}