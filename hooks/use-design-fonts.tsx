import { useFonts } from 'expo-font';

type UseDesignFontsReturnValue = {
  areFontsBeingLoaded: boolean;
}

export function useDesignFonts(): UseDesignFontsReturnValue {
  const [fontsLoaded, fontError] = useFonts({
    // I decided against moving out `../assets/fonts` into a variable
    // as it would just obscure the file paths without adding much benefit
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-ExtraLight': require('../assets/fonts/Poppins-ExtraLight.ttf'),
  });

  if (!fontsLoaded && fontError) {
    console.error('Fonts could not have been loaded because of an error', fontError);
  }

  return { areFontsBeingLoaded: !fontsLoaded };
}
