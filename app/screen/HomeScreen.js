import { useState } from "react";
import { View, FlatList, StatusBar, StyleSheet } from "react-native";

import colors from "../config/colors";

import ComponentSeparator from "../component/ComponentSeparator";
import HeaderHome from "../component/HeaderHome";
import CustomText from "../component/CustomText";
import Card from "../component/Card";
import NavMenus from "../component/NavMenus";

import { NFTData } from "../constants/dummy";

export default function HomeScreen({ navigation }) {
  const [isRefresh, setIsRefresh] = useState(false);
  const [data, setData] = useState([...NFTData]);

  return (
    <View style={Styles.container}>
      <View style={Styles.bg} />
      <FlatList
        data={[1]}
        keyExtractor={(item) => item.toString()}
        refreshing={isRefresh}
        onRefresh={() => {
          setIsRefresh(true);
          setTimeout(() => {
            setIsRefresh(false);
            setData(NFTData);
          }, 200);
        }}
        renderItem={() => (
          <FlatList
            data={data}
            style={Styles.flatlist}
            keyExtractor={(d) => d.id}
            renderItem={({ item }) => (
              <View style={Styles.cardContainer}>
                <Card
                  key={item.id}
                  nftItem={item}
                  onPress={() => navigation.navigate("detail", item)}
                />
              </View>
            )}
            ListHeaderComponent={<HeaderHome />}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ComponentSeparator />}
          />
        )}
      />
      <NavMenus />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  bg: {
    backgroundColor: colors.primary,
    position: "absolute",
    width: "100%",
    height: "42.5%",
  },
  flatlist: {
    flex: 1,
    backgroundColor: "transparent",
    marginBottom: 100,
  },
  cardContainer: {
    marginHorizontal: 15,
  },
});
