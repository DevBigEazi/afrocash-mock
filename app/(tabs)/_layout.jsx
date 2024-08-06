import { View, Text, Image, StatusBar } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "../../constants";

const TabBarIcon = ({ icon, name, color, focused }) => {
  return (
    <>
      <View className="items-center justify-center gap-1">
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
          className="w-5 h-5"
        />
        <Text
          className={`${focused ? "font-isemibold" : "font-ilight"} text-xs`}
          style={{ color: color }}>
          {name}
        </Text>
      </View>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
    </>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#1F2223",
          tabBarInactiveTintColor: "#9ca3af",
          tabBarStyle: {
            borderTopWidth: 1,
            borderTopColor: "#EAEAEA",
            height: 81,
            backgroundColor: "#FFFFFF",
          },
        }}>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                icon={icons.home}
                name="Home"
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="save"
          options={{
            title: "Save",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                icon={icons.save}
                name="Save"
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="invest"
          options={{
            title: "Invest",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                icon={icons.invest}
                name="Invest"
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                icon={icons.searchSmall}
                name="Explore"
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                icon={icons.profile}
                name="Profile"
                color={color}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
