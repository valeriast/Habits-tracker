import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {
  useFonts, 
  Inter_400Regular, 
  Inter_600SemiBold, 
  Inter_700Bold,
  Inter_800ExtraBold } from '@expo-google-fonts/inter'
import { Loading } from './src/assets/components/loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_600SemiBold, 
    Inter_700Bold,
    Inter_800ExtraBold 
  })
  
  if (!fontsLoaded){
    return ( <Loading/>)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Open up App.tsx to start working on your app!</Text>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'white'
  }
});
