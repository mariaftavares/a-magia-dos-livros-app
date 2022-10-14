import { Text, View, Image, StyleSheet,ScrollView } from 'react-native';

export default function Details({route}) {
  return (
    <View style={{flex: 1, backgroundColor:"#92B7BB"}}>
      <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={{uri: route.params.imageUrl}} style={styles.image}/>
          </View>
          <Text style={styles.text}>Título: {route.params.title}</Text>
          <Text style={styles.text}>{route.params.category} por {route.params.author}</Text>
          <Text style={styles.text}>Detalhes:</Text>
          <ScrollView style={styles.descriptionContainer}>
            <Text style={styles.description}>{route.params.title} é um {route.params.category} escrito por {route.params.author} em {route.params.publication_date}.{'\n'}{route.params.description}</Text>
          </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  imageContainer:{
    width: "100%",
    height: "30%"
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
    color: "#292727",
    fontFamily:'Lustria-Regular',
  },
  description: {
    fontWeight: 'bold',
    color: "#545454",
    fontFamily:'Lustria-Regular',
  },
  descriptionContainer:{
    textAlign: "center",
    padding: 20
  },
  container:{
    flex: 1,
    margin: 50,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
    width: "80%",
    height: "50%",
    backgroundColor: "#F1F1F1"
  },
  dates:{
    margin: 5,
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: "column",
    justifyContent: "space-between",
  }
});
