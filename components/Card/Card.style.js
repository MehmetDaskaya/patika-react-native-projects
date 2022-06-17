import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e8e8",
    borderRadius: 10,
    margin: 10,
  },
  image: {
    height: Dimensions.get('window').height / 3.5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    resizeMode: 'contain',
    margin: 10,
  },
  innerContainer: {
    padding: 5,
    marginLeft: 8,
  },
  title: {
    color:"#000",
    fontWeight: '700',
    fontSize: 20,
  },
  price: {
    marginTop: 5,
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 17,
  },
  TrueColor: {
    fontSize: 17,
    fontWeight: '700',
    color: 'green',
    marginTop: 5,
  },
  FalseColor: {
    fontSize: 17,
    fontWeight: '700',
    color: 'red',
    marginTop: 5,
  },

})