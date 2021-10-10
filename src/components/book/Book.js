import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import {styles} from './styles'

import {DateContainer} from './Date'
import {Map} from './Map'
import {Header} from './Header'

export const Book = () => {
  return (
    <ScrollView>
      <View style={styles.bookOutsidecontainer}>
        <View style={styles.bookInsideContainer}>
          <Header />

          <Map />

          <DateContainer />
        </View>
      </View>
    </ScrollView>
  )
}