import { Link } from 'expo-router'
import { Button, View } from 'react-native'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{ gap: 10 }}>
        <Link href={{ pathname: '/use-state' }} asChild>
          <Button title="use-state" />
        </Link>
        <Link href={{ pathname: '/use-context' }} asChild>
          <Button title="use-context" />
        </Link>
        <Link href={{ pathname: '/nanostores' }} asChild>
          <Button title="nanostores" />
        </Link>
      </View>
    </View>
  )
}
