import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

import colors from "../config/colors";
import CustomText from "../component/CustomText";

import LoveIcon from "../assets/icons/heart.png";
import Etherium from "../assets/icons/eth.png";

export default function Card({ nftItem, onPress }) {
  return (
    <View style={Styles.container}>
      <View style={Styles.topButton}>
        <TouchableOpacity style={Styles.topHeader}>
          <Image source={LoveIcon} style={Styles.loveImage} />
        </TouchableOpacity>
      </View>
      <Image source={nftItem.image} style={Styles.bgImage} resizeMode="cover" />
      <View style={Styles.bottomContainer}>
        <View style={Styles.bottomTop}>
          <View style={Styles.userProfiles}>
            {nftItem.bids?.map((b, index) => (
              <Image
                source={b.image}
                style={{
                  ...Styles.userPerson,
                  marginLeft: index === 0 ? 0 : -10,
                }}
                key={index}
              />
            ))}
          </View>
          <View style={Styles.leftBox}>
            <CustomText style={Styles.leftBoxTitle} regular>
              Ending in
            </CustomText>
            <CustomText bold style={Styles.leftBoxSubtitle}>
              12h 30m
            </CustomText>
          </View>
        </View>
        <View style={Styles.textContainer}>
          <CustomText style={Styles.title} bold>
            {nftItem.name}
          </CustomText>
          <CustomText style={Styles.subTitle} regular>
            by {nftItem.creator}
          </CustomText>
        </View>
        <View style={Styles.bottomContainerSection}>
          <View style={Styles.priceContainer}>
            <Image source={Etherium} style={Styles.etherium} />
            <CustomText bold style={Styles.price}>
              {nftItem.price}
            </CustomText>
          </View>

          <TouchableOpacity style={Styles.btn} onPress={onPress}>
            <CustomText style={Styles.btnText} bold>
              Place a bid
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    overflow: "hidden",
    elevation: 4,
  },
  topHeader: {
    backgroundColor: colors.white,
    width: 30,
    height: 30,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 1,
    top: 15,
    right: 15,
  },
  loveImage: {
    width: "70%",
    height: "70%",
  },
  topButton: {
    width: "100%",
    alignItems: "flex-end",
  },
  bgImage: {
    width: "100%",
    height: 225,
  },
  bottomContainer: {
    width: "100%",
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  userPerson: {
    width: 37.5,
    height: 37.5,
  },
  userProfiles: {
    flexDirection: "row",
  },
  bottomTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    top: -21,
  },
  leftBox: {
    backgroundColor: colors.white,
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    elevation: 3,
    alignItems: "center",
  },
  leftBoxTitle: {
    color: colors.gray,
    fontSize: 12,
  },
  leftBoxSubtitle: {
    color: colors.primary,
    fontSize: 15,
  },
  title: {
    color: colors.primary,
    fontSize: 17,
  },
  textContainer: {
    top: -30,
  },
  subTitle: {
    color: colors.gray,
    fontSize: 13,
  },
  bottomContainerSection: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
    marginTop: -15,
  },
  price: {
    fontSize: 12.5,
    marginLeft: 3,
    top: -1,
  },
  priceContainer: {
    flexDirection: "row",
    top: 3,
  },
  etherium: {
    width: 19,
    height: 19,
  },
  btn: {
    backgroundColor: colors.primary,
    color: colors.white,
    borderRadius: 25,
    justifyContent: "center",
    paddingHorizontal: 17.5,
    paddingVertical: 9,
    top: -2.5,
  },
  btnText: {
    color: colors.white,
    fontSize: 13,
  },
});
