import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Calendar } from './components/calendar';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-ExtraLight': require('./assets/fonts/Poppins-ExtraLight.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Calendar</Text>
      <Calendar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030303',
    alignItems: 'flex-start',
    justifyContent: 'center',
    // this weird number comes from Figma, where the "Left" value was exactly 23.5px
    padding: 23.5,

    // the exact value was not available in Figma - normally I would ask the designer about it
    gap: 15
  },
  header: {
    fontSize: 32,
    color: '#FFF',
    fontFamily: 'Poppins-SemiBold',
  }
});
