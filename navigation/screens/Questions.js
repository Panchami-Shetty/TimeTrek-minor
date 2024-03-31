import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TimeTable from './TimeTable';// Import your TimeTable component

export default function QuestionScreen() {
  const [classHours, setClassHours] = useState('');
  const [travelHours, setTravelHours] = useState('');
  const [studyHours, setStudyHours] = useState('');
  const [preferredSubjects, setPreferredSubjects] = useState('');
  const [totalVotes, setTotalVotes] = useState(0);
  const [subjectVotes, setSubjectVotes] = useState({});

  const navigation = useNavigation();

  const handleSubmit = () => {
    const total = parseInt(classHours) + parseInt(travelHours) + parseInt(studyHours);
    setTotalVotes(total);

    const subjectsArray = preferredSubjects.split('\n').map(subject => subject.trim());
    const votes = {};
    subjectsArray.forEach(subject => {
      if (subject !== '') {
        votes[subject] = 0;
      }
    });
    setSubjectVotes(votes);

    // Navigate to the TimeTable component
    navigation.navigate('TimeTable');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Let's Study Smart</Text>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>How many hours do you plan to spend in classes per day?</Text>
        <TextInput
          style={styles.input}
          value={classHours}
          onChangeText={text => setClassHours(text)}
          placeholder="Enter hours"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>How many hours do you spend traveling per day?</Text>
        <TextInput
          style={styles.input}
          value={travelHours}
          onChangeText={text => setTravelHours(text)}
          placeholder="Enter hours"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>How many hours do you prefer to study per day?</Text>
        <TextInput
          style={styles.input}
          value={studyHours}
          onChangeText={text => setStudyHours(text)}
          placeholder="Enter hours"
          keyboardType="numeric"
        />
      </View>
      <Text style={styles.title}>Prioritize your Subjects!</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={preferredSubjects}
        onChangeText={text => setPreferredSubjects(text)}
        placeholder="Enter preferred subjects (one per line)"
        multiline
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: '14%',
    textAlign: 'center',
    color: '#333',
  },
  questionContainer: {
    marginBottom: '3%',
    width: '100%',
  },
  question: {
    fontSize: 16,
    marginBottom: '2%',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: '3%',
    width: '100%',
    marginBottom: '4%',
    color: '#333',
  },
  textArea: {
    height: 150,
  },
  submitButton: {
    backgroundColor: '#0766ad',
    padding: '3%',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: '4%',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
