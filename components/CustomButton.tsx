import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
    onPress?: any;
    title?: string;
    type?: 'primary' | 'secondary';
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    disabled?:boolean;
}

const CustomButton = ({ title, onPress, type, iconLeft, iconRight,disabled }: Props) => {
    return (
        <TouchableOpacity style={type == 'primary' ? styles.primary : styles.secondary}
        onPress={onPress} disabled={disabled?disabled:false}>
            <Text style={type == 'primary' ? styles.primaryTitle : styles.secondaryTitle}>
                {iconLeft ? iconLeft: null}
                {title ? `  ${title}  ` : 'Click Here'}
                {iconRight ? iconRight : null}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton;

const styles = StyleSheet.create({
    secondary: {
        borderRadius: 10,
        justifyContent: 'center',
        height: 45,
        width: "100%",
        borderWidth: 2,
        borderColor: '#00357B',
        alignItems: "center"
    },
    primary: {
        borderRadius: 10,
        justifyContent: 'center',
        height: 45,
        width: "100%",
        borderWidth: 2,
        borderColor: '#00357B',
        backgroundColor: "#00357B",
        alignItems: "center"
    },
    secondaryTitle: {
        color: "#00357B",
        fontSize: 17
    },
    primaryTitle: {
        color: "#ffffff",
        fontSize: 17
    }
})