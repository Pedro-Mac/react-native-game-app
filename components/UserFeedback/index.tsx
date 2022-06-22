import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimaryButton from '../PrimaryButton/primaryButton'
import { globalColors } from '../../styles/colors'

interface Props {
    handleLowerClick: () => void
    handleHigherClick: () => void
    error: string | null
    handleReset: () => void
}

const UserFeedback = ({
    handleHigherClick,
    handleLowerClick,
    handleReset,
    error,
}: Props) => {
    return (
        <View>
            <View>
                <PrimaryButton onPress={handleLowerClick}>Lower</PrimaryButton>
            </View>
            <View>
                <PrimaryButton onPress={handleHigherClick}>
                    Higher
                </PrimaryButton>
            </View>

            {error && (
                <View>
                    <Text>{error}</Text>
                </View>
            )}

            <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
        </View>
    )
}

export default UserFeedback

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
    },
    btnContainer: {
        flex: 1,
    },
    errorText: {
        color: globalColors.accent500,
        fontWeight: '300',
    },
    errorContainer: {
        // width: '100%',
    },
    width100: {
        width: '100%',
    },
    // screen: {
    //     flex: 1,
    // },
})
