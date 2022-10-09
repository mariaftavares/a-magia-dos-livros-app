import { View, Button, StyleSheet, Text } from 'react-native';

export default function ExtensionsListScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Informações Sobre</Text>
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