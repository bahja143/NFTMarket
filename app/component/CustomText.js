import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Inter_300Light,
} from "@expo-google-fonts/inter";

const CustomText = ({
  children,
  light,
  bold,
  regular,
  medium,
  style,
  ...props
}) => {
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
        {...props}
        style={{
          fontFamily: light
            ? "Inter_300Light"
            : bold
            ? "Inter_700Bold"
            : regular
            ? "Inter_400Regular"
            : medium
            ? "Inter_500Medium"
            : "",
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
