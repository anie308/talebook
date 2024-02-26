import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/dev";
import Route from "@/navigation";
import { Provider } from "react-redux";
import { store } from "@/services/store";
import { Toasts } from "@backpackapp-io/react-native-toast";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    regular: Roboto_400Regular,
    medium: Roboto_500Medium,
    bold: Roboto_700Bold,
    black: Roboto_900Black,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Route />
          <Toasts />
        </GestureHandlerRootView>
      </Provider>
    </SafeAreaProvider>
  );
}


