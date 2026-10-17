import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function App() {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  const coreCourses = [
    'CS 504 Software Engineering',
    'CS 506 Programming for Computing',
    'CS 519 Cloud Computing Overview',
    'CS 533 Computer Architecture',
    'CS 547 Secure Systems and Programs',
    'CS 622 Discrete Math and Algorithms for Computing',
    'DS 510 Artificial Intelligence for Data Science',
    'DS 620 Machine Learning & Deep Learning',
  ];

  const depthCourses = [
    'CS 624 Full-Stack Development - Mobile App',
    'CS 628 Full-Stack Development - Web App',
  ];

  const capstoneCourses = [
    'CS 687 Computer Science Capstone',
  ];

  const openCatalog = () => {
    Linking.openURL('https://cityu.smartcatalogiq.com/2022-2023/ay-2022-2023-catalog/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* App Icon */}
        <Image
          source={require('@/assets/images/icon.png')}
          style={styles.icon}
          resizeMode="contain"
        />

        {/* Favorite Course Input */}
        <Text style={styles.label}>Which course did you like?</Text>
        <TextInput
          style={styles.input}
          placeholder="ex. CS624"
          placeholderTextColor="#888"
          value={favoriteCourse}
          onChangeText={setFavoriteCourse}
        />
        {favoriteCourse ? (
          <Text style={styles.favoriteDisplay}>Your favorite: {favoriteCourse}</Text>
        ) : null}

        {/* Core Requirements Section */}
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeaderText}>Core Requirements (24 credits)</Text>
        </View>
        {coreCourses.map((course, index) => (
          <Text key={index} style={styles.courseItem}>
            {course}
          </Text>
        ))}

        {/* Depth of Study Section */}
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeaderText}>Depth of Study (6 Credits)</Text>
        </View>
        {depthCourses.map((course, index) => (
          <Text key={index} style={styles.courseItem}>
            {course}
          </Text>
        ))}

        {/* Capstone Section */}
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeaderText}>Capstone (3 Credits)</Text>
        </View>
        {capstoneCourses.map((course, index) => (
          <Text key={index} style={styles.courseItem}>
            {course}
          </Text>
        ))}

        {/* CityU Catalog Link Button */}
        <TouchableOpacity style={styles.button} onPress={openCatalog}>
          <Text style={styles.buttonText}>Access CityU Catalog</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 16,
  },
  icon: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 4,
    marginBottom: 8,
    fontSize: 16,
  },
  favoriteDisplay: {
    fontSize: 14,
    color: '#0066cc',
    marginBottom: 16,
    fontStyle: 'italic',
  },
  sectionHeaderContainer: {
    backgroundColor: '#ffff00',
    paddingVertical: 6,
    paddingHorizontal: 8,
    marginTop: 16,
    marginBottom: 8,
  },
  sectionHeaderText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  courseItem: {
    fontSize: 16,
    paddingVertical: 4,
    color: '#333',
  },
  button: {
    backgroundColor: '#003366',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 32,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
