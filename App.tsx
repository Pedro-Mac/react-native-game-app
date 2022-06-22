import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import StartGame from './screens/startGame'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import Game from './screens/game'
import { globalColors } from './styles/colors'
import GameOver from './screens/gameOver'

export default function App() {
    const [userNumber, setUserNumber] = useState<null | string>(null)
    const [gameOver, setGameOver] = useState<boolean>(false)

    const handlePickNumber = (pickedNumber: string) => {
        setUserNumber(pickedNumber)
    }

    const renderScreen = () => {
        if (gameOver) {
            return <GameOver />
        }
        if (userNumber)
            return (
                <Game
                    userNumber={userNumber!}
                    resetUserNumber={() => {
                        setUserNumber(null)
                        setGameOver(false)
                    }}
                    gameOver={() => setGameOver(true)}
                />
            )
        return <StartGame onGameStart={handlePickNumber} />
    }

    console.log({ userNumber })

    return (
        <LinearGradient
            style={styles.container}
            colors={['#4e0329', globalColors.accent500]}
        >
            <ImageBackground
                source={require('./assets/images/background.png')}
                resizeMode="cover"
                style={styles.container}
                imageStyle={styles.backgroundImage}
            >
                <SafeAreaView style={styles.container}>
                    {renderScreen()}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.1,
    },
})
