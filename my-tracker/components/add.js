import { Picker } from "@react-native-picker/picker";
import { Button, Text, TextInput, View, Alert, TouchableWithoutFeedback } from "react-native";
import styles from "./styles"


export default function Addform({
    name,
    setName,
    amount,
    setAmount,
    category,
    setCategory,
    categories,
    setExpenses,
    expenses,
    chartData,
    setChartData,
    setAddForm,

    allamount,
}) {
    return (

        
        <View>
            <Text style={styles.h2}>Добавить новый расход</Text>
            <TextInput
                onChangeText={(value) => setName(value)}
                value={name}
                style={styles.textInput}
                placeholder="Введите наименование"
                
            />
            <TextInput
                keyboardType="numeric"
                onChangeText={(value) => {
                    value = value.replace(/[^0-9]/g, "");
                    setAmount(value);
                }}
                value={amount}
                style={styles.textInput}
                placeholder="Введите сумму ₽"
            />
            <View style={styles.textInput2}>
                <Picker 
                    style={styles.textI} 
                    selectedValue={category} 
                    onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
                >
                {categories.map((category, index) => {
                    return (
                        <Picker.Item 
                            fontFamily="montsR"
                            style={styles.textI}
                            key={index}
                            label={category}
                            value={category}
                        />
                    );
                })}
                </Picker>
            </View>
            
            

            

            <View style={styles.row}>
                <TouchableWithoutFeedback onPress={() => {
                            let amountNumber = parseInt(amount);
                            if (amountNumber <= 0 || name == "") {
                                Alert.alert("Ошибка", "Введите верное значение");
                                return;
                            }
                            setExpenses([
                                ...expenses,
                                {
                                    id: new Date().getTime(),
                                    category,
                                    name,
                                    amount: amountNumber,
                                },
                            ]);

                            let newChartData = [...chartData];
                            let index = newChartData.findIndex(
                                (item) => item.name == category
                            );
                            newChartData[index].amount += amountNumber;
                            setChartData(newChartData);

                            setAddForm(false);
                            setName("");
                            setAmount("");
                            setCategory("Другое");
                        }}
                        >
                    <View style={styles.butt}>
                        <Text style={styles.buttText}>Добавить</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>



        </View>
    );
}