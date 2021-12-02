import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddLessonScreen from '../screens/AddLessonScreen';
import LessonsList from '../screens/LessonsList';
import JournalLessons from '../screens/JournalLessons';

const Stack = createNativeStackNavigator();

export const LessonNavigator = () => {
    <Stack.Navigator>
        <Stack.Screen name='Lesoons' component={JournalLessons} />
        <Stack.Screen name='Список уроков' component={LessonsList} />
        <Stack.Screen name='Добаление урока' component={AddLessonScreen} />
    </Stack.Navigator>
};