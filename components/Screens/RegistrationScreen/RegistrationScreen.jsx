import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {
  Text,
  View,
  Platform,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

import { useFonts } from 'expo-font';

import imgBg from '../../../assets/Photo-BG.png';
import avatar from '../../../assets/Avatar.png';
import avatarDefault from '../../../assets/avatar-default.png';

import addIcon from '../../../assets/icons/addIcon.png';
import delAvatarIcon from '../../../assets/icons/dellIcon.png';

import { styles } from './RegistrationScreen.styled';

const initialState = {
  name: '',
  email: '',
  password: '',
};

export default function RegistrationScreen() {
  const navigation = useNavigation();
  const [state, setState] = useState(initialState);
  const [status, setStatus] = useState('checked');
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [hidePass, setHidePass] = useState(true);

  const [useAvatar, setAvatar] = useState(avatarDefault);

  const [iconAdd, setIconAdd] = useState(addIcon);

  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const [isFocused, setIsFocused] = useState({
    name: false,
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

  const onClickAdd = () => {
    setStatus(status === 'checked' ? 'unchecked' : 'checked');

    if (status === 'checked') {
      setIconAdd(delAvatarIcon);
      setAvatar(avatar);
      return;
    }

    setAvatar(avatarDefault);
    setIconAdd(addIcon);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <Image source={imgBg} style={styles.imgBg} />
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? '' : ''}>
          <View
            style={{ ...styles.form, paddingBottom: isShowKeyboard ? 200 : 78 }}
          >
            <View style={styles.rectangle}>
              <Image style={styles.avatar} source={useAvatar} />
            </View>
            <TouchableWithoutFeedback onPress={onClickAdd}>
              <Image source={iconAdd} style={styles.iconAddSt} />
            </TouchableWithoutFeedback>

            <Text style={styles.text}>Регистрация</Text>
            <TextInput
              placeholder="Логин"
              value={state.name}
              style={
                isFocused.name
                  ? [
                      styles.input,
                      { borderColor: '#FF6C00', backgroundColor: '#FFFFFF' },
                    ]
                  : styles.input
              }
              onChangeText={value =>
                setState(prevState => ({ ...prevState, name: value }))
              }
              onFocus={() => {
                setIsShowKeyboard(true);
                handleInputFocus('name');
              }}
              onBlur={() => handleInputBlur('name')}
            />
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
              <Text style={styles.inputBtnText}>Зарегистрироваться</Text>
            </TouchableOpacity>
            <Text
              style={styles.logIn}
              onPress={() => navigation.navigate('Login')}
            >
              Уже есть аккаунт? Войти
            </Text>
          </View>

          <StatusBar style="auto" />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
