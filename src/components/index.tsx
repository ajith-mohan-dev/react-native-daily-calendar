import { View } from 'react-native';
import React from 'react';
import { DailyCalendar } from './daily-calendar';

const RootApp = () => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <DailyCalendar
          onDateChangeCalendar={(value) => {
            console.log('onDateChangeCalendar', value);
          }} // return 'YYYY-MM-DD' format
          isDatePickerReq={true}
          isMonthPickerReq={true}
        />
      </View>
    </>
  );
};

export default RootApp;
