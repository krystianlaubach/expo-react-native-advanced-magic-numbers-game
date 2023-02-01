import { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Colours } from '../assets/styles/Colours';

type Props = {
    children: ReactNode,
    style?: ViewStyle,
};

export default function Card({ children, style }: Props): JSX.Element {
    return (
        <View style={[styles.card, style]}>{ children }</View>
    );
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        padding: 16,
        backgroundColor: Colours.primary800,
        borderRadius: 8,
        elevation: 5,
        shadowColor: Colours.black,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.3
    },
});
