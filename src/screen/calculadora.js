import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Inputs from '../components/inputs';
import Boton from '../components/boton';
import { useState } from 'react'

export default function Calculadora() {
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [resultado, setResultado] = useState(0);

    const sumar = () => {
        setResultado(parseFloat(numero1) + parseFloat(numero2));
    }

    const restar = () => {
        setResultado(parseFloat(numero1) - parseFloat(numero2));
    }

    const multiplicar = () => {
        setResultado(parseFloat(numero1) * parseFloat(numero2));
    }

    const dividir = () => {
        if (numero2 !== 0) {
            setResultado(parseFloat(numero1) / parseFloat(numero2));
        } else {
            alert('No se puede dividir por cero');
        }
    }

    const reset = () => {
        setResultado(0);
        setNumero1(0)
        setNumero2(0)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Calculadora de números</Text>
            <Inputs
                titulo_input={'Numero 1'}
                tipo_keyboard={'number-pad'}
                numero={numero1}
                setNumero={setNumero1}
            />
            <Inputs
                titulo_input={'Numero 2'}
                tipo_keyboard={'number-pad'}
                numero={numero2}
                setNumero={setNumero2}
            />
            <View style={styles.botonesContainer}>
                <View style={styles.botonesContainer1}>
                    <Boton
                        textBoton={'Suma'}
                        evento={sumar}
                    />
                    <Boton
                        textBoton={'Restar'}
                        evento={restar}
                    />
                </View>
                <View style={styles.botonesContainer2}>
                    <Boton
                        textBoton={'Multiplicar'}
                        evento={multiplicar}
                    />
                    <Boton
                        textBoton={'Dividir'}
                        evento={dividir}
                    />
                </View>
                <Boton
                    textBoton={'Reset'}
                    evento={reset}
                />
            </View>
            <Text>Resultado: {resultado}</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        color: 'black',
        fontSize: 30,
        padding: 10,
        marginBottom: 20
    },
    botonesContainer: {
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botonesContainer1: {
        flexDirection: 'row'
    },
    botonesContainer2: {
        flexDirection: 'row'
    }
});