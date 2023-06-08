import { StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

export default function App() {
  return (
    <WebView
        source={{
          uri: 'https://pumped.vercel.app',
        }}
        style={{ marginTop: 30 }} 
        javaScriptEnabled={true}
        domStorageEnabled={true}
        sharedCookiesEnabled={true}
        originWhitelist={["*"]}
        scalesPageToFit={true}
        startInLoadingState={true}
        mixedContentMode={"always"}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={true}
        allowsBackForwardNavigationGestures={true}
        allowsLinkPreview={false}
        renderLoading={() => <></>}
    />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
