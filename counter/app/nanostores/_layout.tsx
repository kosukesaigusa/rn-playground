import { Stack } from 'expo-router'

export default function NanostoresLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
}
