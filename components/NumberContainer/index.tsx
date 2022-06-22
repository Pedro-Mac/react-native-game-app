import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { globalColors } from '../../styles/colors'

interface Props {
    children: ReactNode
}

const NumberContainer = ({ children }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

export default NumberContainer

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: globalColors.accent500,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: globalColors.accent500,
        fontSize: 36,
        fontWeight: 'bold',
    },
})
