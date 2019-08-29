import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        marginTop: 15,
        marginHorizontal: 15,
        marginBottom: 25,
        height: 150,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 2,
    },
    titleContainer: {
        alignItems: "center"
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    bgImage: {
        width: "100%",
        height: "100%",
    }
})
  
export default styles;