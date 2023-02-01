import { Image, StyleSheet, Text, View } from 'react-native';
import Title from '../components/Title';
import { Colours } from '../assets/styles/Colours';
import PrimaryButton from '../components/PrimaryButton';

type Props = {
    rounds: number,
    userNumber: number|null,
    onStartNewGame: () => void,
};

export default function GameOverScreen({ rounds, userNumber, onStartNewGame }: Props): JSX.Element {
    return (
        <View style={ styles.container }>
            <Title>GAME OVER!</Title>
            <View style={ styles.imageContainer }>
                <Image style={ styles.image } source={ require('../assets/images/success.png') } />
            </View>
            <Text style={ styles.summary }>
                Your phone needed <Text style={ styles.highlight }>{ rounds }</Text> rounds to guess the number <Text style={ styles.highlight }>{ userNumber }</Text>
            </Text>
            <PrimaryButton onPress={ onStartNewGame }>Start New Game</PrimaryButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colours.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summary: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colours.primary500,
    },
});
