import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Platform, Text, Image } from 'react-native';

class Company extends Component {

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: '60%', height: 240, paddingLeft: '5%'}} >
          <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 20, textAlign:'right'}}>MC Power</Text>
          <Text>
            Korak ka uspešnijoj budućnosti
            Slobodno nas kontaktirajte sa bilo kojim 
            personalnim zahtevom u oblasti obrade metala 
            i konstrukcije. Rado ćemo vam ponuditi ponudu 
            prilagođenu Vašem zahtevu, a zatim pružiti uslugu 
            ``ključ u ruke``. Naš osnovni poslovni tim čine...
          </Text>
        </View>
        <View style={{width: '40%', height: 240, paddingRight: '5%'}} >
        <Image
          style={{width: '100%', height: '60%', paddingLeft: '5%', marginTop: '40%'}}
          resizeMode="cover"
          source={require('../../assets/images/icon.png')}
        />
        </View>
      </View>
    );
  }
}

export default Company;

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

