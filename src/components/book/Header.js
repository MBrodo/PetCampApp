import React, {useState} from 'react';
import {
  Text,
  View,
} from 'react-native';

import {styles} from './styles'

import { CheckBox } from 'react-native-elements';

export const Header = () => {
  const [dog, setDog] = useState(false)
  const [cat, setCat] = useState(false)
  const [Quantity, setQuantity] = useState(false)

  return (
    <View>
      <View>
        <Text style={styles.bookArticle}>Book</Text>
      </View>

      <View style={styles.checkBoxContainer}>
        <CheckBox
          center
          title='Dog'
          iconRight
          checked={dog}
          onPress={() => {
            setDog(dog == false ? true : false)
          }}
          checkedColor='#4fa09285'
          containerStyle={styles.checkBox}
          textStyle={styles.checkBoxTextStyle}
          fontFamily='Bahianita-Regular'
          style={styles.checkBoxFontFamily}
        />
        <CheckBox
          center
          title='Cat'
          iconRight
          checked={cat}
          onPress={() => {
            setCat(cat == false ? true : false)
          }}
          checkedColor='#4fa09285'
          containerStyle={styles.checkBox}
          textStyle={styles.checkBoxTextStyle}
          style={styles.checkBoxFontFamily}
        />
        <CheckBox
          center
          title='Quantity'
          iconRight
          checked={Quantity}
          onPress={() => {
            setQuantity(Quantity == false ? true : false)
          }}
          checkedColor='#4fa09285'
          containerStyle={styles.checkBox}
          textStyle={styles.checkBoxTextStyle}
          style={styles.checkBoxFontFamily}
        />
      </View>
    </View>
  )
}