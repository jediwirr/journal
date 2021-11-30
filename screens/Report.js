import React from "react";
import { View, Text } from "react-native";

const Report = () => {
    const headers = ['Ученик', 'Класс', 'Предмет', 'Факт'];
    const footers = ['Итого', '9']

    const Row = ({items}) => (
        <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', borderWidth: 1 }}>
            {
                items.map(item => (
                    <Text key={item} style={{ flex: 1, alignSelf: 'stretch', borderWidth: 1, textAlign: 'center' }}>
                        {item}
                    </Text>
                ))
            }
        </View>
    )

    return (
        <>
            <Row items={headers} />
            <Row items={footers} />
        </>
    );
}

export default Report;