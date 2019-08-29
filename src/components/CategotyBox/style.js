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
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 2,
        borderColor: "#ccc"
        // shadowColor: "black",
        // shadowOpacity: 0.26,
        // shadowOffset: {width: 0, height: 2},
        // shadowRadius: 10,
        // elevation: 10,
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
        overflow: "hidden"
    }
})
  
export default styles;