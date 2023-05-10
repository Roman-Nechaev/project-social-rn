import { useState, useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { useFonts } from 'expo-font';

import { styles } from './LoginScreen.styled';

import imgBg from '../../../assets/Photo-BG.png';

const initialState = {
  email: '',
  password: '',
};

export default function LoginScreen() {
  const navigation = useNavigation();

  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [hidePass, setHidePass] = useState(true);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false,
  });

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', e =>
      setKeyboardHeight(e.endCoordinates.height)
    );
    const hideSubscription = Keyboard.addListener('keyboardWillHide', () =>
      setKeyboardHeight(0)
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const [fontsLoaded] = useFonts({
    'Roboto-Black': require('../../../assets/fonts/Roboto/Roboto-Black.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const onLogin = () => {
    setIsShowKeyboard(false);

    console.log(state);
    setState(initialState);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleInputFocus = inputName => {
    setIsFocused({
      [inputName]: true,
    });
  };
  const handleInputBlur = inputName => {
    setIsFocused({
      [inputName]: false,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <Image source={imgBg} style={styles.imgBg} />
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? '' : ''}>
          <View
            style={{ ...styles.form, paddingBottom: isShowKeyboard ? 230 : 78 }}
          >
            <Text style={styles.text}>Войти</Text>

            <TextInput
              placeholder="Адрес электронной почты"
              value={state.email}
              style={
                isFocused.email
                  ? [
                      styles.input,
                      { borderColor: '#FF6C00', backgroundColor: '#FFFFFF' },
                    ]
                  : styles.input
              }
              onChangeText={value =>
                setState(prevState => ({ ...prevState, email: value }))
              }
              onFocus={() => {
                setIsShowKeyboard(true);
                handleInputFocus('email');
              }}
              onBlur={() => handleInputBlur('email')}
            />
            <View>
              <TextInput
                placeholder="Пароль"
                textContentType="addressCity"
                value={state.password}
                style={
                  isFocused.password
                    ? [
                        styles.input,
                        { borderColor: '#FF6C00', backgroundColor: '#FFFFFF' },
                      ]
                    : styles.input
                }
                secureTextEntry={hidePass ? true : false}
                onChangeText={value =>
                  setState(prevState => ({ ...prevState, password: value }))
                }
                onFocus={() => {
                  setIsShowKeyboard(true);
                  handleInputFocus('password');
                }}
                onBlur={() => handleInputBlur('password')}
              />
              <Text
                style={styles.visibilityPass}
                onPress={() => setHidePass(!hidePass)}
              >
                Показать
              </Text>
            </View>
            <TouchableOpacity style={styles.inputBtn} onPress={onLogin}>
              <Text style={styles.inputBtnText}>Войти</Text>
            </TouchableOpacity>

            <Text
              style={styles.logIn}
              onPress={() => navigation.navigate('Registration')}
            >
              Нет аккаунта? Зарегистрироваться
            </Text>
          </View>

          <StatusBar style="auto" />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-end',
//   },
//   imgBg: {
//     flex: 1,

//     position: 'absolute',
//     justifyContent: 'flex-end',
//     left: 0,
//     top: 0,

//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },

//   form: {
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 25,
//   },
//   text: {
//     marginTop: 32,
//     marginBottom: 32,
//     fontWeight: 500,
//     fontSize: 30,
//     lineHeight: 35,
//     textAlign: 'center',
//     letterSpacing: 0.01,

//     color: '#212121',
//   },
//   input: {
//     width: 343,
//     height: 50,

//     marginBottom: 15,

//     padding: 10,

//     fontSize: 16,
//     lineHeight: 19,

//     borderWidth: 1,
//     borderRadius: 8,

//     backgroundColor: '#F6F6F6',
//     borderColor: '#E8E8E8',
//   },
//   visibilityPass: {
//     position: 'absolute',
//     top: '25%',
//     right: 15,

//     fontSize: 16,
//     lineHeight: 19,
//     color: '#1B4371',
//   },
//   inputBtn: {
//     width: 343,
//     height: 50,

//     marginTop: 43,

//     borderRadius: 100,
//     justifyContent: 'center',

//     backgroundColor: '#FF6C00',
//   },

//   inputBtnText: {
//     fontSize: 16,
//     lineHeight: 19,
//     color: '#FFFF',

//     textAlign: 'center',
//   },
//   logIn: {
//     fontSize: 16,
//     lineHeight: 19,

//     marginTop: 16,

//     color: '#1B4371',
//   },
// });
