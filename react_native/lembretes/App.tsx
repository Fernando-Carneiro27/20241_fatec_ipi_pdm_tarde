
import { 
  FlatList,
  Pressable,
  StyleSheet, 
  Text,
  TextInput,
  View 
} from 'react-native';

import {
  useState
} from 'react'

import { Ionicons } from '@expo/vector-icons';

type Lembrete = {
  id: string;
  texto: string
}

export default function App() {
  const [lembrete, setLembrete] = useState <string> ('')
  const [lembretes, setLembretes] = useState <Lembrete[]> ([])
  const adicionar = () => {
    const novoLembrete: Lembrete = {
      id: Date.now().toString(),
      texto: lembrete
    }
    lembrete === '' ? alert('Lembrete não pode ser vazio.') :
    setLembretes ( lembretesAtual => [
      novoLembrete,
      ...lembretesAtual
    ])
    setLembrete('')
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Digite um lembrete...'
        value={lembrete}
        onChangeText={e => (setLembrete(e.toUpperCase())) }
      />
      <Pressable 
        onPress={adicionar}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#0096F3' : 'gaisboro',
            borderColor: '#0096F3',
            borderWidth: 3,
            borderRadius: 4,
            marginTop: 15,
            width: '80%'
          }
        ]}
      >
         {({pressed}) => 
          (<Text style={styles.text}>{pressed ? 'Lembrete salvo' : 'Salvar lembrete'}</Text>)}
      </Pressable>

      <FlatList 
        keyExtractor={item => item.id}
        style={styles.list}
        data={lembretes}
        renderItem={lembrete => (
          <View>
            <Text style={styles.listItem}>{lembrete.item.texto}</Text>
          </View>
        )}
      />

      <View style={styles.icons}>
        <Ionicons name="logo-facebook" size={20} color={'blue'} />
        <Ionicons name="logo-whatsapp" size={20} color={'green'} />
        <Ionicons name="logo-instagram" size={20} color={'fuchsia'} />
      </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    textAlign: 'center',
    fontFamily: 'helvetica'
  }, 
  text: {
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'helvetica',
    color: 'black'
  },
  list: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    width: '80%'
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    backgroundColor: '#F0F0F0',
    textAlign: 'center',
    fontFamily: 'helvetica',
    margin: 7
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 7,
  }
});
