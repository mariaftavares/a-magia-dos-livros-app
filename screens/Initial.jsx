import { View,StyleSheet,Image, Text, TouchableOpacity } from 'react-native';

export default function ExtensionsListScreen({navigation}) {
    function onPressHandler() {
      navigation.navigate("Root")
    }
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image source={require("../assets/images/Imagemcapasemfundo.png")} style={styles.image}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Olá!{'\n'}Seja Bem-Vindo! </Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={onPressHandler}
              >
                <Text style={styles.textButton}>Entrar</Text>
              </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: "lightblue",
    width: 100,
    justifyContent: "center",
    height: 45,
    borderRadius: 10,
    padding: 10,
  },
  textContainer:{
    height: 100,
    width:300,
    marginBottom: 60
  },
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    backgroundColor: "#345457",
    padding: 100
  },
  imageContainer: {
    flex:1,
    width: "100%",
  },
  image: {
    width: 400,
    height: 400     
  },
  text:{
    fontFamily:'Lustria-Regular',
    color:'#C5FCFF',
    textAlign: "center",
    fontSize:20,
  },
  textButton:{
    fontFamily:'Lustria-Regular',
    fontWeight: 'bold', 
    color: "black",
    textAlign: "center",
    fontSize:15,
  }
  });