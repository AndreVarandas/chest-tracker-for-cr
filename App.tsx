import { locale } from 'expo-localization'
import { StatusBar } from 'expo-status-bar'
import { I18n } from 'i18n-js'
import { StyleSheet, Text, View } from 'react-native'

import en from './i18n/en.json'
import pt from './i18n/pt.json'

const translations = { en, pt }
const i18n = new I18n(translations, { locale, enableFallback: true })

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{i18n.t('register.intro')}</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
