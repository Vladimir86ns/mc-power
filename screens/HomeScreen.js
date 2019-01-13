import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { Card, ListItem, Button } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#919191',
                fontSize: 20
              }}>
              POSLOVNA PONUDA
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 10,
                color:"#919191"
              }}>
              Cenimo pošten rad i lojalnosti naših radnika. Zato manadžment MC Power čine ljudi 
              koji su započinjali na tim pozicijama. Gde želite Vi da napradujete?
            </Text>
            <View
              style={{
                marginTop: 3,
                borderBottomColor: '#8e8e8e',
                borderBottomWidth: 1,
                maxWidth: '100%',
                marginTop: 5
              }}
            />
          </View>

          <Card title="Zavarivač MIG – CO2 (Subotica)">
              <View style={styles.user}>
                <Image
                  style={{width:'100%', height:200}}
                  resizeMode="cover"
                  source={require('../assets/images/slika1.png')}
                />
                <Text style={{marginTop: 10}}>Za proizvodne operacije u Srbiji imamo poziciju "CO2 zavarivač" tokom cele godine. ...</Text>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginTop: 14,
                    maxWidth: 120
                  }}
                />
                <Text>
                  <Text>by </Text><Text style={{fontWeight: 'bold'}}>MC Power</Text>
                </Text>
              </View>
          </Card>
          <Card title="Farbar (Slovačka, Srbija)">
              <View style={styles.user}>
              <Image
                  style={{width:'100%', height:200}}
                  resizeMode="cover"
                  source={require('../assets/images/slika3.png')}
                />
                <Text style={{marginTop: 10}}>Za razne proizvodne operacije imamo poziciju „farbar“ tokom cele godine. ...</Text>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginTop: 14,
                    maxWidth: 120
                  }}
                />
                <Text>
                  <Text>by </Text><Text style={{fontWeight: 'bold'}}>MC Power</Text>
                </Text>
              </View>
          </Card>
          <Card title="Operator U Proizvodnji (Slovačka)">
              <View style={styles.user}>
              <Image
                  style={{width:'100%', height:200}}
                  resizeMode="cover"
                  source={require('../assets/images/slika4.png')}
                />
                <Text style={{marginTop: 10}}>Za razne proizvodne operacije imamo poziciju „operator u proizvodnji“ tokom cele godine. ...</Text>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginTop: 14,
                    maxWidth: 120
                  }}
                />
                <Text>
                  <Text>by </Text><Text style={{fontWeight: 'bold'}}>MC Power</Text>
                </Text>
              </View>
          </Card>
          <Card title="Bravar (Srbija)">
              <View style={styles.user}>
              <Image
                  style={{width:'100%', height:200}}
                  resizeMode="cover"
                  source={require('../assets/images/slika5.png')}
                />
                <Text style={{marginTop: 10}}>Za različite proizvodne operacije u Srbiji, imamo poziciju „Bravar“ tokom cele godine. ...</Text>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginTop: 14,
                    maxWidth: 120
                  }}
                />
                <Text>
                  <Text>by </Text><Text style={{fontWeight: 'bold'}}>MC Power</Text>
                </Text>
              </View>
          </Card>
          <Card title="Zavarivač CO2 (EU)">
              <View style={styles.user}>
              <Image
                  style={{width:'100%', height:200}}
                  resizeMode="cover"
                  source={require('../assets/images/slika2.png')}
                />
                <Text style={{marginTop: 10}}>Za razne proizvodne operacije u EU imamo poziciju „CO2 zavarivač“ tokom cele godine. ...</Text>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginTop: 14,
                    maxWidth: 120
                  }}
                />
                <Text>
                  <Text>by </Text><Text style={{fontWeight: 'bold'}}>MC Power</Text>
                </Text>
              </View>
          </Card>
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
