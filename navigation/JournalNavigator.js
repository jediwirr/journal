import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JournalMenu from '../screens/JournalMenu';
import Replacements from '../screens/Replacements';
import Report from '../screens/Report';
import JournalTimetable from '../screens/JournalTimetable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LessonNavigator } from './LessonNavigator';

const Tab = createBottomTabNavigator();

export const JournalNavigator = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Меню') {
                iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Lessons') {
                iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Замещения') {
                iconName = focused ? 'repeat' : 'repeat-outline';
            } else if (route.name === 'Отчёт') {
                iconName = focused ? 'document-attach' : 'document-attach-outline';
            } else if (route.name === 'Расписание') {
                iconName = focused ? 'calendar' : 'calendar-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        })}
    >
        <Tab.Screen name="Меню" component={JournalMenu} />
        <Tab.Screen name="Lessons" component={LessonNavigator} />
        <Tab.Screen name="Замещения" component={Replacements} />
        <Tab.Screen name="Отчёт" component={Report} />
        <Tab.Screen name="Расписание" component={JournalTimetable} />
    </Tab.Navigator>
);
