import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import Spacing from "../constants/Spacing";
import { Product, Products, user } from "../data";
import FontSize from "../constants/FontSize";
import Font from "../constants/Font";
import MasonryList from "@react-native-seoul/masonry-list";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "SearchScreen">;

const SearchScreen: React.FC<Props> = ({ navigation }) => {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<Product[]>(Products);

  useEffect(() => {
    setResults(Products.filter((product) => product.title.includes(search)));
  }, [search]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: Spacing.padding.base,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <Ionicons name='chevron-back' size={24} color={Colors.text} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: FontSize.lg,
                fontFamily: Font["poppins-semiBold"],
                color: Colors.text,
              }}
            >
              Search Product
            </Text>
            <TouchableOpacity>
              <Image
                source={user.profile}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: Spacing.borderRadius.base,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginVertical: Spacing.margin.xxl,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: Colors.primary,
                padding: Spacing.padding.base,
                borderRadius: Spacing.borderRadius.base,
                width: "80%",
                height: 60,
              }}
            >
              <Ionicons name='search' size={24} color={Colors.textGray} />
              <TextInput
                style={{
                  fontSize: FontSize.base,
                  color: Colors.text,
                  marginLeft: Spacing.margin.base,
                }}
                placeholder='Search'
                placeholderTextColor={Colors.text}
                onChangeText={(value) => setSearch(value)}
                defaultValue={search}
              />
            </View>
            <TouchableOpacity
              style={{
                height: 60,
                width: 60,
                backgroundColor: Colors.primary,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: Spacing.borderRadius.base,
              }}
            >
              <Ionicons name='filter-outline' size={24} color={Colors.text} />
            </TouchableOpacity>
          </View>
          <MasonryList
            data={[
              { id: 0, title: `Found ${results.length} Results` },
              ...results,
            ]}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, i }) => (
              <>
                {i === 0 ? (
                  <Text
                    style={{
                      fontSize: FontSize.xxl,
                      fontFamily: Font["poppins-bold"],
                    }}
                  >
                    {item.title}
                  </Text>
                ) : (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("DetailScreen", { product: item })
                    }
                    style={{
                      padding: Spacing.padding.base,
                      backgroundColor: Colors.primary,
                      width: "90%",
                      marginVertical: Spacing.margin.base,
                      borderRadius: Spacing.borderRadius.xl,
                    }}
                  >
                    <Image
                      source={item.image}
                      style={{
                        width: "100%",
                        height: 220,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: FontSize.base,
                        fontFamily: Font["poppins-semiBold"],
                        color: Colors.text,
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontSize: FontSize.sm,
                        fontFamily: Font["poppins-regular"],
                        color: Colors.textGray,
                        marginVertical: Spacing.margin.sm,
                      }}
                    >
                      {item.subTitle}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: FontSize.lg,
                          fontFamily: Font["poppins-semiBold"],
                          color: Colors.text,
                        }}
                      >
                        $ {item.price}
                      </Text>
                      <TouchableOpacity
                        style={{
                          height: 35,
                          width: 35,
                          backgroundColor: Colors.accent,
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: Spacing.borderRadius.xl,
                        }}
                      >
                        <Ionicons
                          name='heart'
                          size={20}
                          color={Colors.onAccent}
                        />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                )}
              </>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
