import {
  StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    width: '30%',
    height: 200
  },
  headerContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 155,
  },
  imageBackGround: {
    width: '100%',
    height: 190,
  },
  headerBlock: {
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
  },
  headerArticleContainer: {
    margin: 0,
    marginLeft: 10,
    padding: 0
  },
  headerArticle: {
    color: '#594334',
    fontSize: 55,
    fontFamily: 'Bahianita-Regular',
  },
  headerInfo: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 10
  },
  headerText: {
    color: 'black',
    fontSize: 13,
    fontFamily: 'Bahianita-Regular',
  },
  headerPhoneNumber: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Bahianita-Regular',
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#E1E1E1',
    alignItems: 'center',
  },
  bodyInput: {
    backgroundColor: '#E1E1E1',
    paddingLeft: 30,
    width: '90%'
  },
  descriptionContainer: {
    marginHorizontal: 10,
    marginVertical: 10
  },
  descriptionArticle: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'Bahianita-Regular',
  },
  descriptionText: {
    color: 'black',
    fontSize: 14,
  },
  bookContainer: {
    alignItems: 'center',
  },
  bookButton: {
    alignItems: 'center',
    width: '60%',
    backgroundColor: '#5D5FEF',
    borderRadius: 5,
    padding: 5
  },
  bookText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Bahianita-Regular',
  },
  galleryArticleContainer: {
    marginLeft: 10,
    marginTop: 10
  },
  galleryArticle: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'Bahianita-Regular',
  },
  footerImageContainer: {
    flexDirection: 'row',
  },
  scrollImages: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5,
    alignSelf: 'center',
  },
  circle: {
    width: 15,
    height: 15,
    backgroundColor: '#747474',
    borderRadius: 20,
    marginHorizontal: 3
  },
  circleActive: {
    width: 17,
    height: 17,
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 3
  },
  socialContainer: {
    alignItems: 'center',
  },
  socialArticle: {
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    fontFamily: 'Bahianita-Regular',
  },
  socialIconsContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  socialIcon1: {
    marginHorizontal: 10,
    color: 'blue'
  },
  socialIcon2: {
    marginHorizontal: 10,
    color: 'rgb(255, 131, 255)'
  }
});