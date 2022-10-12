import { StatusBar } from "react-native";

import colors from "./app/config/colors";

import AppNav from "./app/navigation/AppNav";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.primary} />
      <AppNav />
    </>
  );
}
