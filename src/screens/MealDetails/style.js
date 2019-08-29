import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200
    },
    ingredientsContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    title: {
        marginTop: 10,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    list: {
        margin: 7,
    },
    listItem: {
        flexDirection: "row",
        height: 50,
        alignItems: "center"
    },
    ingredientImage: {
        width: 50,
        height: 50,
        marginRight: 7
    },
    listItemTitle: {
        fontSize: 16
    },
    content: {
        fontSize: 16
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15,
    },
    iconTitle: {
        textAlign: "center",
        marginLeft: 5
    }
})
  
export default styles;