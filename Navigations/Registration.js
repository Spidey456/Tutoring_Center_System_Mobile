import { createStackNavigator } from '@react-navigation/stack' ;
import { NavigationContainer } from '@react-navigation/native';

const {Navigator, Screen} = createStackNavigator();

import Login from '../Screens/Login';
import Register from '../Screens/Register';


const Registration = () => {
    return (

<Navigator  headerMode= "none">
<Screen name="Login" component={Login} />
<Screen name="Register" component={Register} />
</Navigator>
    );
}

export default Registration;
