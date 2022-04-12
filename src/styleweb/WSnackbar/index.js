import React from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Animated
} from "react-native-web";

const toasts = () => {
  var animatedValue = new Animated.Value(-70);
  const callToast = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 350
    }).start(closeToast());
  };

  const closeToast = () => {
    setTimeout(() => {
      Animated.timing(animatedValue, {
        toValue: -70,
        duration: 350
      }).start();
    }, 2000);
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            onPress={() => callToast()}
            underlayColor="ddd"
            style={{
              height: 60,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "ededed",
              borderWidth: 1,
              borderColor: "ddd"
            }}
          >
            <Text>Open Success Toast</Text>
          </TouchableHighlight>
        </View>
      </View>
      <Animated.View
        style={{
          transform: [{ translateY: animatedValue }],
          height: 70,
          backgroundColor: "green",
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          justifyContent: "center"
        }}
      >
        <Text
          style={{
            marginLeft: 10,
            color: "white",
            fontSize: 16,
            fontWeight: "bold"
          }}
        >
          Hello from Toast!
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70
  },
  buttonContainer: {
    marginTop: 10
  }
});
export default toasts;
