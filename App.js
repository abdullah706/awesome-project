import React, {Component } from 'react';
import { View, Alert,Button,Text, Image, ScrollView, StyleSheet, Platform } from 'react-native';
import Box from './componet/Box';

import MyWeb from './componet/MyWeb';

class App extends React.Component  {
  
  render(){

  
  return (
     
      <ScrollView style={styles.container}>
             <WebView/>
        <View>
         
            <Text style={styles.first}>one</Text>
            <Text style={styles.title}>two</Text>
            <Text style={styles.third}>three</Text>
        </View>
      


        
        <Image source={require('./assets/konexio-logo_1.png')}
         
        />
          <Image source={{uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png'}}
          style= {{width: 100, height: 100}}
         />
    
    <View>
     
      { <Button
        title="Press me"
        onPress={() => Alert.alert('HY MY HONY')}
      /> }
    </View>
      </ScrollView>
    
  );
}
}
const styles = StyleSheet.create({
  container: {
    
    backgroundColor : 'black'
  },
  first: {
    fontSize: 30,
    color: 'white',
    marginVertical: 80
  },
  second: {
    color: 'white',
    marginVertical: 80
  },
  Text:{
    fontSize:40,
    color: 'white',
  },
  third: {
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 80
  }

});     

export default App;