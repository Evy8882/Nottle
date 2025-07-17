import { View, Text } from "react-native";
import Header from "@/components/header";

export default function Settings() {
    return (
        <View className="flex-1 items-center bg-gray-100">
            <Header title="Configurações"></Header>
            <Text className="text-sm text-gray-600">Aqui você pode ajustar as configurações do aplicativo.</Text>
        </View>
    );
}
