import React, { Component } from 'react';
import { View, StyleSheet, Platform, Text, Image } from 'react-native';

class Director extends Component {

  render() {
    return (
      <View>
          <View style={{width: '100%', height: 50 }} >
            <Text style={{fontWeight: 'bold', fontSize: 20, textAlign:'center'}}>JUDr. Matúš Čorba</Text>
            <Text style={{textAlign:'center'}}>Direktor / Vlasnik</Text>
          </View>
        <View style={{width: '100%', height: 200, paddingLeft: '5%', justifyContent: 'center', alignItems: 'center'}} >
          <Image
            style={{width: '50%', paddingBottom: 40, borderRadius: 10}}
            source={require('../../assets/images/vlasnik.png')}
          />
        </View>
          <View style={{width: '100%', paddingLeft: '5%', paddingRight: '5%',}} >
            <Text>
            MC POWER osnovao sa ciljem da izgradim snažnu i stabilnu kompaniju u oblasti 
            metaloprerađivačke i građevinske delatnosti, posebno po personalnoj strani.
            Naši počeci nisu bili laki na tržištu među važnije igrače, gde sada zapošljavamo 
            više od 100 radnika. U 2017. godini zabeležili smo rast od preko 400% godišnje. 
            Danas smo aktivni u nekoliko zemalja EU kao i u zemljama Trećeg sveta. Nastojimo 
            da osiguramo sveobuhvatnu uslugu našim klijentima ključ u ruke, gde nakon postavljanja
             pravila preuzimamo na sebe posebne zahteve i oslobađamo klijente briga po kadrovskoj 
             osnovi. Našim saradnicima (ili zaposlenima - Tomaš Baťa je govorio samo saradnici) 
             osiguravamo najbolje radno okruženje.
             Od samog početka obuke do prilika za rad sa mogućnošću smeštaja, eventualnog rasta kolege. 
             Znam da ne živimo u idealnom svetu ili u idealnim uslovima, ali sigurno verujem da se stvari 
             mogu učiniti tako da su naši partneri i naše kolege sretni. Cilj naše kompanije je da radimo 
             sa ljudima koji znaju ovaj pristup oceniti, po mogućnosti ceniti.
            Razvoj naših projekata u Slovačkoj ili podružnici u Srbiji 2018. godine pokazuje da ćemo ponovo 
            imati izuzetan rast iz godine u godinu, ali i rast u drugim zemljama jasno pokazuje da će MC POWER 
            postati jedan od najvažnijih igrača u kadrovskoj oblasti u srednjoj Evropi.
            Čitav naš tim u MC POWER-u, na koji sam inače jako ponosan, sastoji se od lojalnih ljudi prema 
            firmi koji žele nešto da učine u životu i verujemo u ciljeve koje smo postavili. Zahvaljujući 
            tome, mi nismo samo izuzetni, već i prijatelji, prijatelji koji znaju gde žele da napreduju, 
            prijatelji koji znaju da imaju svoja prava, ali i svoje dužnosti.
            Zajedno ćemo to savladati 😊
            </Text>
          </View>
      </View>
    );
  }
}

export default Director;

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

