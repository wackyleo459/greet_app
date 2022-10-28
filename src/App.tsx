/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {startTransition, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import {notify_backend_backend} from '../declarations/notify_backend_backend';
import {greet_dapp} from '../declarations/greet_dapp';
import Input from './components/Input';
import CustomButton from './components/CustomButton';
import 'react-native-polyfill-globals/auto';

const App = () => {
  const [showText, setShowText] = React.useState(true);
  const [value, setValue] = React.useState('');
  const [result, setResult] = React.useState('I');
  const [blink, setBlink] = React.useState(true);

  const greetName = async (input: string) => {
    setResult('I');
    setBlink(true);
    //Interact with foo actor, calling the greet method
    try {
      const greeting = await greet_dapp.greet(input);
      setResult(greeting);
      setBlink(false);
      setShowText(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // blink effect
    const interval = setInterval(() => {
      setShowText((text: Boolean) => !text);
    }, 300);
    if (!blink) {
      return clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [blink]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor={'beige'} />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              padding: 10,
            }}>
            <Image
              source={require('./assets/icon-192x192.png')}
              style={{width: 60, height: 60}}
            />
            <Text>Build for the IC</Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.headerText}>Greet App</Text>
          </View>
          <View style={styles.greetForm}>
            <Input
              placeholder={'Enter your name here'}
              onChange={text => setValue(text)}
              title={'Name'}
            />
            <CustomButton
              width={200}
              title="Submit"
              onPress={e => {
                e.preventDefault();
                greetName(value);
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 14,
              paddingLeft: 33,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            Response
          </Text>
          <View style={styles.sectionResponse}>
            <Text
              style={{
                textAlign: 'center',
                color: 'yellow',
                display: showText ? 'flex' : 'none',
              }}>
              {result}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'silver',
    flexGrow: 1,
  },
  header: {
    height: 'auto',
    padding: 28,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  greetForm: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    margin: 20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  highlight: {
    fontWeight: '700',
  },
  sectionResponse: {
    padding: 20,
    marginTop: 10,
    marginHorizontal: 30,
    minHeight: 70,
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
  },
});

export default App;
