import { SafeAreaView, StyleSheet, Text, ActivityIndicator  } from 'react-native';
import { Calendar } from './components/calendar';
import { useDesignFonts } from './components/use-design-fonts';

// TODO: add overmind

export default function App() {
  const { areFontsBeingLoaded } = useDesignFonts();

  if (areFontsBeingLoaded) {
    return <ActivityIndicator />
  }

  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Calendar</Text>
        <Calendar/>
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
