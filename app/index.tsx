import { View } from "react-native";
import { Tabs } from "expo-router";
import { useState } from "react";
import Storage from "@/utils/storage";
import Header from "@/components/header";
import NotePreview from "@/components/notePreview";

export default function Index() {
  const [update, setUpdate] = useState<boolean>(false);


  type Note = {
    title: string;
    text: string;
    lastEdited: string;
    key: string;
  }

  async function getNotes(): Promise<React.ReactElement[]> {
    const notes = await Storage.getItem("notes");
    const notesArray: Note[] = notes ? JSON.parse(notes) : [];
    return notesArray.map((note: Note) => (
      <NotePreview 
      title={note.title} 
      lastEdited={note.lastEdited} 
      preview={note.text.substring(0, 100) + "..."} 
      key={note.key}
      noteKey={note.key}
      update={() => setUpdate(!update)}
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
