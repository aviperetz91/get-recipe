import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mealItem:{
        height: 200,
        width: "100%",
        backgroundColor: "#e7e7e7",
        marginBottom: 10,
        borderRadius: 10,
        overflow: "hidden"
    },  
    mealRow: {
        flexDirection: "row",
    },
    mealHeader: {
        height: "85%"
    },
    mealDetail: {   
        height: "15%",
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems: "center"
    },
    bgImage: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end"
    },
    title: {
        fontSize: 18,
        color: "white",
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: "center"
    }
})
  
export default styles;