import React from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';

const CONST_blocks = [
    {
        id: 1,
        background: "red"
    },
    {
        id: 2,
        background: "blue"
    },
    {
        id: 3,
        background: "green"
    },
    {
        id: 4,
        background: "yellow"
    }
];

export default class SelectBlock extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    paint_block(block)
    {
        let Styles = [{backgroundColor: block.background}, styles.style_block];
        if (block.id === this.props.select_block_id) {
            Styles.push(styles.block_selected);
        }
        return (
            <TouchableOpacity
                key={"BLOCK:"+block.id}
                style={Styles}
                onPress={() => this.props.on_change_select_block(block.id)}
            />
        );
    }

    render()
    {
        return (
            <View
                style={{
                    flex: 1,
                    flexWrap: "wrap",
                    justifyContent: 'space-around',
                    alignContent: 'space-around'
                }}
            >
                {CONST_blocks.map(block => this.paint_block(block))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    style_block: {
        height: "45%",
        width: "45%",
        borderWidth: 1,
        borderColor: "#000000"
    },
    block_selected: {
        borderWidth: 5,
        borderColor: "#8b00ff"
    }
});