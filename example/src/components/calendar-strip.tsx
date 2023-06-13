import React, {
  useState,
  useEffect,
  FC,
  useRef,
  memo,
  useCallback,
} from 'react';
import { View, FlatList } from 'react-native';
import moment from 'moment';
import { Date } from './date';

interface IProps {
  selectedDate?: string;
  onSelectDate?: (date: string) => void;
  selectedMonth?: string;
  selectedYear?: string;
}

export const CalendarStrip: FC<IProps> = memo(
  ({ onSelectDate = () => {}, selectedDate, selectedMonth, selectedYear }) => {
    const [dates, setDates] = useState<Array<string>>([]);

    //scrollview Ref
    const ref = useRef<FlatList>(null);

    //get days in a month
    const YEAR = moment(selectedYear, 'YYYY').format('YYYY');
    const MONTH = moment(selectedMonth, 'MM').format('MM'); // April 1, 2023
    const daysInMonth = moment(`${YEAR}-${MONTH + 1}`, 'YYYY-MM').daysInMonth(); // Get the number of days in the month

    useEffect(() => {
      getDates();
    }, [selectedMonth, selectedYear]);

    useEffect(() => {
      if (dates.length > 0) {
        const todayDate = moment().format('YYYY-MM-DD');
        const todayDateIndex = dates.findIndex((item) => item === todayDate);
        if (todayDateIndex > 0) {
          handleSelectedDate(selectedDate, todayDateIndex);
        } else {
          handleSelectedDate(selectedDate, 0);
        }
      }
    }, [dates]);

    const getDates = useCallback(() => {
      const datesArr: string[] = new Array(daysInMonth)
        .fill(null)
        .map((_, index) =>
          moment(`${YEAR}-${MONTH + 1}-${index + 1}`, 'YYYY-MM-DD').format(
            'YYYY-MM-DD'
          )
        );
      setDates(datesArr);
    }, [selectedMonth, selectedYear]);

    const handleScrollToIndex = (index: number) => {
      if (dates.length > index) {
        ref?.current?.scrollToIndex({
          index,
          animated: true,
          viewPosition: 0.5,
        });
      }
    };

    const handleSelectedDate = (value?: string, index?: number) => {
      onSelectDate(value ?? '');
      handleScrollToIndex(index ?? 0);
    };

    return (
      <>
        <View style={{}}>
          {dates.length > 0 && (
            <FlatList
              ref={ref}
              data={dates}
              keyExtractor={(item, _index) => `date-list-${item}`}
              renderItem={({ item, index }) => (
                <Date
                  key={item}
                  date={item}
                  onSelectDate={(value) => handleSelectedDate(value, index)}
                  selectedDate={selectedDate}
                />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ flexGrow: 0 }}
              onScrollToIndexFailed={(info) => {
                const wait = new Promise((resolve) => setTimeout(resolve, 200));
                wait.then(() => {
                  ref.current?.scrollToIndex({
                    index: info.index,
                    animated: true,
                  });
                });
              }}
            />
          )}
        </View>
      </>
    );
  }
);
