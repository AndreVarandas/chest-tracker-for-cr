import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ChestsScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Text>Hello from the chests screen</Text>
    </SafeAreaView>
  )
}
