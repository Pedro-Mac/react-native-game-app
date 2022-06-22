import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../../components/Title'
import NumberContainer from '../../components/NumberContainer'
import UserFeedback from '../../components/UserFeedback'

interface Props {
    userNumber: string
    resetUserNumber: () => void
    gameOver: () => void
}

const Game = ({ userNumber, resetUserNumber, gameOver }: Props) => {
    const [guessNumber, setGuessNumber] = useState<null | number>(null)
    const [max, setMax] = useState<number>(99)
    const [min, setMin] = useState<number>(1)
    const [error, setError] = useState<null | string>(null)

    const setRandomIntFromInterval = (min: number = 1, max: number = 99) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    useEffect(() => {
        const randomNr = setRandomIntFromInterval(min, max)
        setGuessNumber(randomNr)
    }, [])

    useEffect(() => {
        if (Number(userNumber) === Number(guessNumber!)) {
        }
    }, [])

    const handleLowerClick = () => {
        if (error) setError(null)

        if (Number(guessNumber!) > Number(userNumber)) {
            console.log('hit condition')

            setGuessNumber((prev) =>
                setRandomIntFromInterval(min, Number(prev!) - 1)
            )
            setMax(Number(guessNumber!))
        } else {
            setError('Hey! Tell the poor guy the truth!')
        }
    }

    const handleHigherClick = () => {
        if (error) setError(null)

        if (Number(userNumber) > Number(guessNumber!)) {
            setGuessNumber((prev) =>
                setRandomIntFromInterval(Number(prev!) + 1, max)
            )
            setMin(Number(guessNumber!))
        } else {
            setError('Hey! Tell the poor guy the truth')
        }
    }

    if (Number(userNumber) === Number(guessNumber!)) {
        console.log('game won')
    }

    return (
        <View style={styles.container}>
            <Title>Oponent's guess</Title>
            <NumberContainer>{guessNumber}</NumberContainer>
            <UserFeedback
                handleHigherClick={handleHigherClick}
                handleLowerClick={handleLowerClick}
                error={error}
                handleReset={resetUserNumber}
            />

            {/* log rounds */}
        </View>
    )
}

export default Game

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 48,
        paddingHorizontal: 24,
    },
})
