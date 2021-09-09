import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button,Linking } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default function Decoder(props) {
 
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    const handleBarCodeScanned = ({ type, data }) => {
        props.setHisto({...props.histo, [Object.keys(props.histo).length+1]: data }),
        alert (data),
        setScanned(true);
      
    //   Linking.canOpenURL(data)

    //   .then((supported) => {
    //     if (!supported) {
    //       alert("Can't handle url: " + data);
    //     } else {
    //       return Linking.openURL(data); 
    //     }
    //   })
    //   .catch((err) => console.error('An error occurred', err));
    };
  
    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }

    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },

    title:{
        fontSize:50,


    }
  });
  