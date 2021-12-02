import React from "react";
import { Component } from "react";
import { Button, SafeAreaView, Text } from "react-native";

class JournalLessons extends Component {
    constructor(props) {
        super(props);
    }

    _openNextTab = () => {
        this.props.navigation.navigate('Список уроков');
    }

    render() {
        return(
            <SafeAreaView>
                <Text>LESSONS</Text>
                <Button 
                    title='Go next'
                    onPress={this._openNextTab}
                />
            </SafeAreaView>
        );
    };
};

export default JournalLessons;