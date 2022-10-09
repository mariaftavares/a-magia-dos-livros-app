import { View, Button, StyleSheet } from 'react-native';

export default function ExtensionsListScreen({navigation}) {
    function onPressHandler() {
      navigation.navigate("Root")
    }

    return (
        <View style={styles.container}>
            <Button  onPress={onPressHandler} title="Vai pro inicio" color="#841584"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: "#F3F3F3"
    }
  });