import {
  View,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

import colors from "../config/colors";
import CustomText from "../component/CustomText";

import Logo from "../assets/images/logo.png";
import UserImage from "../assets/images/person01.png";
import Badge from "../assets/icons/badge.png";
import Search from "../assets/icons/search.png";

export default function HeaderHome() {
  return (
    <View style={Styles.container}>
      <View style={Styles.body}>
        <View style={Styles.titleHeader}>
          <View>
            <Image style={Styles.logo} source={Logo} />
          </View>
          <View style={Styles.userImageContainer}>
            <Image
              style={Styles.userImage}
              source={UserImage}
              resizeMode="cover"
            />
            <Image style={Styles.badge} source={Badge} />
          </View>
        </View>
        <View style={Styles.subHeader}>
          <CustomText style={Styles.name} regular>
            Hello, Victoria 👋
          </CustomText>
          <CustomText style={Styles.subTitle} bold>
            Let's Find Masterpiece Art
          </CustomText>
        </View>
        <TouchableOpacity style={Styles.search}>
          <Image source={Search} style={Styles.searchIcon} />
          <CustomText style={Styles.searchText} regular>
            Search NFTs
          </CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    top: 15,
    marginBottom: 25,
    paddingHorizontal: 15,
  },
  name: {
    color: colors.gray,
    marginBottom: 5,
    fontSize: 14,
  },
  subTitle: {
    color: colors.white,
    fontSize: 18,
  },
  titleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    width: 88,
    height: 25,
    top: 2.5,
  },
  userImageContainer: {
    width: 40,
    height: 40,
    top: -5,
  },
  userImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  badge: {
    width: 15,
    height: 15,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  subHeader: {
    marginBottom: 25,
    marginTop: 25,
  },
  search: {
    width: "100%",
    paddingVertical: 14,
    backgroundColor: "rgba(255,255,255, 0.2)",
    borderRadius: 13,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchText: {
    color: "rgba(255,255,255, 0.55)",
    width: "100%",
    fontSize: 14,
  },
});
