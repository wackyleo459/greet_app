/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, { startTransition, useEffect, type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { AuthClient } from '@dfinity/auth-client';
import { blsVerify, Actor } from '@dfinity/agent';
import { notify_backend_backend } from '../declarations/notify_backend_backend';
import { greet_dapp } from '../declarations/greet_dapp';
import Input from './components/Input';
import CustomButton from './components/CustomButton';


const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionDescription}>{children}</Text>
    </View>
  );
};

const App = () => {

  const [value, setValue] = React.useState('');
  const [result, setResult] = React.useState('');
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [authClient, setAuthClient] = React.useState(null);
  const [actor, setActor] = React.useState(null);

  const greetName = async (input: string) => {
    //Interact with foo actor, calling the greet method
    try {
      const greeting = await greet_dapp.greet(input);
      console.log('this is greeting:', greeting);
      // setResult(greeting);
    } catch (error) {
      console.error('this is error', error);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={'beige'} />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
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
          <Text style={{fontSize: 14, paddingLeft: 33, fontWeight: 'bold', marginTop: 10}}>Response</Text>
          <View style={styles.sectionResponse}>
            <Text style={{textAlign: 'center', color: 'yellow'}}>{result}</Text>
          </View>
          <Section title="Sign Up">
            <Text style={styles.highlight}>New</Text> user? Go to Sign Up.
          </Section>
          <Section title="Login">Login with your username.</Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flexGrow: 1,
  },
  header: {
    height: 'auto',
    padding: 28,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 22,
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
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
  },
});

export default App;