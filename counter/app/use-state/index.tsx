import { useState } from 'react'
import { Button, Text, View } from 'react-native'

export default function UseStateIndex() {
  const [count, setCount] = useState(0)
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
        <Button title="Increment" onPress={() => setCount(count + 1)} />
        <Button title="Decrement" onPress={() => setCount(count - 1)} />
        <Button title="Reset" onPress={() => setCount(0)} />
      </View>
    </View>
  )
}
