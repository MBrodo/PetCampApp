import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

import {styles} from './styles'
import Icon  from 'react-native-vector-icons/dist/FontAwesome5';

export const Home = () => {

  const [text, onChangeText] = useState(0);

  // const [scroll, setScroll] = useState(true);

  const {width} = Dimensions.get('window');
  const height = width * 0.45;

  const images = [
    'https://cdnimg.rg.ru/img/content/202/60/21/kot_d_850.jpg',
    'http://brit-cats.ru/wp-content/uploads/2011/09/Britanskie-koshki-i-sobaki.jpg',
    'https://wikipet.ru/wp-content/uploads/2018/10/1539241377_1-1280x720.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjP3KOLBT5apmO8lsm-J9bhAMBXadkTH0IpLMoAkvviSVRgwNpDtd9Kv2Hd2NsU5Zm2Wo&usqp=CAU'
  ]

  return (
    <ScrollView>

    <View>
      <View style={styles.headerContainer}>
        <ImageBackground 
          source={require("../../img/MainPageBG.png")} 
          resizeMode="cover" 
          style={styles.imageBackGround}
          >
        </ImageBackground>
      </View>

      <View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionArticle}>Why Us</Text>
          <Text style={styles.descriptionText}>
            LLorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet non quis elementum volutpat amet etiam.Lorem ipsum dolor sit amet.
          </Text>
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
                style={{width, height, resizeMode: 'contain'}}
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
          <Text style={styles.socialArticle}>Follow us on social networks</Text>
          <View style={styles.socialIconsContainer}>
            <Icon name="facebook" size={50} style={styles.socialIcon1}/>
            <Icon name="instagram" size={50} style={styles.socialIcon2} />
        </View>
      </View>

      </View>
    </View>
    </ScrollView>
  )
}
