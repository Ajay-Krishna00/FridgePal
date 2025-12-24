import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import store from "./store/store";
import { Provider } from 'react-redux';
import { SafeAreaView,SafeAreaProvider } from 'react-native-safe-area-context';
import UniversalNavi from "./Navigation/Universal";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
          <StatusBar barStyle="dark-content" />
          {/* <View style={styles.card}>
            <Text style={styles.title}> FridgePal</Text>
          </View> */}
          <UniversalNavi/>
      </SafeAreaProvider>
    </Provider>
  );
}

