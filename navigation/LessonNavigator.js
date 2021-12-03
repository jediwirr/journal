import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddLessonScreen from '../screens/AddLessonScreen';
import LessonsList from '../screens/LessonsList';
import JournalLessons from '../screens/JournalLessons';
import Journal from '../screens/Journal';

const Stack = createNativeStackNavigator();

export const LessonNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name='Уроки' component={JournalLessons} options={{ headerShown: false }} />
        <Stack.Screen name='Список уроков' component={LessonsList} />
        <Stack.Screen name='Добавление урока' component={AddLessonScreen} />
        <Stack.Screen name='Журнал' component={Journal} />
    </Stack.Navigator>
);
