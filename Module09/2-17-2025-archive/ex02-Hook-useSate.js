// ex02: Hooks - useState()
import { useState } from 'react';
import { Text, View, Button } from 'react-native';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <View>
      <MyButton count={count} onClick={handleClick} />
    </View>
  );
}

function MyButton({count, onClick }) {
  return (
    <View>
      <Button
        title="Press me"
        onPress={onClick}
      />
    <Text>Clicked {count} time</Text>
  </View>
  );
}
