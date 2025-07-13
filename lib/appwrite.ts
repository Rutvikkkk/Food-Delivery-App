import { Platform } from "react-native";

export const appwriteConfig = {
        endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ,
        platform: "com.rutvik.foodordering",
        projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ,
        databaseId: "6872aa330017be04f625",
        userCollectionId: "6872aa790003bf3084ca",
}