import { Button, View } from "react-native";

export function TimeControls({ setYear, setMonth }) {
  function decrementMonth() {

  }

  function incrementMonth() {

  }

   return <View>
    <Button onPress={decrementMonth}>&gt;</Button>
    <Button onPress={incrementMonth}>&lt;</Button>
   </View>
}