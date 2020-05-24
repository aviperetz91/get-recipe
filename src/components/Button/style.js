import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        borderRadius: 5,
        borderWidth: 1,
        paddingRight: 8,
        paddingLeft: 8,
        paddingTop: 0
    },
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
        paddingTop: 12,
        paddingBottom: 12,
        paddingHorizontal: 3
    }
})
  
export default styles;