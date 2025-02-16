import type { ImageSource } from 'expo-image'
import { Image } from 'react-native'
type Props = {
  imageSize: number
  stickerSource: ImageSource
}

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  return (
    <Image
      source={stickerSource}
      style={{ width: imageSize, height: imageSize }}
    />
  )
}
