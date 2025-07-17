import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import Header from "@/components/header";

export default function NewNote() {
    const [noteTitle, setNoteTitle] = useState("");
    const [noteText, setNoteText] = useState("");

    return (
        <View className="flex-1 items-center bg-gray-100">
            <Header title="Nova Nota" />
            <View className="w-full h-full p-8">
            <Text className="text-sm text-gray-600">Criar nova Nota</Text>
            <TextInput
                value={noteTitle}
                onChangeText={(text) => {setNoteTitle(text)}}
                placeholder="Título"
                className="border border-gray-300 rounded p-2 w-full my-4 h-16"
            />
            <Button title="gerar com IA" onPress={()=>{}}></Button>
            <Button title="corrigir ortografia" onPress={()=>{}}></Button>
            <TextInput
                value={noteText}
                onChangeText={(text) => {setNoteText(text)}}
                placeholder="Escreva sua nota aqui..."
                className="border border-gray-300 rounded p-2 w-full h-full"
                multiline
                textAlignVertical="top"
            />
            </View>
        </View>
    );
}