import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 5,
        padding: 15,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    title: {
        fontSize: 18,
        fontWeight: "bold"
    }
})
  
export default styles;