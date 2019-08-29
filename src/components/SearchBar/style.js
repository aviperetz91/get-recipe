import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginVertical: 10
    },
    placeInput: {
        width: "70%",
        fontSize: 16,
        backgroundColor: "#fff",
        borderColor: "#4287f5",
        padding: 6,
        borderWidth: 1,
        borderRadius: 5,
    },
    placeButton: {
        width: "30%"
    },
})
  
export default styles;