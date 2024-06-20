import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Image, TextInput, Button } from 'react-native';
import { style } from '../components/addStockStyle.js';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddStock = ({ onClose }) => {
    const [expirationDate, setExpirationDate] = useState(null);
    const [openDate, setOpenDate] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showDatePickerOpen, setShowDatePickerOpen] = useState(false);
    const [articleTitle, setArticleTitle] = useState('');
    const [dureeConservation, setDureeConservation] = useState('');

    const handleDateChange = (event, selectedDate) => {
        setShowDatePicker(false); 
        if (selectedDate) {
            setExpirationDate(selectedDate);
        }
    };

    const handleOpenDateChange = (event, selectedDate) => {
        setShowDatePickerOpen(false);
        if (selectedDate) {
            setOpenDate(selectedDate);
        }
    }

    const formatDate = (date) => {
        if (!date) return '.../.../...';
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const handleAddStock = () => {
        console.log('Add stock button has been pressed');
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
                        <Text style={style.title}>Ajout d'un article dans le stock</Text>
                        </View>
                    <View>
                        <TextInput
                            style={style.articleTitleInput}
                            placeholder="Titre de l'article"
                            placeholderTextColor="#888888"
                            value={articleTitle}
                            onChangeText={setArticleTitle}
                        />
                    </View>
                    <View style={style.peremptionScare}>
                        <Text style={style.text}>Date de péremption :</Text>
                        {showDatePicker && (
                            <DateTimePicker
                                value={expirationDate || new Date()}
                                mode="date"
                                display="default"
                                onChange={handleDateChange}
                            />
                        )}
                        <TouchableOpacity style={style.buttonDate} onPress={() => setShowDatePicker(true)}>
                            <Text style={style.buttonDateText}>{formatDate(expirationDate)}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.openScare}>
                        <Text style={style.text}>Date d'ouverture :</Text>
                        {showDatePickerOpen && (
                            <DateTimePicker
                                value={openDate || new Date()}
                                mode="date"
                                display="default"
                                onChange={handleOpenDateChange}
                            />
                        )}
                        <TouchableOpacity style={style.buttonDate} onPress={() => setShowDatePickerOpen(true)}>
                            <Text style={style.buttonDateText}>{formatDate(openDate)}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.containerDureeConservation}>
                        <Text style={style.text}>Durée de conservation après ouverture :</Text>
                        <TextInput
                                style={style.dureeConservationInput}
                                placeholder="_ jours"
                                placeholderTextColor="#888888"
                                value={dureeConservation}
                                onChangeText={setDureeConservation}
                                keyboardType="numeric"
                            />
                    </View>
                    <View style={style.buttonScare}>
                        <TouchableOpacity style={style.button} onPress={handleAddStock}>
                            <Text style={style.buttonText}>Ajouter au stock</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        </Modal>
    );
}

export default AddStock;
