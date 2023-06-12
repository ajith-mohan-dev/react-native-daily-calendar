import { View } from 'react-native';
import React from 'react';
import { DailyCalendar } from './daily-calendar';
import { SafeAreaView } from 'react-native';

const RootApp = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <DailyCalendar
            onDateChangeCalendar={(value) => {
              console.log('onDateChangeCalendar', value);
            }} // return 'YYYY-MM-DD' format
            isDatePickerReq={true}
            isMonthPickerReq={true}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default RootApp;
