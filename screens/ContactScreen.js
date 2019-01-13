import React from 'react';
import { ScrollView, View, StyleSheet, Platform, Text, Image } from 'react-native';
import { Card, Icon } from 'react-native-elements';

export default class AboutUsScreen extends React.Component {
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
              KONTAKT
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

          <View style={{
            width:'90%',
            marginLeft:'5%',
            marginTop:7
          }}>
          <Image
            style={{width:'100%', height:200}}
            resizeMode="cover"
            source={require('../assets/images/map.png')}
          />
          </View>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#919191',
                fontSize: 20
              }}>
              Direktni Kontakti
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 10,
                color:"#919191"
              }}>
              (radnim danima od 9:00 do 16:00)
            </Text>
          </View>

          <Card title="MC Power Bratislava">
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{width: '20%'}} >
              <Icon
                name='local-phone'
                color='#ff3a3a' />
              </View>
              <View style={{width: '80%'}} >
                <Text>+421-908-409-597</Text>
              </View>
            </View>
            
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{width: '20%'}} >
              <Icon
                name='email'
                color='#ff3a3a' />
              </View>
              <View style={{width: '80%'}} >
                <Text>info@mc-power.sk</Text>
              </View>
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{width: '20%'}} >
              <Icon
                name='location-city'
                color='#ff3a3a' />
              </View>
              <View style={{width: '80%'}} >
                <Text>Dunajská 8, 811 08 Bratislava, Slovačka</Text>
              </View>
            </View>
          </Card>

          <Card title="MC Power Prešov">
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{width: '20%'}} >
              <Icon
                name='local-phone'
                color='#ff3a3a' />
              </View>
              <View style={{width: '80%'}} >
                <Text>+421-903-034-121</Text>
              </View>
            </View>
            
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{width: '20%'}} >
              <Icon
                name='email'
                color='#ff3a3a' />
              </View>
              <View style={{width: '80%'}} >
                <Text>varganin@mc-power.sk</Text>
              </View>
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{width: '20%'}} >
              <Icon
                name='location-city'
                color='#ff3a3a' />
              </View>
              <View style={{width: '80%'}} >
                <Text>Švábska 1, 080 05 Prešov, Slovačka</Text>
              </View>
            </View>
          </Card>

          <Card title="MC Power Srbija" style={{marginBottom: 10}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{width: '20%'}} >
              <Icon
                name='local-phone'
                color='#ff3a3a' />
              </View>
              <View style={{width: '80%'}} >
                <Text>+381-694-110-415</Text>
              </View>
            </View>
            
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{width: '20%'}} >
              <Icon
                name='email'
                color='#ff3a3a' />
              </View>
              <View style={{width: '80%'}} >
                <Text>mitrovic@mc-power.eu</Text>
              </View>
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{width: '20%'}} >
              <Icon
                name='location-city'
                color='#ff3a3a' />
              </View>
              <View style={{width: '80%'}} >
                <Text>Bulevar Oslobodjenja 11, 210 00 Novi Sad, Srbija</Text>
              </View>
            </View>
          </Card>
          
        </ScrollView>
      </View>
    );
  }
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

