import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TouchableWithoutFeedback,Animated } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const FolderComponent = ({ icon, childIcons, onIconPress, toggleFolder }) => {
    if (!icon.isOpen) {
        childIcons = childIcons.slice(0, 4)
    }
    return (
        <TouchableWithoutFeedback onPress={() => toggleFolder(icon.id)}>
            <Animated.View style={{
                backgroundColor: 'rgba(0,0,0,0.5)',
                width: icon.height,
                height: icon.height,
                margin: 7,
                borderRadius: 10,
                flexDirection: 'row',
                padding: icon.isOpen ? 30 : 10,
                flexWrap: 'wrap',
                //position: icon.isOpen ? 'absolute' : 'relative'
                //transition: 'height 2s'
            }}>
                {childIcons.map((childIcon) => (
                    <TouchableOpacity key={childIcon.id} onPress={() => { onIconPress(childIcon.id) }}>
                        <View style={{
                            margin: 8,
                            width: 40,
                            height: 40,
                            backgroundColor: childIcon.isActive ? '#3af221' : 'rgba(255,255,255,0.15)',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 20,
                        }} >
                            <Icon name={childIcon.name} size={30} color="#fff" />
                        </View>
                    </TouchableOpacity>
                ))}

            </Animated.View>
        </TouchableWithoutFeedback>
    )
}



export default FolderComponent