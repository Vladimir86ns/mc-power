import React, { Component } from 'react';
import { View, StyleSheet, Platform, Text, Image } from 'react-native';

class ProjectManger extends Component {

  render() {
    return (
      <View>
        <View style={{width: '100%', height: 50, marginTop: 20 }} >
          <Text style={{fontWeight: 'bold', fontSize: 20, textAlign:'center'}}>Štefan Tatljak</Text>
          <Text style={{textAlign:'center'}}>Project manager</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: '50%', height: 200, paddingLeft: '5%'}} >
            <Image
              style={{width: '100%', height: '100%', paddingLeft: '5%', paddingBottom: 40, borderRadius: 10}}
              source={require('../../assets/images/manager.png')}
            />
          </View>
          <View style={{width: '50%', height: '100%', paddingRight: '5%', paddingLeft: '2%'}} >
          <Text>
            Matuša poznajem oko tri godine.
            Kada sam se pridružio MC POWER-u, u okviru moje kompanije radio sam na nekoliko radnih mjesta 
            gdje sam dobio priliku da pokažem da je u meni nešto više od onoga šta su drugi mislili. Još I 
            danas se sećam kako mi je Matuš govorio neboj
          </Text>
          </View>
        </View>
        <View style={{width: '100%', height: 270, paddingLeft: '5%', paddingRight: '5%',}} >
          <Text>
            se Stefane, step by step – u prevedenom korak 
            po korak Danas radim kao menadžer projekta u našoj kompaniji, I zadužen sam za desetine radnika 
            i nekoliko odvojenih projekata. Pošto sam prešao manuelnim radovima koje nudimo, mogu razumjeti 
            i naše partnerke i naše zaposlene - saradnike. Gledanje problema sa obe strane dalo mi je prednost, 
            kako druga strana gleda na stvari i kojih stvari se plaši, i pokušavam da ih eliminišem.
            Jasna i razumljiva pravila su osnova za dobru saradnju, izbegavajući neispunjenim očekivanjima 
            jedne strane. Od samog početka pokušavamo da jasno, otvoreno i pošteno pregovaramo sa našim 
            partnerima ili našim kolegama, što je pogodno za međusobno sjajnu saradnju.
            Zajedno ćemo to savladati 😊
          </Text>
        </View>
      </View>
    );
  }
}

export default ProjectManger;

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

