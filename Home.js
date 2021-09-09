import React from 'react';
import { Text, View } from 'react-native';

export default function HomeScreen(props) {

  console.log(props);
  function displayHistory(){
    return Object.keys(props.histo).map((key)=>{

        return(
          <Text>{props.histo[key]} {"\n"}</Text>
        )}

    )
}
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {displayHistory()}
    </View>
  );
}