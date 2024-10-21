import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import styles from "./components/styles";
import Addform from "./components/add.js";
import ExpenseComponent from "./components/component.js";

export default function App() {

    const [loaded, error] = useFonts({
        'uncage': require('./assets/UNCAGE-Regular.otf'),
        'montsR': require('./assets/Montserrat-Regular.ttf'),
        'montsS': require('./assets/Montserrat-SemiBold.ttf'),
        'montsB': require('./assets/Montserrat-Bold.ttf'),
      });

    useEffect(() => {
        if (loaded || error) {
          SplashScreen.hideAsync();
        }
        }, [loaded, error]);

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Другое");
    const [expenses, setExpenses] = useState([]);
    const categories = ["Еда", "Одежда", "Косметика", "Отдых", "Другое"];
    const [addForm, setAddForm] = useState(false);

    const addExpense = () => {
        setAddForm(true);
    };

    const [chartData, setChartData] = useState([
        {
            name: "Еда",
            amount: 0,
            color: "#d1e35f",
            legendFontColor: "#7f8f1a",
            legendFontSize: 14,
        },
        {
            name: "Одежда",
            amount: 0,
            color: "#ace5ee",
            legendFontColor: "#2cbdd4",
            legendFontSize: 14,
        },
        {
            name: "Косметика",
            amount: 0,
            color: "#ffbcad",
            legendFontColor: "#ff3b14",
            legendFontSize: 14,
        },
        {
            name: "Отдых",
            amount: 0,
            color: "#8cb6d4",
            legendFontColor: "#376c91",
            legendFontSize: 14,
        },
        {
            name: "Другое",
            amount: 0,
            color: "#a2a2d0",
            legendFontColor: "#6161B0",
            legendFontSize: 14,
        },
    ]);

    const totalAmount = chartData.reduce((sum, item) => sum + item.amount, 0);
    
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.h}>Менеджер расходов</Text>

            <Addform
                name={name}
                setName={setName}
                amount={amount}
                setAmount={setAmount}
                category={category}
                setCategory={setCategory}
                categories={categories}
                setExpenses={setExpenses}
                expenses={expenses}
                chartData={chartData}
                setChartData={setChartData}
                setAddForm={setAddForm}
            />
            <PieChart
                style={styles.pie}
                data={chartData}
                width={420}
                height={160}
                chartConfig={{color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,}}
                accessor="amount"
                backgroundColor="white"
                padding="20"
                absolute
            />

            
            <Text style={styles.h3}>Общая сумма расходов</Text>

            <Text style={styles.htotal}>{totalAmount} ₽</Text>

            <Text style={styles.h3}>Список расходов</Text>

            <View style={styles.Title1}>
              <Text style={styles.Title1Text1}>{"Название"}</Text>
              <Text style={styles.Title1Text1}>{"Цена"}</Text>
              <Text style={styles.Title1Text1}>{"Категория"}</Text>
              <Text style={styles.Title1Text1}>{" "}</Text>  
            </View>

            <ExpenseComponent
                expenses={expenses}
                setExpenses={setExpenses}
                chartData={chartData}
                setChartData={setChartData}
            />

            
        </SafeAreaView>
    );
}