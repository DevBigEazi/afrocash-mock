import { View, Text, Image, FlatList } from "react-native";
import { icons } from "../constants";
import CustomButton from "./CustomButton";
import BalanceCards from "./BalanceCards";

const BalanceLists = () => {
  return (
    <FlatList
      className="w-full mt-8 mx-5"
      data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <BalanceCards />}
      horizontal
    />
  );
};

export default BalanceLists;
