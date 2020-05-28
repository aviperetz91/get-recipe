import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    backgroundColor: {
        backgroundColor: Colors.primary
    },
    tooltipContainer: {
        display: 'none',  
        borderRadius: 3
    }
})
  
export default styles;