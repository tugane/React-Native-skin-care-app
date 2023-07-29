import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Font from "../constants/Font";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";
import { user } from "../data";
import Colors from "../constants/Colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { AirbnbRating, Rating } from "react-native-ratings";

type Props = NativeStackScreenProps<RootStackParamList, "DetailScreen">;

const DetailScreen: React.FC<Props> = ({
  route: {
    params: { product },
  },
  navigation: { goBack },
}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          paddingHorizontal: Spacing.padding.base,
        }}
      >
        <View
          style={{
            paddingHorizontal: Spacing.padding.base,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => goBack()}>
            <Ionicons name='chevron-back' size={24} color={Colors.text} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name='grid-outline' size={30} color={Colors.text} />
          </TouchableOpacity>
        </View>
        <Image
          source={product.cover}
          style={{
            width: "100%",
            height: 400,
            marginVertical: Spacing.margin.base,
            borderRadius: Spacing.borderRadius.lg,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            marginVertical: Spacing.margin.lg,
          }}
        >
          {product.ingredients.map((ingredient) => (
            <View
              key={ingredient.id}
              style={{
                backgroundColor: Colors.primary,
                padding: Spacing.padding.base,
                borderRadius: Spacing.borderRadius.xxl,
                alignItems: "center",
              }}
            >
              <Image
                source={ingredient.image}
                style={{
                  width: 90,
                  height: 70,
                }}
              />
              <Text
                style={{
                  color: Colors.textGray,
                  marginVertical: Spacing.margin.base,
                }}
              >
                {ingredient.name}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View
        style={{
          backgroundColor: Colors.primary,
          padding: Spacing.padding.lg,
          borderTopLeftRadius: Spacing.borderRadius.xxl,
          borderTopRightRadius: Spacing.borderRadius.xxl,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: FontSize.lg,
                fontFamily: Font["poppins-semiBold"],
                color: Colors.text,
              }}
            >
              {product.title}
            </Text>
            <Text
              style={{
                fontSize: FontSize.sm,
                fontFamily: Font["poppins-regular"],
                color: Colors.textGray,
              }}
            >
              Size: {product.size}
            </Text>
          </View>
          <View
            style={{
              alignItems: "flex-end",
            }}
          >
            <AirbnbRating
              count={5}
              showRating={false}
              size={16}
              selectedColor={Colors.text}
              defaultRating={product.rating}
              isDisabled
            />
            <Text
              style={{
                fontSize: FontSize.sm,
                fontFamily: Font["poppins-regular"],
                color: Colors.textGray,
              }}
            >
              ({product.reviewsCount} Reviews)
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: Spacing.padding.xl,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-bold"],
              fontSize: FontSize.xl,
            }}
          >
            $ {product.price}
          </Text>
          <View
            style={{
              flexDirection: "row",
              padding: Spacing.padding.sm / 3,
              borderWidth: 1,
              borderColor: Colors.textGray,
              borderRadius: Spacing.borderRadius.xxl,
              height: 45,
            }}
          >
            <TouchableOpacity
              style={{
                padding: Spacing.padding.sm,
              }}
            >
              <Ionicons
                name='remove-outline'
                color={Colors.textGray}
                size={20}
              />
            </TouchableOpacity>
            <TextInput
              value='1'
              style={{
                fontSize: FontSize.base,
                paddingHorizontal: Spacing.padding.sm,
              }}
            />
            <TouchableOpacity
              style={{
                padding: Spacing.padding.sm,
              }}
            >
              <Ionicons name='add' color={Colors.textGray} size={20} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.accent,
              padding: Spacing.padding.base,
              borderRadius: Spacing.borderRadius.lg,
            }}
          >
            <Text
              style={{
                color: Colors.onAccent,
                fontSize: FontSize.lg,
                fontFamily: Font["poppins-semiBold"],
              }}
            >
              Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
