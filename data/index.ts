import { ImageSourcePropType } from "react-native";

interface User {
  name: string;
  profile: ImageSourcePropType;
}

export const user: User = {
  name: "tugane",
  profile: require("../assets/images/avatar.jpeg"),
};

interface Ingredient {
  id: number;
  name: String;
  image: ImageSourcePropType;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  subTitle: string;
  image: ImageSourcePropType;
  cover: ImageSourcePropType;
  ingredients: Ingredient[];
  size: string;
  reviewsCount: number;
  rating: number;
}

const ingredients: Ingredient[] = [
  {
    name: "C+ Neutural",
    id: 1,
    image: require("../assets/images/ingredients/CNeutural.png"),
  },
  {
    name: "Natural",
    id: 2,
    image: require("../assets/images/ingredients/Natural.png"),
  },
  {
    name: "vegan",
    id: 3,
    image: require("../assets/images/ingredients/Vegan.png"),
  },
];

export const Products: Product[] = [
  {
    id: 1,
    image: require("../assets/images/products/SensiviteCleansingGel.png"),
    cover: require("../assets/images/products/SukinCleansingGelCover.jpg"),
    subTitle: "Sensitive Cleansing Gel",
    title: "Gel cleanser sensitive",
    price: 9.99,
    ingredients,
    size: "7.60 fl oz / 225ml",
    rating: 4,
    reviewsCount: 132,
  },
  {
    id: 3,
    image: require("../assets/images/products/Oilbalancing.png"),
    cover: require("../assets/images/products/Oilbalancingcover.png"),
    subTitle: "Mattifying facial moisturiser",
    title: "Oil balancing",
    price: 11.99,
    ingredients,
    size: "7.60 fl oz / 225ml",
    rating: 4,
    reviewsCount: 132,
  },
  {
    id: 7,
    image: require("../assets/images/products/Signature_Moisture_Restoring_Night.png"),
    cover: require("../assets/images/products/Signature_Moisture_Restoring_Night.jpg"),
    subTitle: "Cucumber & lemon",
    title: "Creamy body wash",
    price: 13.99,
    ingredients,
    size: "7.60 fl oz / 225ml",
    rating: 4,
    reviewsCount: 132,
  },

  {
    id: 5,
    image: require("../assets/images/products/SignatureFoamingFacialCleanser.png"),
    cover: require("../assets/images/products/SignatureFoamingFacialCleansercover.jpg"),
    subTitle: "Manages dry and frizzy hair",
    title: "Foaming Facial Cleanser Pump",
    price: 9.99,
    ingredients,
    size: "7.60 fl oz / 225ml",
    rating: 4,
    reviewsCount: 132,
  },
  {
    id: 6,
    image: require("../assets/images/products/CreamyBodyWash.png"),
    cover: require("../assets/images/products/CreamyBodyWashCOVER.jpg"),
    subTitle: "Cucumber & lemon",
    title: "Creamy body wash",
    price: 13.99,
    ingredients,
    size: "7.60 fl oz / 225ml",
    rating: 4,
    reviewsCount: 132,
  },
  {
    id: 4,
    image: require("../assets/images/products/Sensitive_Soap_Free_Body_Wash.png"),
    cover: require("../assets/images/products/Soap_Free_Body_Washcover.jpg"),
    subTitle: "Soap Free Sensitive Body Wash",
    title: "Soap Free Body Wash",
    price: 11.99,
    ingredients,
    size: "7.60 fl oz / 225ml",
    rating: 4,
    reviewsCount: 132,
  },
];
