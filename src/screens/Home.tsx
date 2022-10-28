import React, {type PropsWithChildren} from "react";
import {Text, View, StyleSheet} from "react-native";

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

const Home = () => {
  return (
    <View>
      <Section title="Sign Up">
        <Text style={styles.highlight}>New</Text> user? Go to Sign Up.
      </Section>
      <Section title="Login">Login with your username.</Section>
      <Section title="Learn More">Read the docs to discover what to do next:</Section>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: "black",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default Home;
