import { StyleSheet, Image, FlatList, View } from "react-native";

import colors from "../config/colors";

import CustomText from "./CustomText";
import ComponentSeparator from "./ComponentSeparator";

import Etherium from "../assets/icons/eth.png";

export default function UserDetail({ users }) {
  return (
    <View style={Styles.container}>
      <CustomText style={Styles.title} bold>
        Current Bid
      </CustomText>
      <FlatList
        data={users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={({ item: user }) => (
          <View style={Styles.subContainer}>
            <View>
              <View style={Styles.userContainer}>
                <Image style={Styles.userImage} source={user.image} />
                <View>
                  <CustomText style={Styles.name} medium>
                    Bid placed by {user.name}
                  </CustomText>
                  <CustomText style={Styles.date} regular>
                    {user.date}
                  </CustomText>
                </View>
              </View>
            </View>
            <View style={Styles.priceContainer}>
              <Image source={Etherium} style={Styles.etherium} />
              <CustomText bold style={Styles.price}>
                {user.price}
              </CustomText>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <ComponentSeparator height={10} />}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingTop: 15,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    top: -1,
  },
  title: {
    color: colors.primary,
    marginBottom: 7.5,
  },
  userImage: {
    width: 51,
    height: 51,
    marginRight: 7.5,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    color: colors.gray,
    fontSize: 12,
    top: 2.5,
  },
  name: {
    color: colors.primary,
    fontSize: 13.75,
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
});
