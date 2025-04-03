import { createStackNavigator } from '@react-navigation/stack' ;
import { NavigationContainer } from '@react-navigation/native';


import Home from './Navigations/Bottom_Tab';
import Drawer from './Navigations/Drawer';
import Registration from './Navigations/Registration';
import CoverPage from './Screens/CoverPage';


const {Navigator, Screen} = createStackNavigator();

export default function App() {

  return (

    <>
    <NavigationContainer><Drawer/></NavigationContainer>
    
    </> 



  );
}



//    



{/* <NavigationContainer>

<Navigator  headerMode= "none">
<Screen name="Login" component={Login} />
<Screen name="Register" component={Register} />
</Navigator>
</NavigationContainer> 
 */}


// 







