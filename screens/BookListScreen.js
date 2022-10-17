import { FlatList, View } from 'react-native';
import List from '../components/BookList';

const data = require('../data/books.json')

export default function ExtensionsListScreen({navigation, route}) {

  const categoryFilteredData = data.filter(book => book.category === route.params.category)

  function renderEvent ({item}){
    function onPressHandler() {
      navigation.navigate("BookDetails", {
        title: item.title,
        category: item.category,
        imageUrl: item.imageUrl,
        description: item.description,
        author: item.author,
        publication_date: item.publication_date
      })
    };
  
    return <List title={item.title} imageUrl={item.imageUrl} author={item.author} onPress={onPressHandler}/>;
  }

  return (
    <View>
      <FlatList 
        data={categoryFilteredData} 
        keyExtractor={(item) => item.id} 
        renderItem={renderEvent}
      />
    </View>
  )
}