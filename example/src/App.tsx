import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SampleApp from 'react-native-daily-calendar';
// import Calendar from './components';

export default function App() {
  return (
    <>
      <SampleApp />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
