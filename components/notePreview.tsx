import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Storage from "@/utils/storage";

type NotePreviewProps = {
    title: string;
    preview: string;
    lastEdited: string;
    noteKey: string;
    update: () => void;
}

function NotePreview({
    title,
    preview,
    lastEdited,
    noteKey,
    update
}: NotePreviewProps) {

    async function handleDelete(noteKey: string) {
        const notes = await Storage.getItem("notes");
        const notesArray = notes ? JSON.parse(notes) : [];
        const updatedNotes = notesArray.filter((note: any) => note.key !== noteKey);
        await Storage.setItem("notes", JSON.stringify(updatedNotes));
        update();
    }

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
            <View className="flex-row justify-between items-center mt-2">
                <TouchableOpacity>
                    <Ionicons name="create" size={32} color="#447" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelete(noteKey)}>
                    <Ionicons name="trash" size={32} color="#b00" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default NotePreview;
