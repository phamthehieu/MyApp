import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useAppStore } from '@store/appStore';

export default function DetailsScreen() {
    const [theme, setTheme] = useAppStore(s => [s.theme, s.setTheme]);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Theme: {theme}</Text>
            <Pressable onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                <Text style={{ marginTop: 12, textDecorationLine: 'underline' }}>Toggle Theme</Text>
            </Pressable>
        </View>
    );
}
