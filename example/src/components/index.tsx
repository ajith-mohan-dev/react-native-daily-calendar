import { View } from 'react-native';
import React, { FC } from 'react';
import { DailyCalendar } from './daily-calendar';
import { SafeAreaView } from 'react-native';
import type { IDailyCalendarProps } from './types';

const RootApp: FC<IDailyCalendarProps> = ({
  onDateChangeCalendar = () => {},
  isDatePickerReq = true,
  isMonthPickerReq = true,
}) => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <DailyCalendar
            onDateChangeCalendar={onDateChangeCalendar} // return 'YYYY-MM-DD' format
            isDatePickerReq={isDatePickerReq}
            isMonthPickerReq={isMonthPickerReq}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default RootApp;
