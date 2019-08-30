import * as React from "react"
import { Alert, Button, Image, Text, View, StyleSheet } from 'react-native'

export default class Home extends React.Component {
    render() {
        return (
        <View style={styles.container}>
        <Text style={styles.paragraph}>
          Yo!
        </Text>
        <Button 
        title="Enter"
        onPress={swagFunc}
        color="#841584"
        >

        </Button>
        <Image style={styles.logo} source={require('../assets/swag.png')} />
      </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    },
    paragraph: {
      margin: 24,
      marginTop: 0,
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    logo: {
      height: 128,
      width: 128,
    }
  });

const swagFunc = () => Alert.prompt('Enter a value', null, (text) =>
console.log('You entered ' + text)
);
  