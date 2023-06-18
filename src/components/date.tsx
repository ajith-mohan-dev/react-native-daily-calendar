import React, { FC, memo } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import type { TextStyle, ViewStyle } from 'react-native';
import moment from 'moment';

interface IProps {
  key?: string;
  date?: string;
  onSelectDate?: (date: string) => void;
  selectedDate?: string;
  dateStyle: TextStyle;
  dayStyle: TextStyle;
  activeDateColor: string;
  dateContainerStyle: ViewStyle;
  dayFormat?: 'ddd' | 'dddd';
}

export const Date: FC<IProps> = memo(
  ({
    date,
    onSelectDate = () => {},
    selectedDate,
    dateStyle,
    dayStyle,
    activeDateColor = '#015CAB',
    dateContainerStyle,
    dayFormat = 'ddd',
  }) => {
    /**
     * use moment to compare the date to today
     * if today, show 'Today'
     * if not today, show day of the week e.g 'Mon', 'Tue', 'Wed'
     */
    const day =
      moment(date).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')
        ? 'Today'
        : moment(date).format('dddd');

    // get the day number e.g 1, 2, 3, 4, 5, 6, 7
    const dayNumber = moment(date).format(dayFormat);

    // get the full date e.g 2021-01-01 - we'll use this to compare the date to the selected date
    const fullDate = moment(date).format('YYYY-MM-DD');

    const isHighLightDate = moment(selectedDate).isSame(fullDate);

    return (
      <TouchableOpacity onPress={() => onSelectDate(fullDate)}>
        <View style={styles.container}>
          <View
            style={[
              styles.card,
              isHighLightDate && { backgroundColor: activeDateColor },
              dateContainerStyle,
            ]}
          >
            <Text
              style={[
                {
                  fontSize: isHighLightDate ? 14 : 12,
                  color: isHighLightDate ? '#ffffff' : '#000000',
                },
                dateStyle,
              ]}
            >
              {dayNumber}
            </Text>
          </View>
          <Text
            style={[
              {
                fontSize: 12,
                color: isHighLightDate ? '#015CAB' : '#747A86',
                marginTop: 10,
              },
              dayStyle,
            ]}
          >
            {day}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    marginHorizontal: 9,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
  },
});
