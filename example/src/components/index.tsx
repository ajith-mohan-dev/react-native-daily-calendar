import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import DailyCalendar from './daily-calendar';
import moment from 'moment';

const index = () => {
  const [selectedDate, setSelectedDate] = useState<string>(
    moment().format('DD-MM-YYYY')
  );

  return (
    <>
      <View style={{ flex: 1 }}>
        <DailyCalendar
          onDateChangeCalendar={(value) => {
            setSelectedDate(moment(value, 'YYYY-MM-DD').format('DD-MM-YYYY'));
          }}
          isDatePickerReq={true}
          isMonthPickerReq={true}
        />
      </View>
    </>
  );
};

export default index;

const styles = StyleSheet.create({});
