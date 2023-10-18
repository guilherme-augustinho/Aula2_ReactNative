// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, Image, FlatList, SectionList, Switch} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Login} from "./Login";
import {Cadastro} from "./Cadastro";

export default function App() {

  const Stack = createStackNavigator()
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Login" component = {Login} />
        <Stack.Screen name = "Cadastro" component = {Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // const [senha, setSenha] = useState("Teste")
  // const [inicio, setInicio] = useState(false)
  // const array1 = ["numero 1", "numero 2"]
  // const array2 = ["numero 3", "numero 4"]
  // const array3 = [{
  //   title: "Main dishes",
  //   data: ['Pizza', 'Burguer']
  // },
  
  // {
  //   title:"Teste",
  //   data: ['Pizza', 'Burguer'],
  // }]

  // function handlerChange(e){
  //   console.log("Valor senha", e)
  // }

  return (
    // <View style={styles.container}>

    //   <Switch
    //     onValueChange = {() => setInicio(!inicio)}
    //     value = {inicio}
    //     trackColor = {{false: "#767577", true: "#81b0ff"}}
    //     thumbColor = {"#f5dd4b"}
    //     activeThumpColor = {"#f4f3f4"}
    //   />

    //   <SectionList
    //     sections = {array3}
    //     keyExtractor = {(item, index) => {item+index; console.log("item",item)}}
    //     renderItem = {( {item} ) => ( <Text style={{color: "green"}}> {item} </Text>)}
    //     renderSectionHeader = {( {section: {title} }) => ( <Text style = {{color : "red"}} > {title} </Text> )}
    //   />

    //   <Text>Digite a senha!</Text>
    //   <StatusBar style="auto" />

    //   <TextInput
    //     secureTextEntry = {true}
    //     // placeholder=" Escreva sua senha"
    //     value = {senha}
    //     onChangeText = {e => setSenha(e)}
    //   />

    //   <TextInput multiline maxLength={50} numberOfLines={5} style={styles.textArea} onChangeText={e => console.log('Você esta digitando isso: ', e)} />
    //   <Button color = "black" onPress = {() => console.log("Fui clikado")} title="ME CLIQUE"></Button>

    //   <TouchableOpacity style={{
    //     width: '200px',
    //     innerHeight: '40px',
    //     backgroundColor: 'gray',
    //     margin: '10px',
    //     alignItems: 'center',
    //     color: 'white'
    //   }}>

    //     <Text>TouchableOpacity</Text>

    //   </TouchableOpacity>

    //   <TouchableWithoutFeedback onPress = {() => console.log("withou feedback")}>

    //     <View style = {{
    //       width: '200px',
    //       innerHeight: '40px',
    //       backgroundColor: 'black',
    //       alignItems: 'center'
    //     }}>
    //       <Text style={{ color: 'white' }}>TouchableWithoutFeedback</Text>

    //     </View>
    //   </TouchableWithoutFeedback>
    //   {/* <Image style={{
    //     height: '200px',
    //     width: '200px',
    //     margin: '10px'
    //   }}
    //     source={require('./img/image.png')}
    //   /> */}
    //   {array1.map((item, index) => {
    //     return (
    //       <Text key={index}>{item}</Text>

    //     )
    //   })}

    //   <FlatList
    //     data={array2}
    //     renderItem={({ item }) => <Text>{item}</Text>}
    //     keyExtractor={(item) => item}
    //   />

    // </View>
    <>
      <Login/>
  
      <Cadastro/>
    </>


  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   textArea: {
//     backgroundColor: 'black',
//     color: 'white',
//     margin: '10px'
//   },

// });
