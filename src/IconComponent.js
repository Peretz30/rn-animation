import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const IconComponent = ({ icon, onIconPress }) => (
    <TouchableOpacity onPress={() => { onIconPress(icon.id) }}>
        <View style={styles.icon} >
            <Icon name={icon.name} size={30} color={icon.isActive ? '#3af221' : '#fff'} />
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    icon: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        //flex: 0.2,
        width: 60,
        height: 60,
        margin: 7,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
})


export default IconComponent