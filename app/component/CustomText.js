import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Inter_300Light,
} from "@expo-google-fonts/inter";

const CustomText = ({ children, light, bold, style }) => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Inter_300Light,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <Text
        style={{
          fontFamily: light ? "Inter_300Light" : bold ? "Inter_700Bold" : "",
          ...style,
        }}
      >
        {children}
      </Text>
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({});
