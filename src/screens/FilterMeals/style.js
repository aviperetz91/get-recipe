import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center"
    },
    title: {
        marginTop: 20,
        fontSize: 22,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    accordion: {
        marginVertical: 20
    },
    accordionHeader: {
        width: 350,
        padding: 15,
        borderRadius: 4,
        backgroundColor: '#e4e4e4',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    accordionHeaderText: {
        fontSize: 18,
    },
    accordionBody: {
        backgroundColor: '#f4f4f4',
        padding: 15
    },
    filterContainer: {
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    filterText: {
        fontSize: 16,
    }


})
  
export default styles;