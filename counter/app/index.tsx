import { useStore } from '@nanostores/react'
import { Button, Text, View } from 'react-native'
import { counter, decrement, increment, reset } from '../logic/counter'

export default function Index() {
  const count = useStore(counter)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Hello World</Text>
      <Text>{counter.get()}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
      <Button title="Reset" onPress={reset} />
    </View>
  )
}
