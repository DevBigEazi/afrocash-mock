import { View, Text, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import CustomButton from "../../components/CustomButton";
import BalanceLists from "../../components/BalanceLists";
import BalanceCards from "../../components/BalanceCards";

const Home = () => {
  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <View className="pt-2 px-6 bg-white border-b-2 border-gray-400">
              <View className="w-full space-y-10">
                <View className="flex-row justify-between items-start">
                  {/* To be dynamic base on the user that sign in... */}
                  <Text className="text-black text-base font-isemibold">
                    Hi, Oluwaseyi
                  </Text>
                  <Image
                    source={icons.bell}
                    resizeMode="contain"
                    className="w-5 h-6"
                  />
                </View>

                {/* To specify condition to render base on account verification */}
                <View className="flex-row justify-between items-start mb-6">
                  <Text
                    className="text-gray-400 text-xs font-imedium w-60"
                    numberOfLines={2}>
                    Complete account setup to start investing.
                  </Text>
                  <CustomButton
                    title="Finish"
                    containerStyle="w-[72px] h-[32px] rounded-xl"
                    textStyle="text-xs font-imedium"
                  />
                </View>
              </View>
            </View>

            <BalanceLists />
            <View className="m-5 p-6 bg-white rounded-3xl flex-row justify-between items-center">
              <View className="gap-y-2">
                <Text className="text-black text-base font-imedium">
                  Earn daily in USDT
                </Text>
                <Text
                  numberOfLines={2}
                  className="w-[226px] text-gray-400 text-xs font-ilight">
                  Get up to 6% yearly interest, paid daily in USDT.
                </Text>
              </View>
              <Image source={icons.poundsBg} />
            </View>
          </>
        )}
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.id}</Text>}
      />
    </SafeAreaView>
  );
};

export default Home;
