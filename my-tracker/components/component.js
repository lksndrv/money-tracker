import { Alert, Button, ScrollView, Text, View, TouchableWithoutFeedback} from "react-native";
import styles from "./styles";

export default function ExpenseComponent({expenses, setExpenses, chartData, setChartData,}) 
{   return (
        <ScrollView style={{marginBottom: 30}}>
            {expenses.map((expense) => {
                console.log(expense);
                return (
                    <ExpenseListTile
                        key={expense.id}
                        expense={expense}
                        chartData={chartData}
                        expenses={expenses}
                        setChartData={setChartData}
                        setExpenses={setExpenses}
                    />
                );
            })}
        </ScrollView>
    );
}

const ExpenseListTile = ({
    expense,
    expenses,
    setExpenses,
    chartData,
    setChartData,
}) => {
    return (
        <View style={styles.Title}>
            <Text style={styles.expenseText}>{expense.name}</Text>
            <Text style={styles.expenseText}>{expense.amount}</Text>
            <Text style={styles.expenseText2}>{expense.category}</Text>
            <TouchableWithoutFeedback onPress={() => {
                    Alert.alert("Удалить", "Точно хотите удалить?", [
                        {
                            text: "Да",
                            onPress: () => {
                                let newExpenses = [...expenses];
                                let index = newExpenses.findIndex(
                                    (item) => item.id == expense.id
                                );
                                newExpenses.splice(index, 1);
                                setExpenses(newExpenses);
                                let newChartData = [...chartData];
                                let index2 = newChartData.findIndex(
                                    (item) => item.name == expense.category
                                );
                                newChartData[index2].amount -= expense.amount;
                                setChartData(newChartData);
                            },
                        },
                        {
                            text: "Нет", onPress: () => {console.log("No");},
                        },
                    ]);
                }}
                        >
                    <View style={styles.butt2}>
                        <Text style={styles.buttText2}>Удалить</Text>
                    </View>
                </TouchableWithoutFeedback>

        </View>

       
    );
};