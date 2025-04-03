import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Bottom_Tab';
import CoverPage from '../Screens/CoverPage';

const {Navigator, Screen} = createDrawerNavigator();


const Drawer = () => {
    return (
        <Navigator  screenOptions={{headerShown: false}}>
            <Screen name = "CoverPage" component={CoverPage}/>
            <Screen name = "Home" component={Home}/>
        </Navigator>
    );
}

export default Drawer;
