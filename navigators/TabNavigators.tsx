
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../src/Home';
import Profile from '../src/Profile';
import Settings from '../src/Settings';

const Tab = createBottomTabNavigator();

export default function TabNavigators() {
    return (
        <Tab.Navigator screenOptions={({route}) => {
            return {
                tabBarStyle: {
      
                },
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
      
                    if (route.name === "Home"){
                        iconName = focused ? "ios-home" : "ios-home-outline"
                    } else if(route.name === "Profile" || route.name === "NongkrongScreen"){
                        iconName = focused ? "ios-search" : "ios-search-outline"
                    } else if(route.name === "Settings"){
                        iconName = focused ? "ios-person" : "ios-person"
                    }
      
                    return <Ionicons name={iconName} color={color} size={size} />
                },
                tabBarActiveTintColor: "#3DB2FF",
                tabBarShowLabel: false,
                tabBarInactiveTintColor: "#43463F"
            }
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                headerShown: false
              }} />
              <Tab.Screen name="Nongkrong" component={Profile} options={{
                headerShown: false
              }} />
              <Tab.Screen name="Profile" component={Settings} options={{
                headerShown: false
              }} />
            {/* <Tab.Screen name='SearchDetail' component={SearchDetailScreen} options={{
                tabBarButton: () => null,
                tabBarVisible: false,
            }} /> */}
          </Tab.Navigator>
    )
  }