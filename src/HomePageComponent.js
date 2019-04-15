import React from 'react'
import { View, ImageBackground, Text } from 'react-native'
import BackgroundImage from './assets/background.png'

import IconComponent from './IconComponent';
import FolderComponent from './FolderComponent';

const HomePageComponent = (props) => (
    <ImageBackground source={BackgroundImage} style={{ width: '100%', height: '100%', flex: 1 }} blurRadius={2}>
        <View style={{ padding: 30, flexDirection: 'row', flex: 1, flexWrap: 'wrap',alignItems: 'flex-start' }}>
            {Object.values(props.icons).map((icon) => {
                switch (icon.type) {
                    case 'icon':
                        if (icon.parent === null) {
                            return (
                                <IconComponent key={icon.id} icon={icon} onIconPress={props.onIconPress} />
                            )
                        }
                        break;
                    case 'folder':
                        const childIcons = Object.values(props.icons).filter((item) => item.parent === icon.id)
                        console.log(childIcons)
                        return (
                            <FolderComponent key={icon.id} icon={icon} childIcons={childIcons} onIconPress={props.onIconPress} toggleFolder={props.toggleFolder} />
                        )
                    default:
                        break;
                }

            })}

        </View>
    </ImageBackground>
)

export default HomePageComponent;