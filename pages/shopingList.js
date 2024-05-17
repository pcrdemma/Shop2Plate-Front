
import { View, TouchableOpacity, Text } from 'react-native';
import { style } from '../components/shopingListeStyle.js';
import { Ionicons } from '@expo/vector-icons';
const ShopingList = () => {
    const handleBackPress = () => {
        console.log('Back button has been pressed');
    };

    return (
        <View style={style.container}>
            {/* Back button */}
            <View style={style.backButtonScare}>
                <TouchableOpacity onPress={handleBackPress} style={style.backButton}>
                    <View style={style.backButtonContent}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                            <Text style={style.backButtonText}>Retour</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <Text>Liste de Course</Text>
            </View>
        </View>
    );
};
export default ShopingList;