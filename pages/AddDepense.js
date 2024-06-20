import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Image, TextInput } from 'react-native';
import { style } from '../components/addDepenseStyle.js';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddDepense = ({ onClose }) => {
    const [depenseDate, setDepenseDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [depenseTitle, setDepenseTitle] = useState('');
    const [montantTitle, setMontantTitle] = useState('');

    const handleDateDepense = (event, selectedDate) => {
        setShowDatePicker(false);
        if (selectedDate) {
            setDepenseDate(selectedDate);
        }
    };

    const formatDate = (date) => {
        if (!date) return '.../.../...';
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const handleAddDepense = () => {
        console.log('Add depense button has been pressed');
        onClose();  
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
            onRequestClose={onClose}
        >
            <View style={style.container}>
                <View style={[style.card, style.dropShadow]}>
                    <TouchableOpacity onPress={onClose} style={style.closeButton}>
                        <Image
                            source={require('../assets/croix.png')}
                            style={style.closeImage}
                        />
                    </TouchableOpacity>
                    <View style={style.pageTitleContainer}>
                        <Text style={style.title}>Ajout d'une dépense</Text>
                    </View>
                    <View>
                        <TextInput
                            style={style.articleTitleInput}
                            placeholder="Titre de la dépense"
                            placeholderTextColor="#888888"
                            value={depenseTitle}
                            onChangeText={setDepenseTitle}
                        />
                    </View>
                    <View>
                        <TextInput
                            style={style.articleTitleInput}
                            placeholder="Montant de la dépense"
                            placeholderTextColor="#888888"
                            value={montantTitle}
                            onChangeText={setMontantTitle}
                        />
                    </View>
                    <View style={style.peremptionScare}>
                        <Text style={style.text}>Date de la dépense :</Text>
                        {showDatePicker && (
                            <DateTimePicker
                                value={depenseDate}
                                mode="date"
                                display="default"
                                onChange={handleDateDepense}
                            />
                        )}
                        <TouchableOpacity style={style.buttonDate} onPress={() => setShowDatePicker(true)}>
                            <Text style={style.buttonDateText}>{formatDate(depenseDate)}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.buttonScare}>
                        <TouchableOpacity style={style.button} onPress={handleAddDepense}>
                            <Text style={style.buttonText}>Ajouter la dépense</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default AddDepense;
