import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  VirtualizedList
} from 'react-native';

import {styles} from './styles'
import MapView from 'react-native-maps';


export const Map = () => {

  const [list, setList] = useState(true)
  const [map, setMap] = useState(false)

  const [latitude, setLatitude] = useState(53.88852210035737)
  const [longitude, setLongitude] = useState(27.544550058168248)

  const coordinates = () => {
    setLatitude(city.latitude)
    setLongitude(city.longitude)
  }

  const switchOptions = () => {
    setList(list ? false : true)
    setMap(map ? false : true)
  }

  const [city, setCity] = useState([
    {city: 'Minsk', latitude: 53.88852210035737, longitude: 27.544550058168248, key: 1},
    {city: 'Berlin', latitude: 52.520008, longitude: 13.404954, key: 2},
    {city: 'New York', latitude: 40.730610, longitude: -73.935242, key: 3},
  ])

  const [country, setCountry] = useState(false)

  return (
          <View>
            <View>
              <Text style={styles.bookSelectArticle}>
                Select a camp
              </Text>
            </View>

            <View style={styles.bodyContainer}>
              <TouchableOpacity 
                style={list ? styles.bodyButtonActive : styles.bodyButtonInactive}
                onPress={() => {switchOptions()}}
              >
                <Text style={list ? styles.bodyTextActive : styles.bodyTextInactive}>Список</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={map ? styles.bodyButtonActive : styles.bodyButtonInactive}
                onPress={() => {switchOptions()}}
              >
                <Text style={map ? styles.bodyTextActive : styles.bodyTextInactive}>Карта</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.optionsContainer}>
              {
                map ? 
                    <MapView
                      style={styles.bodyMap}
                      initialRegion={{
                      latitude: latitude,
                      longitude: longitude,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                      }}
                    />
                    :
                    <View>
                      <FlatList style={styles.bodyCountryList} data={city} renderItem={({item}) => (
                        <View>
                          <TouchableOpacity 
                            onPress={() => {
                              setCountry(item.key)
                              setLatitude(item.latitude)
                              setLongitude(item.longitude)
                          }}>
                            <Text style={item.key === country ? styles.countryActive : styles.countryInactive}>{item.city}</Text>
                          </TouchableOpacity>
                        </View>
                      )} />
                    </View>
              }
            </View>
          </View>
  )
}