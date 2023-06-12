import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import moment from 'moment';
import React,{FC, memo} from 'react';



interface IProps {
  key: string;
  date: string;
  onSelectDate: (date: string) => void;
  selectedDate: string;
}

const Date: FC<IProps> = ({key, date, onSelectDate, selectedDate}: any) => {
  /**
   * use moment to compare the date to today
   * if today, show 'Today'
   * if not today, show day of the week e.g 'Mon', 'Tue', 'Wed'
   */
  const day =
    moment(date).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')
      ? 'Today'
      : moment(date).format('ddd');

  // get the day number e.g 1, 2, 3, 4, 5, 6, 7
  const dayNumber = moment(date).format('DD');

  // get the full date e.g 2021-01-01 - we'll use this to compare the date to the selected date
  const fullDate = moment(date).format('YYYY-MM-DD');

  const isHighLightDate = moment(selectedDate).isSame(fullDate);

  return (
    <TouchableOpacity onPress={() => onSelectDate(fullDate)}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={[
            styles.card,
            isHighLightDate && {backgroundColor: "#015CAB"},
          ]}>
          <Text
            style={{
              // fontFamily: isHighLightDate
              //   ? fontFamily.POPPINS_SEMI_BOLD
              //   : fontFamily.POPPINS_REGULAR,
              fontSize: isHighLightDate ? 14 : 12,
              color: isHighLightDate ? "#ffffff" : "#000000",
            }}>
            {dayNumber}
          </Text>
        </View>
        <Text
          style={{
            // fontFamily: isHighLightDate
            //   ? fontFamily.POPPINS_SEMI_BOLD
            //   : fontFamily.POPPINS_MEDIUM,
            fontSize: 12,
            color: isHighLightDate ? "#015CAB" : "#747A86",
            marginTop: 10,
          }}>
          {day}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(Date);

const styles = StyleSheet.create({
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
