import { View, Text } from "react-native";

interface NotePreviewProps {
    title?: string;
    preview?: string;
    lastEdited?: string;
}

function NotePreview({
    title,
    preview,
    lastEdited,
}: NotePreviewProps) {
    return (
        <View className="w-full p-2.5 border-b border-gray-300 bg-gray-100">
            <Text className="text-2xl font-bold text-gray-800 mb-1.5">
                {title}
            </Text>
            <Text className="text-sm text-gray-500 mb-1.5">
                {preview}
            </Text>
            <Text className="text-xs text-gray-600">
                Última edição: {lastEdited}
            </Text>
        </View>
    );
}

export default NotePreview;
