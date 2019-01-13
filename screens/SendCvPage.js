import React from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';

import { ExpoConfigView } from '@expo/samples';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'

export default class SendCvPage extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View>
        <ScrollView>
          <View 
          style={{
            marginBottom: 15
          }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20
              }}>
              ISPUNITE ONLINE VAŠ CV
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20
              }}>
              ili nas pozovite na broj – 069/4110415
            </Text>
            <View
              style={{
                borderBottomColor: '#8e8e8e',
                borderBottomWidth: 1,
                maxWidth: '100%'
              }}
            />
          </View>

          <View 
            style={{
              paddingLeft: '10%',
              paddingRight: '10%'
            }}>
            <Text style={{ fontSize: 22, color: '#8e8e8e' }}>Ime i prezime</Text>
            <FormInput onChangeText={() => {}} placeholder="(obavezno)"/>
            <View
              style={{
                borderBottomColor: '#8e8e8e',
                borderBottomWidth: 1,
                maxWidth: '100%'
              }}
            />
          </View>

          <View 
            style={{
              paddingLeft: '10%',
              paddingRight: '10%'
            }}>
            <Text style={{ fontSize: 22, color: '#8e8e8e' }}>Starost</Text>
            <FormInput onChangeText={() => {}} placeholder="(obavezno)"/>
            <View
              style={{
                borderBottomColor: '#8e8e8e',
                borderBottomWidth: 1,
                maxWidth: '100%'
              }}
            />
          </View>

          <View 
            style={{
              paddingLeft: '10%',
              paddingRight: '10%'
            }}>
            <Text style={{ fontSize: 22, color: '#8e8e8e' }}>Telefonski kontakt</Text>
            <FormInput onChangeText={() => {}} placeholder="(obavezno)"/>
            <View
              style={{
                borderBottomColor: '#8e8e8e',
                borderBottomWidth: 1,
                maxWidth: '100%'
              }}
            />
          </View>

          <View 
            style={{
              paddingLeft: '10%',
              paddingRight: '10%'
            }}>
            <Text style={{ fontSize: 22, color: '#8e8e8e' }}>Trenutno prebivaliste</Text>
            <FormInput onChangeText={() => {}} placeholder="(obavezno)"/>
            <View
              style={{
                borderBottomColor: '#8e8e8e',
                borderBottomWidth: 1,
                maxWidth: '100%'
              }}
            />
          </View>

          <View 
            style={{
              paddingLeft: '10%',
              paddingRight: '10%'
            }}>
            <Text style={{ fontSize: 22, color: '#8e8e8e' }}>Poslednje zaposlenje</Text>
            <FormInput onChangeText={() => {}} placeholder="(obavezno)"/>
            <View
              style={{
                borderBottomColor: '#8e8e8e',
                borderBottomWidth: 1,
                maxWidth: '100%'
              }}
            />
          </View>

          <View 
            style={{
              paddingLeft: '10%',
              paddingRight: '10%'
            }}>
            <Text style={{ fontSize: 22, color: '#8e8e8e' }}>Svedocanstva</Text>
            <FormInput onChangeText={() => {}} placeholder="Ako imate bilo kakva svedocanstva ili certifikate, upisite ih ovde..."/>
            <View
              style={{
                borderBottomColor: '#8e8e8e',
                borderBottomWidth: 1,
                maxWidth: '100%'
              }}
            />
          </View>

          <View 
            style={{
              paddingLeft: '10%',
              paddingRight: '10%'
            }}>
            <Text style={{ fontSize: 22, color: '#8e8e8e' }}>VD</Text>
            <FormInput onChangeText={() => {}} placeholder="Ako imate VD, koje kategorije?"/>
            <View
              style={{
                borderBottomColor: '#8e8e8e',
                borderBottomWidth: 1,
                maxWidth: '100%'
              }}
            />
          </View>

          <View 
            style={{
              paddingLeft: '10%',
              paddingRight: '10%',
              marginBottom: 10
            }}>
            <Text style={{ fontSize: 22, color: '#8e8e8e' }}>Ostalo</Text>
            <FormInput onChangeText={() => {}} placeholder="Ovde mozete da upisete, sta god mislite da je vazno..."/>
            <View
              style={{
                borderBottomColor: '#8e8e8e',
                borderBottomWidth: 1,
                maxWidth: '100%'
              }}
            />
          </View>

          <Button
          title='Posalji CV'
          backgroundColor='#f74747'
          borderRadius={15}/>

        </ScrollView>
      </View>
    );
  }
}
