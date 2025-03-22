import { createDrawerNavigator } from '@react-navigation/drawer';
import Registration from './Registration';
import Home from './Bottom_Tab';

const {Navigator, Screen} = createDrawerNavigator();


const Drawer = () => {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name = "Registration" component={Registration}/>
            <Screen name = "Home" component={Home}/>
        </Navigator>
    );
}

export default Drawer;
