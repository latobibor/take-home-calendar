import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

interface WeekProps {
  children: ReactNode | ReactNode[];
}

export function Week({ children }: WeekProps) {
  return <View style={styles.container}>
    {children}
  </View>;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    // height: 40,
  }
});
