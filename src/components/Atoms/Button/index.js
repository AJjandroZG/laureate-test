import React, { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
} from "react-native";
import Icon from "../Icon";
import styles from "./styles";
import { THEME } from "../../../commons/styles";

const ButtonWrapper = ({
  title,
  loading,
  disabled,
  event,
  background = THEME.secondary,
  textColor = THEME.blackColor,
  height = 45,
  borderRadius = 0,
  marginTop = 15,
  width = "100%",
  style,
  labelStyles,
  iconName,
  sizeIcon,
  styleIcon = styles.icon,
  iconColor = THEME.whiteColor,
  iconLeft,
  iconRigth
}) => {
  const buttonStyles = {
    backgroundColor: background,
    height,
    borderRadius,
    marginTop,
    width: "100%",
    ...styles.root,
    ...style,
  };
  const buttonEffectRef = useRef(new Animated.Value(1)).current;

  onPressIn = () => {
    Animated.timing(buttonEffectRef, {
      toValue: 0.9,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  onPressOut = () => {
    Animated.timing(buttonEffectRef, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
    setTimeout(() => event(), 300);
  };

  return (
    <Animated.View style={{ width, transform: [{ scale: buttonEffectRef }] }}>
      <TouchableOpacity
        disabled={disabled || loading || !event}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={buttonStyles}
        activeOpacity={0.8}
      >
        <View style={styles.row}>
          <View style={[styles.col1, styles.centerItems]}>
            {iconLeft && iconName && (
              <Icon
                name={iconName}
                color={iconColor}
                style={styleIcon}
                size={sizeIcon ? sizeIcon : height * 0.8}
              />
            )}
            <Text style={[styles.title, { color: textColor, ...labelStyles }]}>
              {title}
            </Text>
          </View>
          {iconRigth && iconName && (
              <Icon
                name={iconName}
                color={iconColor}
                style={styleIcon}
                size={sizeIcon ? sizeIcon : height * 0.8}
              />
            )}
          {loading && (
            <View style={[styles.col2, styles.centerItems]}>
              <ActivityIndicator size="small" color={THEME.whiteColor} />
            </View>
          )}
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ButtonWrapper;
