import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


function App() {

  const [word, setWord] = useState('');
  const [debounceInput, setDebounceInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const data = [
    'app',
    'apple',
    'bed',
    'bedminton',
    'face',
    'facebook'
  ];

  useEffect(() => {
    let timer = setTimeout(() => {
      if(word.trim()) {
        setDebounceInput(word);
      }
      else {
        setSearchResult([]);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [word]);

  useEffect(() => {
    if(debounceInput) {
      handleSearch(debounceInput);
    }
  }, [debounceInput]);

  const handleSearch = (value) => {
    let result = data.filter((item) => 
      item.toLowerCase().includes(value.toLowerCase())
    )

    setSearchResult(result);
  }


  return (
    <View style={styles.container}>
      <TextInput
        value={word}
        onChangeText={setWord}
        style={styles.input}
        placeholder='search ...'
      />

    <View>
      {
        searchResult.map((item, index) => {
          return (
            <Text>{item}</Text>
          )
        })
      }
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 30,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 6,
    marginTop: 20,
    padding: 6,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'pink'
  }
})


export default App;
