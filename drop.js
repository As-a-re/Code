import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
    setIsOpen(!isOpen);
    };

    const handleDownload = () => {
    // Implement download logic here
    alert('Download option clicked');
    };

    const handleMore = () => {
    // Implement more option logic here
    alert('More option clicked');
    };

    return (
    <View style={styles.dropdownContainer}>
      {/* Button to toggle the dropdown */}
        <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
        <Text style={styles.icon}>⋮</Text>
        </TouchableOpacity>

      {/* Dropdown menu */}
        {isOpen && (
        <View style={styles.dropdownMenu}>
            <TouchableOpacity onPress={handleDownload} style={styles.dropdownItem}>
            <Text style={styles.dropdownText}>Download</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleMore} style={styles.dropdownItem}>
            <Text style={styles.dropdownText}>More</Text>
            </TouchableOpacity>
        </View>
        )}
    </View>
    );
};

const styles = StyleSheet.create({
    dropdownContainer: {
    position: 'relative',
    width: 'auto',
    },
    dropdownButton: {
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    width: '3vw',
    marginLeft: '90vw',
    marginTop: '-5vh'
    },
    icon: {
    fontSize: 24,
    color: '#333',
    },
    dropdownMenu: {
    position: 'absolute',
    right: 0,
    top: 40,
    width: 150,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    zIndex: 10,
    },
    dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    },
    dropdownText: {
    fontSize: 16,
    color: '#333',
    },
});

export default DropdownMenu;
