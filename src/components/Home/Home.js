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

  const [text, onChangeText] = useState(4);

  // const [scroll, setScroll] = useState(true);

  const change = () => {}

  const {width} = Dimensions.get('window');
  const height = width * 0.45;

  const images = [
    {key: 1, image: 'data:image/jpeg;base64,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'},
    {key: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSqe7BdP_jVPqd0VjSh4EbF7SX6gIObU6zGLkp_iE5o7LeANB4ZJTKv8o1dtLfK606wlc&usqp=CAU'},
    {key: 3, image: 'https://memax.club/wp-content/uploads/2019/06/9-45.jpg'},
    {key: 4, image: 'https://st.depositphotos.com/1004199/1831/i/600/depositphotos_18317915-stock-photo-cat-and-dog-together-on.jpg'}
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
            images.map((image) => (
                <Image  
                  source={{uri: image.image}} 
                  key={image.key}
                  style={{width, height, resizeMode: 'contain'}}
                />
            ))
          }
        </ScrollView>

          <View style={styles.scrollImages}>
            {
              images.map(image => (
                <View key={image.key} style={image.key == text ? styles.circleActive : styles.circle}>
                  <Text onPress={console.log(image.key)}></Text>
                </View>
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
