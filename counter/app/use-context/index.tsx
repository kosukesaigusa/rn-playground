import { createContext, useContext, useState } from 'react'
import { Button, Text, View } from 'react-native'

export default function UseContextIndex() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  )
}

const CounterContext = createContext({
  count: 0,
  increment: () => {},
  decrement: () => {},
  reset: () => {},
})

const CounterProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  )
}

const Counter = () => {
  const { count, increment, decrement, reset } = useContext(CounterContext)
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
