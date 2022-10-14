import { View, Button, StyleSheet, Text } from 'react-native';

const text = [{'id':1,'title':"Localização:",'text':"Rua Severino Meireles n°500 Bairro São Mateus JF/MG"},
{'id':2,'title':"Horário de funcionamento:",'text':"Segunda a sexta (exceto feriados)8h ás 21h"},
{'id':3,'title':"Responsável:",'text':"Maria Fernanda Moreira Tavares"},
{'id':4,'title':"Requisitos para alugar livros:",'text':"Necessário documento de identificação (CPF,RG) podendo alugar no máximo 3 livros por vez"}]
export default function ExtensionsListScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.containerText}>
                {
                text.map(info => 
                        <View key={info.id} style={styles.containerInfo}>
                            <Text style={styles.textTitle}>{info.title}</Text>
                            <Text style={styles.text}>{info.text}</Text>
                        </View>
                    )
                }
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "#CEDEDF",
        width: "100%",
        height: "100%",
    },
    containerText:{
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "#D2D2DB",
        borderRadius: 15,
        width: "95%",
        height: "80%",
    },
    containerInfo:{
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "#F3F5F9",
        margin: 10,
        borderRadius: 10,
        width: "100%",
        height: "20%",
    },
    text:{
        fontFamily:'Lustria-Regular',
        color:'#545454',
        textAlign: "left",
        fontSize:15,
    },
    textTitle:{
        fontFamily:'Lustria-Regular',
        color:'#545454',
        textAlign: "right",
        fontSize:20,
        fontWeight: 'bold',

    }
});