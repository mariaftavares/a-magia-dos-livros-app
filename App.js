import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
import { useFonts,Lustria_400Regular } from '@expo-google-fonts/lustria';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Lustria-Regular': Lustria_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation/>
        <StatusBar/>
      </SafeAreaProvider>
    );
  }
}
