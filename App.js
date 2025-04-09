import { createStackNavigator } from '@react-navigation/stack' ;
import { NavigationContainer } from '@react-navigation/native';


import Home from './Navigations/Bottom_Tab';
import Drawer from './Navigations/Drawer';
import Registration from './Navigations/Registration';
import CoverPage from './Screens/CoverPage';
import RegisterCourses from './Screens/RegisterCourses';
import Main_Page from './Screens/Main_Page';
import { AuthProvider } from './contexts/AuthContext';


const {Navigator, Screen} = createStackNavigator();

export default function App() {

  return (

    <>
    <AuthProvider>
    <NavigationContainer><Drawer/></NavigationContainer>
</AuthProvider>
    </> 



  );
}








