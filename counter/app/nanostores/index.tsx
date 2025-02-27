import { useStore } from '@nanostores/react'
import { Button, Text, View } from 'react-native'
import { counter, decrement, increment, reset } from '../../logic/counter'

export default function NanostoresIndex() {
  const count = useStore(counter)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Text>You have pressed the button this many times:</Text>
        <Text>{count}</Text>
      </View>
      <View style={{ gap: 10 }}>
        <Button title="Increment" onPress={increment} />
        <Button title="Decrement" onPress={decrement} />
        <Button title="Reset" onPress={reset} />
      </View>
    </View>
  )
}
