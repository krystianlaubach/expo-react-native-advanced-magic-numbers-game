import { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import { Colours } from '../assets/styles/Colours';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import Card from '../components/Card';
import Instructions from '../components/Instructions';

type Props = {
    onPickNumber: (pickedNumber: number) => void,
};

export default function StartGameScreen({ onPickNumber }: Props): JSX.Element {
    const [enteredNumber, setEnteredNumber] = useState<string>('');

    const numberInputHandler = (enteredText: string): void => {
        setEnteredNumber(enteredText);
    };

    const resetInputHandler = (): void => {
        setEnteredNumber('');
    };

    const confirmInputHandler = (): void => {
        const number: number = parseInt(enteredNumber);

        if (isNaN(number) || number <= 0 || number > 99) {
            Alert.alert(
                'Invalid Number!',
                'Number has to be a number between 1 and 99!',
                [{text: 'OK', style: 'default', onPress: resetInputHandler}],
            );

            return;
        }

        onPickNumber(number);
    };

    return (
        <KeyboardAwareScrollView contentContainerStyle={ styles.container } enableOnAndroid={ true }>
            <Title>Guess My Number</Title>
            <Card>
                <Instructions>Enter a Number</Instructions>
                <TextInput
                    style={ styles.numberInput }
                    maxLength={2}
                    keyboardType='numeric'
                    autoCapitalize='none'
                    autoCorrect={ false }
                    value={ enteredNumber }
                    onChangeText={ numberInputHandler }
                />
                <View style={ styles.buttonsContainer }>
                    <View style={ styles.buttonContainer }><PrimaryButton onPress={ resetInputHandler }>Reset</PrimaryButton></View>
                    <View style={ styles.buttonContainer }><PrimaryButton onPress={ confirmInputHandler }>Confirm</PrimaryButton></View>
                </View>
            </Card>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginTop: 100,
        marginHorizontal: 24,
    },
    numberInput: {
        height: 50,
        width: 50,
        marginVertical: 8,
        borderBottomColor: Colours.accent500,
        borderBottomWidth: 2,
        color: Colours.accent500,
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    buttonContainer: {
        flex: 1,
    },
});
