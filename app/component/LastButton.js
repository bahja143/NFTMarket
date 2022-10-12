import { StyleSheet, TouchableOpacity, View } from "react-native";

import colors from "../config/colors";
import CustomText from "./CustomText";

export default function LastButton() {
  return (
    <View style={Styles.main}>
      <View style={Styles.container}>
        <TouchableOpacity
          style={Styles.btn}
          onPress={() => console.log("Place order")}
        >
          <CustomText style={Styles.btnText} bold>
            Place a bid
          </CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  main: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
  container: {
    backgroundColor: colors.primary,
    borderRadius: 75,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  btn: {
    backgroundColor: colors.primary,
    color: colors.white,
    borderRadius: 25,
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 7.5,
    elevation: 55,
  },
  btnText: {
    color: colors.white,
    fontSize: 13,
  },
});
