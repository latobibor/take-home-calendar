import {Button, View} from 'react-native';

interface TimeControlsProps {
  year: number;
  month: number;
  setYear: (year: number) => void;
  setMonth: (month: number) => void;
}

export function TimeControls({year, month, setYear, setMonth}: TimeControlsProps) {
  function decrementMonth() {

  }

  function incrementMonth() {

  }

  return <View>
    <Button title="&gt;" onPress={decrementMonth}/>
    <Button title="&lt;" onPress={incrementMonth}/>
  </View>
}
