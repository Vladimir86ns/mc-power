import React, { Component } from 'react';
import { View, StyleSheet, Platform, Text, Image } from 'react-native';

class ProjectManagerSecond extends Component {

  render() {
    return (
      <View>
        <View style={{width: '100%', height: 50, marginTop: 20 }} >
          <Text style={{fontWeight: 'bold', fontSize: 20, textAlign:'center'}}>Mgr. Daniel Varganin</Text>
          <Text style={{textAlign:'center'}}>Project manager</Text>
        </View>
        <View style={{width: '100%', height: 200, paddingLeft: '5%', justifyContent: 'center', alignItems: 'center'}} >
          <Image
            style={{width: '50%', paddingBottom: 40, borderRadius: 10}}
            source={require('../../assets/images/project-manager.png')}
          />
        </View>
        <View style={{width: '100%', paddingLeft: '5%', paddingRight: '5%',}} >
          <Text>
          Sa Matušom smo prijatelji dugi niz godina gde smo odrasli u zajedničkom gradu.
            Mislim da je osnova dugotrajnog prijateljstva ili dugoročnog partnerstva znati se
            složiti, ponekad napraviti kompromis, uzajamno
          pomagati i biti lojalan jedan prema drugom.Postavljanjem nekoliko osnovnih pravila stvari 
          mogu funkcionisati ispravno, bilo da je to prijateljstvo ili posao.
          Takođe smo radili na nekoliko jednokratnih projekata u kojima sam bio fokusiran na 
          komunikaciju i direktan kontakt sa našim poslovnim partnerima. Ja spadam među ljude 
          koji su direktni i trudim se tačno nazvati stvari, što pomaže mnogo puta i da smanji 
          napetost i očisti atmosferu. U mogućnosti smo da pronađemo kompromise i efikasna rešenja 
          za individualne zahteve partnera. Kao deo napora naše kompanije, pokušavamo da izađemo 
          u susret našim partnerima ali i zaposlenima - saradnicima, što zahtijeva delotvornu 
          redistribuciju zadataka, vremena i novca.

          Zato pokušavam da postavim ove odnose ispravno, bilo prema našim partnerima ili našim 
          zaposlenima - saradnicima (kao što je govorio Tomaš Baťa).

          Zajedno ćemo to savladati 😊
          </Text>
        </View>
      </View>
    );
  }
}

export default ProjectManagerSecond;

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

