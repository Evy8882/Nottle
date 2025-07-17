import { View, Text } from "react-native";

function Header({ title }: { title?: string }) {
    return (
        <View className="w-full bg-[#447] justify-center items-center border-b border-[#ddd] sticky top-0 left-0 pt-16 pb-4">
            <Text className="text-lg font-bold text-white">
                {title || "Nottle"}
            </Text>
        </View>
    )
}

export default Header;
