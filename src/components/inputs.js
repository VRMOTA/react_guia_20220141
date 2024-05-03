import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function Input({ titulo_input, tipo_keyboard, numero, setNumero }) {
    return (
        <View>
            <Text>{titulo_input}</Text>
            <TextInput
                style={styles.input}
                keyboardType={tipo_keyboard}
                placeholder={titulo_input}
                value={numero.toString()}
                onChangeText={setNumero}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    input: {
        backgroundColor: 'grey',
        width: 150,
        padding: 10,
        margin: 5,
        fontSize: 20,
        fontWeight: '900',
        borderRadius: 20,
        textAlign: 'center',
    },
});