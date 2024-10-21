import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    container: {
        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
        marginTop: 40,
    },
    h: {
        color: "#6161b0",
        fontSize: 30,
        fontFamily: "uncage",
        textAlign: "center",
        marginBottom: 20,
    },
    h2: {
        color: "#6161b0",
        fontFamily: "uncage",
        fontSize: 16,
        textAlign: "left",
        marginLeft: 10,
    },
    h3: {
        color: "#6161b0",
        fontSize: 16,
        textAlign: "left",
        fontFamily: "uncage",
        marginLeft: 10,
        marginTop: 15,
        marginBottom: 10,
    },
    htotal: {
        paddingHorizontal: 15, 
        paddingVertical: 16, 
        backgroundColor:'#a2a2d0', 
        borderRadius: 10, 
        width: "95%",
        color: "white",
        fontSize: 20,
        textAlign: "left",
        fontFamily: "montsB",
        marginLeft: 10,
    },
    Title: {
        
        alignItems: "center",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#e6e6f2",
        width: "95%",
        padding: 10,
        paddingVertical: 2,
        margin: 10,
    },
    Title1: {
        alignItems: "center",
        borderRadius: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#a2a2d0",
        width: "100%",
        padding: 10,
        paddingLeft: 15,
        marginBottom: 0,
        
    },
    
    Title1Text1: {
        fontFamily: "montsM",
        alignItems: "center",
        fontSize: 14,
        color: "white",
        width: "22%",
        textAlign: "center",
        justifyContent: "center",
    },


    expenseText: {
        fontFamily: "montsR",
        fontSize: 16,
        width: "22%",
        textAlign: "center",
    },

    expenseText2: {
        fontFamily: "montsR",
        fontSize: 14,
        width: "22%",
        textAlign: "center",
    },
    textInput: {
        borderRadius: 12,
        fontFamily: "montsR",
        borderColor: "black",
        borderWidth: 2,
        padding: 10,
        paddingVertical: 5,
        margin: 10,
        marginBottom: 2,
        borderColor: "#a2a2d0",
    },
    textInput2: {
        borderRadius: 12,
        fontFamily: "montsR",
        borderColor: "black",
        borderWidth: 2,
        padding: 10,
        margin: 10,
        marginBottom: 2,
        borderColor: "#a2a2d0",
        backgroundColor: "#EEEEFC",
    },
    textI: {
        fontFamily: "montsR",
        fontSize: 14,
        margin: -15,
        marginLeft: -18,
        color: "#616161",
    },
    butt: {
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal:20, 
        paddingVertical:10, 
        backgroundColor:'#6161b0', 
        borderRadius: 10, 
        width: "95%",
    },
    buttText: {
        fontFamily: "montsB",
        textAlign: "center",
        fontSize: 14, 
        color:'white',
    },

    butt2: {
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 15, 
        paddingVertical: 5, 
        backgroundColor:'#ff3b14', 
        borderRadius: 10, 
    },
    buttText2: {
        fontFamily: "montsM",
        textAlign: "center",
        fontSize: 14, 
        color:'white',
    },
    pie: {
        fontFamily: "montsR",
        justifyContent: "center",
    }

});
export default styles;