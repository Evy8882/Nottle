import { View } from "react-native";
import { Tabs } from "expo-router";
import { useEffect } from "react";
import Storage from "@/utils/storage";
import Header from "@/components/header";
import NotePreview from "@/components/notePreview";

export default function Index() {

  type Note = {
    title: string;
    text: string;
    lastEdited: string;
  }

  async function getNotes(): Promise<React.ReactElement[]> {
    const notes = await Storage.getItem("notes");
    const notesArray: Note[] = notes ? JSON.parse(notes) : [];
    return notesArray.map((note: Note, i: number) => (
      <NotePreview 
        title={note.title} 
        lastEdited={note.lastEdited} 
        preview={note.text.substring(0, 100) + "..."} 
        key={i} 
      />
    ));
  }


  return (
    <View className="flex-1 items-center">
      <Header title="Notas"/>
      {getNotes()}
    </View>
  );
}
