import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import colors from "../config/colors";
import { AntDesign } from "@expo/vector-icons";

const icon = ["home", "shoppingcart", "linechart", "hearto"];
export default function NavMenus() {
  const [selected, setSelected] = useState();

  return (
    <View style={Styles.main}>
      <View style={Styles.container}>
        {icon.map((icon) => (
          <TouchableOpacity
            style={Styles.btn}
            key={icon}
            onPress={() => setSelected(icon)}
          >
            <AntDesign
              name={icon}
              size={icon === selected ? 30 : 28}
              color={selected === icon ? colors.white : colors.gray}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  main: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
  },
  container: {
    backgroundColor: colors.primary,
    borderRadius: 75,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 19,
    paddingHorizontal: 12.5,
  },
  btn: {
    marginHorizontal: 12.5,
  },
});
