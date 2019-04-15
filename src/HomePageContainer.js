import React from 'react';
import HomePageComponent from './HomePageComponent';
import {Animated} from 'react-native'

class HomePageContainer extends React.PureComponent {
    state = {
        icons: {
            0: { id: 0, type: 'folder', isOpen: false, height: new Animated.Value(135) },
            //1: { id: 1, type: 'folder', isOpen: false, height: new Animated.Value(135) },
            2: { id: 2, type: 'icon', name: 'rocket', isActive: false, parent: null },
            3: { id: 3, type: 'icon', name: 'apple', isActive: false, parent: null },
            4: { id: 4, type: 'icon', name: 'android', isActive: false, parent: null },
            5: { id: 5, type: 'icon', name: 'at', isActive: false, parent: 0 },
            6: { id: 6, type: 'icon', name: 'bath', isActive: false, parent: 0 },
            7: { id: 7, type: 'icon', name: 'at', isActive: false, parent: 0 },
            8: { id: 8, type: 'icon', name: 'bath', isActive: false, parent: 0 },
            9: { id: 9, type: 'icon', name: 'at', isActive: false, parent: 0 },
            10: { id: 10, type: 'icon', name: 'bath', isActive: false, parent: 0 },
            11: { id: 11, type: 'icon', name: 'at', isActive: false, parent: null },
            12: { id: 12, type: 'icon', name: 'bath', isActive: false, parent: null },
            13: { id: 13, type: 'icon', name: 'at', isActive: false, parent: null },
            14: { id: 14, type: 'icon', name: 'bath', isActive: false, parent: null }
        },
    }

    onIconPress = (id) => {
        const updatedIcon = this.state.icons[id]
        updatedIcon.isActive = !updatedIcon.isActive
        this.setState({ icons: { ...this.state.icons, [id]: updatedIcon } })
    }
    toggleFolder = (id) => {
        const updatedFolder = this.state.icons[id]
        const nextValue = updatedFolder.isOpen ? 135 : 290
        Animated.spring(updatedFolder.height,{ toValue: nextValue}).start()
        updatedFolder.isOpen = !updatedFolder.isOpen
        this.setState({ icons: { ...this.state.icons, [id]: updatedFolder } })
    }
    /*
    onChildIconPress = (folderId,childIconId) => {
        const updatedFolder = this.state.icons[folderId]
        const updatedChildIcon = updatedFolder.childs[childIconId]
        console.log(updatedChildIcon )
        updatedChildIcon.isActive = !updatedChildIcon.isActive
        const finalUpdatedFolder = { ...updatedFolder, childs: { ...updatedFolder.childs, [childIconId]: updatedChildIcon } }
        console.log(finalUpdatedFolder )
        this.setState({ icons: { ...this.state.icons, [folderId]: finalUpdatedFolder} })
    }
    */
    render() {
        return (
            <HomePageComponent
                icons={this.state.icons}
                onIconPress={this.onIconPress}
                toggleFolder={this.toggleFolder}
                //onChildIconPress={this.onChildIconPress}
            />);
    }
}

export default HomePageContainer;