import { SafeAreaView, StyleSheet, Text, ActivityIndicator, View } from 'react-native';
import { Calendar } from './components/calendar/calendar';
import { useDesignFonts } from './hooks/use-design-fonts';

export default function App() {
  const { areFontsBeingLoaded } = useDesignFonts();

  if (areFontsBeingLoaded) {
    return <ActivityIndicator/>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.insideContainer}>
        <Text style={styles.header}>Calendar</Text>
        <Calendar/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030303'
  },
  insideContainer: {
    width: '100%',
    flex: 1,
    gap: 16,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 16,
  },
  header: {
    fontSize: 32,
    color: '#FFF',
    fontFamily: 'Poppins-SemiBold',
  }
});
