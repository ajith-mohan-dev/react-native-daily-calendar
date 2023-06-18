import type { TextStyle, ViewStyle } from 'react-native/types';

export interface IDailyCalendarProps {
  isMonthPickerReq?: boolean;
  isDatePickerReq?: boolean;
  onDateChangeCalendar?: (value: string) => void;
  onMonthChangeCalendar?: (value: string) => void;
  monthContainerStyle?: ViewStyle;
  LeftArrowIcon?: () => JSX.Element;
  RightArrowIcon?: () => JSX.Element;
  monthTextStyle?: TextStyle;
  dateStyle?: TextStyle;
  dayStyle?: TextStyle;
  activeDateColor?: string;
  dateContainerStyle?: ViewStyle;
  dayFormat?: 'ddd' | 'dddd';
}
