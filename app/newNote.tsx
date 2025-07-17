import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import Header from "@/components/header";
import Storage from "@/utils/storage";
import { useRouter } from "expo-router";

export default function NewNote() {
    const [noteTitle, setNoteTitle] = useState<string>("");
    const [noteText, setNoteText] = useState<string>("");
    const [isSaving, setIsSaving] = useState<boolean>(false);

    async function saveNote(title: string,text: string){
        if (!title) {
            alert("Por favor, preencha o título.");
            return;
        }
        if (isSaving) {
            return
        }
        setIsSaving(true);
        const notes = await Storage.getItem("notes");
        const notesArray = notes ? JSON.parse(notes) : [];
        const newNote = {
            title: title,
            text: text,
            lastEdited: new Date().toLocaleDateString("pt-BR"),
            key: Date.now().toString()
        };
        notesArray.push(newNote);
        await Storage.setItem("notes", JSON.stringify(notesArray));
        setNoteTitle("");
        setNoteText("");
        setIsSaving(false);
        const router = useRouter();
        router.push({ pathname: "/" });
    }

    return (
        <View className="flex-1 items-center bg-gray-100">
            <Header title="Nova Nota" />
            <View className="w-full h-full p-8">
            <Text className="text-sm text-gray-600">Criar nova Nota</Text>
            <TextInput
                value={noteTitle}
                onChangeText={(text) => {setNoteTitle(text)}}
                placeholder="Título"
                className="border border-gray-300 rounded p-2 w-full h-16"
            />
            <View className="flex-row gap-2 my-4">
            <TouchableOpacity onPress={() => {}} className="rounded bg-blue-500 p-2">
                <Text className="text-white">Gerar com IA</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} className="rounded bg-green-500 p-2">
                <Text className="text-white">Corrigir Ortografia</Text>
            </TouchableOpacity>
            </View>
            <TextInput
                value={noteText}
                onChangeText={(text) => {setNoteText(text)}}
                placeholder="Escreva sua nota aqui..."
                className="border border-gray-300 rounded p-2 w-full h-96"
                multiline
                textAlignVertical="top"
            />
            <TouchableOpacity onPress={() => saveNote(noteTitle, noteText)} className="rounded bg-blue-600 p-2 mt-4">
                <Text className="text-white text-center">{isSaving ? "Salvando..." : "Salvar Nota"}</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}