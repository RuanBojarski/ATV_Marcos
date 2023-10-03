import { StyleSheet, Text, View } from "react-native";

export default function Page() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tarefas</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#1a1a1a',
        padding: 24,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 30,
    },
});
/** TODO: Função de deletar tarefa
* para chamar a API de deletar: método DELETE, rota /task/${id}
* lembre de passar o token assim como nos métodos anteriores
*/
const handleDeleteTask = async (id, token) => {
        try {
          const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          };
          const requestOptions = {
            method: 'DELETE',
            headers: headers,
          };
          const response = await fetch(`/task/${id}`, requestOptions);
          if (response.ok) {
            console.log(`Tarefa com ID ${id} deletada com sucesso.`);
          } else {
            console.error(`Falha ao deletar a tarefa com ID ${id}.`);
          }
        } catch (error) {
          console.error('Ocorreu um erro ao deletar a tarefa:', error);
        }
      };
/** TODO: Função de check Tarefa
* para chamar a API de check: método PATCH, rota /task/${id}, body {finished}
* lembre de passar o token assim como nos métodos anteriores
*/
const handleCheckTask = async (id, finished, token) => {
    try {
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      const requestBody = JSON.stringify({ finished });
      const requestOptions = {
        method: 'PATCH',
        headers: headers,
        body: requestBody,
      };
      const response = await fetch(`/task/${id}`, requestOptions);
      if (response.ok) {
        console.log(`Tarefa com ID ${id} marcada como concluída.`);
      } else {
        console.error(`Falha ao marcar a tarefa com ID ${id} como concluída.`);
      }
    } catch (error) {
      console.error('Ocorreu um erro ao marcar a tarefa como concluída:', error);
    }
  };  