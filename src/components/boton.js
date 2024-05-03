import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function Boton({ textBoton, evento }) {
    return (
        <TouchableOpacity style={styles.boton} onPress={evento}>
            <Text style={{ textAlign: 'center', color: 'white' }}>{textBoton}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    boton: {
        backgroundColor: 'blue',
        width: 100,
        padding: 10,
        margin: 5,
        borderRadius: 20
    },
})