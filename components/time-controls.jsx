import {Button, View} from 'react-native';

export function TimeControls({year, month, setYear, setMonth}) {
  function decrementMonth() {

  }

  function incrementMonth() {

  }

  return <View>
    <Button title="&gt;" onPress={decrementMonth}/>
    <Button title="&lt;" onPress={incrementMonth}/>
  </View>
}
