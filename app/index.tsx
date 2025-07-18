import { View } from "react-native";
import { useState } from "react";
import Storage from "@/utils/storage";
import Header from "@/components/header";
import NotePreview from "@/components/notePreview";
import Note from "@/utils/note";

export default function Index() {
  const [update, setUpdate] = useState<boolean>(false);

  async function getNotes(): Promise<React.ReactElement[]> {
    const notes = await Storage.getItem("notes");
    const notesArray: Note[] = notes ? JSON.parse(notes) : [];
    return notesArray.toReversed().map((note: Note) => (
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
