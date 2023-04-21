import { Animated, Easing } from 'react-native';
import { makeAutoObservable } from 'mobx';

export class ToastStore {
  message: string = '';

  toast: Animated.Value = new Animated.Value(0);

  constructor() {
    makeAutoObservable(this);
  }

  showMessage = (title: string, time: number = 2000) => {
    this.setMessage(title);

    this.toast.setValue(0);

    Animated.timing(this.toast, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(() => {
      const interval = setTimeout(() => {
        this.hideToast();

        clearTimeout(interval);
      }, time);
    });
  };

  hideToast = () => {
    Animated.timing(this.toast, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  };

  setMessage = (value: string) => {
    this.message = value;
  };
}
