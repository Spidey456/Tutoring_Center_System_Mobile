import { createStackNavigator } from '@react-navigation/stack' ;
import { NavigationContainer } from '@react-navigation/native';

const {Navigator, Screen} = createStackNavigator();

import Login from '../Screens/Login';
import Register from '../Screens/Register';
import RegisterCourses from '../Screens/RegisterCourses';


const Registration = () => {
    return (

<Navigator  headerMode= "none">
<Screen name="Login" component={Login} />
<Screen name="Register" component={Register} />
<Screen name="RegisterCourses" component={RegisterCourses} />
</Navigator>
    );
}

export default Registration;
