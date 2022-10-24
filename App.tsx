import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'
import { locale } from 'expo-localization'
import { StatusBar } from 'expo-status-bar'
import { I18n } from 'i18n-js'
import { ActivityIndicator } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import en from './i18n/en.json'
import pt from './i18n/pt.json'
import ChestsScreen from './screens/ChestsScreen'
import HomeScreen from './screens/HomeScreen'

const translations = { en, pt }
const i18n = new I18n(translations, { locale, enableFallback: true })

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
}

const stackNavigatorOptions = {
  headerShown: false,
}

const Stack = createNativeStackNavigator()

const root = (
  <SafeAreaProvider>
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator screenOptions={stackNavigatorOptions}>
        <Stack.Screen name="Register" component={HomeScreen} />
        <Stack.Screen name="Chests" component={ChestsScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  </SafeAreaProvider>
)

export default function App() {
  const [fontsLoaded] = useFonts({
    'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'supercell-magic': require('./assets/fonts/supercell-magic.ttf'),
  })

  return fontsLoaded ? root : <ActivityIndicator size="large" />
}
