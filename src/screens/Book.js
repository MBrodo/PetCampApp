import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import {styles} from '../components/book/styles'

import {DateContainer} from '../components/book/Date'
import {Map} from '../components/book/Map'
import {Header} from '../components/book/Header'

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