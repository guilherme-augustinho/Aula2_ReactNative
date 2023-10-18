import { Text, Button } from "react-native";

export  function Login(props)
{
    return(
        <>
            <Text> Login </Text>
            <Button title="Cadastro" onPress={() => props.navigation.navigate("Cadastro")}></Button>
        </>
    );
}
