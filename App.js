import { useRef } from 'react'
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const webviewRef = useRef(null)
  return (
      <WebView
        ref={webviewRef}
        source={{
          uri: 'https://pumped.vercel.app',
        }}
        style={{marginTop: 45}} 
        javaScriptEnabled
        pullToRefreshEnabled
        decelerationRate={'normal'}
        domStorageEnabled
        sharedCookiesEnabled
        originWhitelist={["*"]}
        scalesPageToFit
        startInLoadingState
        mixedContentMode={"always"}
        allowsInlineMediaPlayback
        allowsFullscreenVideo
        allowsBackForwardNavigationGestures
        allowsLinkPreview={false}
        renderLoading={() => <></>}
        onMessage={msg => console.log(msg)}
      />

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
