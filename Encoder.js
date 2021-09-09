import * as React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

// Simple usage, defaults for all but the value
export default function Encoder() {
    const [data,setData] = React.useState('http://rb-portfolio.projets.simplon-roanne.com/');
  return (
    <View style={styles.container}>
        <TextInput  style={styles.input} value={data} onChangeText={(text)=>setData(text)} />
        <QRCode
            value={data.length > 0 ? data: 'http://rb-portfolio.projets.simplon-roanne.com/' }
        />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
 
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }
});