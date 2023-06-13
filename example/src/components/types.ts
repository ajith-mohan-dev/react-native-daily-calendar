import type { TextStyle, ViewStyle } from 'react-native/types';

export interface IDailyCalendarProps {
  isMonthPickerReq?: boolean;
  isDatePickerReq?: boolean;
  onDateChangeCalendar?: (value: string) => void;
  onMonthChangeCalendar?: (value: string) => void;
  monthContainerStyle?: ViewStyle;
  LeftArrowIcon?: JSX.Element | React.ElementType;
  RightArrowIcon?: JSX.Element | React.ElementType;
  monthTextStyle?: TextStyle;
}
