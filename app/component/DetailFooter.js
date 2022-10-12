import { useState } from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";
import CustomText from "../component/CustomText";

export default function DetailFooter({ text }) {
  const [show, setShow] = useState(false);

  return (
    <View style={Styles.container}>
      <CustomText bold style={Styles.title}>
        Description
      </CustomText>
      <CustomText
        style={Styles.text}
        numberOfLines={show ? 25 : 3}
        regular
        onPress={() => setShow((show) => (show ? false : true))}
      >
        {text}
      </CustomText>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    marginTop: -5,
  },
  title: {
    color: colors.primary,
  },
  text: {
    color: colors.gray,
    top: 3.5,
    lineHeight: 20,
  },
});
