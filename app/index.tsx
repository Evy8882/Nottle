import { View } from "react-native";
import { Tabs } from "expo-router";
import Header from "@/components/header";
import NotePreview from "@/components/notePreview";

export default function Index() {
  return (
    <View className="flex-1 items-center">
      <Header title="Notas"/>
      <NotePreview 
        title="Nota 1" 
        lastEdited="14/06/2025" 
        preview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
      />
      <NotePreview 
        title="Nota 2" 
        lastEdited="15/05/2025" 
        preview="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
      />
      <NotePreview 
        title="Nota 3" 
        lastEdited="16/04/2025" 
        preview="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." 
      />
      <NotePreview 
        title="Nota 4" 
        lastEdited="16/04/2025" 
        preview="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." 
      />
      <Tabs/>
    </View>
  );
}
