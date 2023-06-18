import { View } from 'react-native';
import React, { FC } from 'react';
import { DailyCalendar } from './daily-calendar';
import { SafeAreaView } from 'react-native';
import type { IDailyCalendarProps } from './types';

const RootApp: FC<IDailyCalendarProps> = ({
  onDateChangeCalendar = () => {},
  // onMonthChangeCalendar = () => {},
  isMonthPickerReq = true,
  isDatePickerReq = true,
  monthContainerStyle = {},
  LeftArrowIcon,
  RightArrowIcon,
  monthTextStyle = {},
  dateStyle = {},
  dayStyle = {},
  activeDateColor = '#015CAB',
  dateContainerStyle = {},
  dayFormat = 'ddd',
}) => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <DailyCalendar
            onDateChangeCalendar={onDateChangeCalendar} // return 'YYYY-MM-DD' format
            isDatePickerReq={isDatePickerReq}
            isMonthPickerReq={isMonthPickerReq}
            monthContainerStyle={monthContainerStyle}
            LeftArrowIcon={LeftArrowIcon}
            RightArrowIcon={RightArrowIcon}
            monthTextStyle={monthTextStyle}
            dateStyle={dateStyle}
            dayStyle={dayStyle}
            activeDateColor={activeDateColor}
            dateContainerStyle={dateContainerStyle}
            dayFormat={dayFormat}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default RootApp;
