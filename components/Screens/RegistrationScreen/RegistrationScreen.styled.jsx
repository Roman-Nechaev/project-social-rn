import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imgBg: {
    flex: 1,

    position: 'absolute',
    justifyContent: 'flex-end',
    left: 0,
    top: 0,

    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  iconAddSt: {
    position: 'absolute',
    top: '6%',
    right: '31%',
    zIndex: 9,
  },

  rectangle: {
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    position: 'absolute',
    top: '-10%',
    overflow: 'hidden',
  },
  avatar: { width: 120, height: 120 },

  form: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
  },
  text: {
    marginTop: 92,
    marginBottom: 32,
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,

    color: '#212121',
  },
  input: {
    width: 343,
    height: 50,

    marginBottom: 15,

    padding: 10,

    fontSize: 16,
    lineHeight: 19,

    borderWidth: 1,
    borderRadius: 8,

    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
  },
  visibilityPass: {
    position: 'absolute',
    top: '25%',
    right: 15,

    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
  inputBtn: {
    width: 343,
    height: 50,

    marginTop: 43,

    borderRadius: 100,
    justifyContent: 'center',

    backgroundColor: '#FF6C00',
  },

  inputBtnText: {
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFF',

    textAlign: 'center',
  },

  logIn: {
    fontSize: 16,
    lineHeight: 19,

    marginTop: 16,

    color: '#1B4371',
  },
});
