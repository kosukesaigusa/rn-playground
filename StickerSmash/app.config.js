const IS_DEV = process.env.APP_VARIANT === 'development'

const IS_PREVIEW = process.env.APP_VARIANT === 'preview'

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.kosukesaigusa.StickerSmash.dev'
  }
  if (IS_PREVIEW) {
    return 'com.kosukesaigusa.StickerSmash.preview'
  }
  return 'com.kosukesaigusa.StickerSmash'
}

const getAppName = () => {
  if (IS_DEV) {
    return 'StickerSmash (Dev)'
  }
  if (IS_PREVIEW) {
    return 'StickerSmash (Preview)'
  }
  return 'StickerSmash'
}

export default {
  expo: {
    name: getAppName(),
    slug: 'StickerSmash',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'myapp',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: getUniqueIdentifier(),
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: getUniqueIdentifier(),
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png',
    },
    plugins: [
      'expo-router',
      [
        'expo-splash-screen',
        {
          image: './assets/images/icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#ffffff',
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: '1a14e4d1-00d8-4161-8cd3-d99da4441571',
      },
    },
    owner: 'kosukesaigusa',
  },
}
