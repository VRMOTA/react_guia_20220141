// Importa los módulos necesarios de React y React Native
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

// Definición del componente TodoList
export default function TodoList() {
    // Definición de los estados 'task' y 'todoList' utilizando el hook useState
    const [task, setTask] = useState(''); // Estado para almacenar la tarea actual
    const [todoList, setTodoList] = useState([]); // Estado para almacenar la lista de tareas

    // Función para agregar una nueva tarea a la lista
    const addTask = () => {
        // Verifica que la tarea no esté vacía antes de agregarla a la lista
        if (task.trim() !== '') {
            setTodoList([...todoList, task]); // Agrega la nueva tarea al final de la lista
            setTask(''); // Limpia el campo de entrada de texto
        }
    };

    // Función para eliminar una tarea de la lista
    const removeTask = (index) => {
        const newList = [...todoList]; // Crea una copia de la lista de tareas
        newList.splice(index, 1); // Elimina la tarea en el índice especificado
        setTodoList(newList); // Actualiza el estado de la lista de tareas
    };

    // Renderizado del componente
    return (
        // Utiliza KeyboardAvoidingView para manejar el espacio del teclado en dispositivos iOS y Android
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            {/* Input para ingresar una nueva tarea */}
            <TextInput
                style={styles.input}
                placeholder="Añade una tarea"
                value={task}
                onChangeText={(text) => setTask(text)}
            />
            {/* Botón para agregar una nueva tarea */}
            <TouchableOpacity style={styles.addButton} onPress={addTask}>
                <Text style={styles.buttonText}>➕ Añadir</Text>
            </TouchableOpacity>
            {/* ScrollView para mostrar la lista de tareas */}
            <ScrollView style={styles.scrollView}>
                {/* Mapea cada tarea en la lista y renderiza un elemento para cada una */}
                {todoList.map((item, index) => (
                    <View key={index} style={styles.taskItem}>
                        {/* Texto de la tarea */}
                        <Text style={styles.taskText}>{item}</Text>
                        {/* Botón para eliminar la tarea */}
                        <TouchableOpacity onPress={() => removeTask(index)}>
                            <Text style={styles.removeIcon}>❌</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

// Estilos del componente
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#24305E',
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: '#55BCF6',
        backgroundColor: '#BDDEF4',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        color: '#FFFFFF',
    },
    addButton: {
        backgroundColor: '#55BCF6',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: '#24305E',
        fontWeight: 'bold',
        fontSize: 16,
    },
    taskItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    taskText: {
        color: '#24305E',
        fontSize: 16,
        flex: 1,
    },
    removeIcon: {
        color: '#FF6B6B',
        fontSize: 20,
    },
    scrollView: {
        flex: 1,
    },
});