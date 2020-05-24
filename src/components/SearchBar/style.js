import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10
    },
    placeInput: {
        width: "75%",
        fontSize: 16,
        backgroundColor: "#fff",
        borderColor: Colors.darkPrimary,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
    placeButton: {
        // width: "40%",
        // padding: 15
    },
})
  
export default styles;