# :control_knobs: react-native-daily-calendar

A highly customizable Month and Date Picker component for React Native using momentjs. Support this project with a ★ on [**Github**](https://github.com/ajith-mohan-dev/react-native-daily-calendar).

<img src="https://github.com/ajith-mohan-dev/react-native-daily-calendar/blob/develop/ezgif.com-gif-to-mp4.gif" alt="Alt text" width="200">

## :inbox_tray: Installation

You can install this package using either Yarn or NPM.

### <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png" alt="Alt text" width="50">

```bash
npm install react-native-daily-calendar
```

### <img src="https://raw.githubusercontent.com/yarnpkg/assets/master/yarn-kitten-full.png" alt="Alt text" width="50">

```bash
yarn add react-native-daily-calendar
```

**react-native-daily-calendar** requires [moment](https://www.npmjs.com/package/moment/) to be installed, which is a peer dependency.

## :bulb: Usage

```bash
import DailyCalendar from 'react-native-daily-calendar';

function App() {
   const [selectedDate, setSelectedDate] = useState(moment().format("DD-MM-YYYY"))
  return (
   <DailyCalendar
     onDateChangeCalendar={value => {
     setSelectedDate(moment(value, 'YYYY-MM-DD').format('DD-MM-YYYY'));
     }}
     isDatePickerReq={true}
     isMonthPickerReq={true}
    />
  );
}
```

<img src="https://github.com/ajith-mohan-dev/react-native-daily-calendar/blob/develop/ezgif.com-gif-to-mp4.gif" alt="Alt text" width="250">

## :book: Props

| Property              | Type        | Default | Description                                                                                   |
| :-------------------- | :---------- | :------ | :-------------------------------------------------------------------------------------------- |
| isMonthPickerReq      | bool        | true    | Value of the slider.                                                                          |
| isDatePickerReq       | bool        | true    | Enable or disable slider.                                                                     |
| onDateChangeCalendar  | function    | null    | Callback called when the user changing the date slider.                                       |
| onMonthChangeCalendar | function    | null    | Callback called when the user changing the month slider.                                      |
| monthContainerStyle   | ViewStyle   | null    | default                                                                                       |
| slider.               |
| LeftArrowIcon         | JSX.Element | null    | Callback called when the user finishes changing the value (e.g. when the slider is released). |
| RightArrowIcon        | JSX.Element | 0       | Width of the slider.                                                                          |
| monthTextStyle        | TextStyle   | 0       | Height of the slider.                                                                         |
| borderRadius          | number      | 0       | The border radius of                                                                          |

## :art: Demo

You can try the [example app](https://github.com/sacmii/rn-vertical-slider/tree/master/example) by cloning this repo and running the following commands:

```sh
cd example
yarn install
npx expo start
```

## :handshake: Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you find a bug or have a feature request. See the [contributing guide](https://github.com/ajith-mohan-dev/react-native-daily-calendar/blob/develop/CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## :scroll: License

This project is licensed under the [MIT License](https://github.com/ajith-mohan-dev/react-native-daily-calendar/blob/develop/LICENSE).
