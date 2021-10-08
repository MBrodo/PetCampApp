import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Modal,
} from 'react-native';

import {styles} from './styles'
import Icon  from 'react-native-vector-icons/dist/FontAwesome5';

export const AboutUs = () => {

  const [text, onChangeText] = useState(0);

  // const [scroll, setScroll] = useState(true);

  const {width} = Dimensions.get('window');
  const height = width * 0.6;

  const images = [
    'https://cdnimg.rg.ru/img/content/202/60/21/kot_d_850.jpg',
    'http://brit-cats.ru/wp-content/uploads/2011/09/Britanskie-koshki-i-sobaki.jpg',
    'https://wikipet.ru/wp-content/uploads/2018/10/1539241377_1-1280x720.jpg',
    'https://ru.mypetandi.com/sites/g/files/adhwdz671/files/styles/paragraph_image/public/2020-04/dog-and-cat-lying-together.jpg?itok=2qyfqXCv'
  ]

  return (
    <ScrollView>

    <Modal 
      visible={false}
      style={styles.modalContainer}
      >
      <Text>hello</Text>
    </Modal>

    <View>
      <View style={styles.headerContainer}>
        <ImageBackground 
          source={require("../../img/MainPageBG.png")} 
          resizeMode="cover" 
          style={styles.imageBackGround}
          >
            <View style={styles.headerBlock}>
              <View  style={styles.headerArticleContainer}>
                <Text style={styles.headerArticle}>Pet Camp</Text>
              </View>

              <View style={styles.headerInfo}>
                <Text style={styles.headerText}>The best stay for your pets while you're away</Text>
                <Text style={styles.headerPhoneNumber}>+375 29 111111</Text>
              </View>
            </View>
        </ImageBackground>
      </View>

      <View>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.bodyInput}
            placeholder="Search..."
            onChangeText={onChangeText}
          />
          <Icon name="search" size={20} color="#000"/>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionArticle}>Why Us</Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet non quis elementum volutpat amet etiam. 
          </Text>
        </View>

        <View style={styles.bookContainer}>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookText}>
              Book a room for your pet!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
    <View>
      <View>
        <View style={styles.galleryArticleContainer}>
          <Text style={styles.galleryArticle}>Gallery</Text>
        </View>

        <View>
        <ScrollView 
          style={{width, height}} 
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          // onScroll={change}
          horizontal>
          {
            images.map((image, index) => (
              <Image  
                source={{uri: image}} 
                key={index}
                style={{width, height, resizeMode: 'cover'}}
              />
            ))
          }
        </ScrollView>

          <View style={styles.scrollImages}>
            {
              images.map((i, key) => (
                <View key={key} style={key == text ? styles.circleActive : styles.circle}></View>
              ))
            }
          </View>
        </View>
      </View>
    </View>
      
      <View>
        <View style={styles.socialContainer}>
          <Text style={styles.socialArticle}>
            Follow our Facebook and Instagram pages to see more content
          </Text>
        </View>

        <View style={styles.socialIconsContainer}>
          <Icon name="facebook-square" size={50} style={styles.socialIcon1}/>
          <Icon name="instagram" size={50} style={styles.socialIcon2} />
        </View>
      </View>
    </View>
    </ScrollView>
  )
}
