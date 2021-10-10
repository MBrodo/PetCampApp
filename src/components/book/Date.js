import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {styles} from './styles'
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon  from 'react-native-vector-icons/dist/FontAwesome5';

export const DateContainer = () => {

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [dateText, setDateText] = useState('dd/mm/yyyy');

  const [dateEnd, setDateEnd] = useState(new Date(1598051730000));
  const [modeEnd, setModeEnd] = useState('date');
  const [showEnd, setShowEnd] = useState(false);
  const [dateTextEnd, setDateTextEnd] = useState('dd/mm/yyyy');

  const onChangeEnd = (event, selectedDate) => {
    const currentDate = selectedDate || dateEnd;
    setShowEnd(Platform.OS === 'ios');
    setDateEnd(currentDate);

    let tempDateEnd = new Date(currentDate);
    let showDateEnd = tempDateEnd.getDate() + '/' + (tempDateEnd.getMonth() + 1) + '/' + tempDateEnd.getFullYear();
    setDateTextEnd(showDateEnd);
  };

  const showModeEnd = (currentMode) => {
    setShowEnd(true);
    setModeEnd(currentMode);
  };

  const showDatepickerEnd = () => {
    showModeEnd('date');
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let showDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    setDateText(showDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
        <View>
          <View>
            <Text style={styles.bookSelectArticle}>
              Select a dates
            </Text>
          </View>

          <View style={styles.mainDateContainer}>
            <View>
              <TouchableOpacity 
                onPress={() => showDatepicker()} 
                style={styles.dateContainer}
              >
                <Text style={styles.dateText}>{dateText}</Text>
                <Icon 
                  name="calendar-alt" 
                  size={24}
                  style={styles.dateIcon}
                  />
              </TouchableOpacity>
            </View>

            <View style={styles.dateLineContainer}>
              <View style={styles.dateLine}></View>
            </View>

            <View>
              <TouchableOpacity 
                onPress={() => showDatepickerEnd()} 
                style={styles.dateContainer}
              >
                <Text style={styles.dateText}>{dateTextEnd}</Text>
                <Icon 
                  name="calendar-alt" 
                  size={24}
                  style={styles.dateIcon}
                  />
              </TouchableOpacity>
            </View>

            <View>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}

              {showEnd && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={dateEnd}
                  mode={modeEnd}
                  is24Hour={true}
                  display="default"
                  onChange={onChangeEnd}
                />
              )}
            </View>

          </View>

          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>CHECK</Text>
          </TouchableOpacity>
        </View>
  )
}