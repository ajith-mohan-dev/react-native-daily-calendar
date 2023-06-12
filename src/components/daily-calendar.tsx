import { Text, TouchableOpacity, View } from 'react-native';
import React, { FC, memo, useState } from 'react';
import { CalendarStrip } from './calendar-strip';
import moment from 'moment';
import { StyleSheet } from 'react-native';
// import {AntDesign, MaterialIcons} from '@expo/vector-icons';

interface IProps {
  isMonthPickerReq?: boolean;
  isDatePickerReq?: boolean;
  onDateChangeCalendar?: (value: string) => void;
  onMonthChangeCalendar?: (value: string) => void;
}

export const DailyCalendar: FC<IProps> = memo(
  ({
    onDateChangeCalendar = () => {},
    // onMonthChangeCalendar = () => {},
    isMonthPickerReq = true,
    isDatePickerReq = true,
  }) => {
    const currentDate = moment().format('YYYY-MM-DD');
    const [selectedDate, setSelectedDate] = useState(currentDate);
    const [selectedMonth, setSelectedMonth] = useState(
      moment().format('MM YYYY')
    );

    const selectDateHandler = (value: string) => {
      onDateChangeCalendar(value);
      setSelectedDate(value);
    };

    const increamentMonth = () => {
      const increasedMonth = moment(selectedMonth, 'MM YYYY')
        .add(1, 'month')
        .format('MM YYYY');
      const YEAR = moment(increasedMonth, 'MM YYYY').format('YYYY');
      const MONTH = moment(increasedMonth, 'MM YYYY').format('MM');
      const DATE = moment(`${YEAR}-${MONTH}-01`, 'YYYY-MM-DD').format(
        'YYYY-MM-DD'
      );
      setSelectedMonth(increasedMonth);
      setSelectedDate(DATE);
      if (!isDatePickerReq && isMonthPickerReq) {
        onDateChangeCalendar(DATE);
      }
    };

    const decreamentMonth = () => {
      const decreasedMonth = moment(selectedMonth, 'MM YYYY')
        .subtract(1, 'month')
        .format('MM YYYY');
      const YEAR = moment(decreasedMonth, 'MM YYYY').format('YYYY');
      const MONTH = moment(decreasedMonth, 'MM YYYY').format('MM');
      const DATE = moment(`${YEAR}-${MONTH}-01`, 'YYYY-MM-DD').format(
        'YYYY-MM-DD'
      );
      setSelectedMonth(decreasedMonth);
      setSelectedDate(DATE);
      if (!isDatePickerReq && isMonthPickerReq) {
        onDateChangeCalendar(DATE);
      }
    };

    return (
      <>
        {isMonthPickerReq && (
          <View style={styles.container}>
            <View style={styles.spaceBtwView}>
              <TouchableOpacity onPress={decreamentMonth}>
                {/* <MaterialIcons name="keyboard-arrow-left" size={24} color="black" /> */}
              </TouchableOpacity>
              <View style={styles.rowView}>
                {/* <AntDesign name="calendar" size={24} color="black" /> */}
                <Text style={styles.monthText}>
                  {moment(selectedMonth, 'MM YYYY').format('MMMM YYYY')}
                </Text>
              </View>
              <TouchableOpacity onPress={increamentMonth}>
                {/* <MaterialIcons name="keyboard-arrow-right" size={24} color="black" /> */}
              </TouchableOpacity>
            </View>
          </View>
        )}
        {isDatePickerReq && (
          <CalendarStrip
            onSelectDate={selectDateHandler}
            selectedDate={selectedDate}
            selectedMonth={moment(selectedMonth, 'MM YYYY').format('MM')}
            selectedYear={moment(selectedMonth, 'MM YYYY').format('YYYY')}
          />
        )}
      </>
    );
  }
);

const styles = StyleSheet.create({
  container: { marginHorizontal: 20, marginVertical: 20 },
  spaceBtwView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthText: {
    paddingLeft: 12,
    fontSize: 14,
  },
});
