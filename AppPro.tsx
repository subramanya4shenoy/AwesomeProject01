import React from 'react';

import {View, Text, StyleSheet, useColorScheme} from 'react-native';

const AppPro = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.darkText : styles.whiteText}>woe!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#ff0000',
  },
  darkText: {
    color: '#00FF00',
  },
});

export default AppPro;
