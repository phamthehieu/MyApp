import React from 'react';
import { View, Text, Button } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { api } from '@services/api';
import { screenStyles } from '@styles/screens';

export default function HomeScreen({ navigation }: any) {
    const { data, isLoading, error } = useQuery({
        queryKey: ['hello'],
        queryFn: async () => (await api.get('/hello')).data,
    });

    return (
        <View style={screenStyles.container}>
            <Text style={screenStyles.title}>RN 2025 Starter</Text>
            {isLoading && <Text>Loading...</Text>}
            {error && <Text>Error</Text>}
            {data && <Text>{JSON.stringify(data)}</Text>}
            <Button title="Go Details" onPress={() => navigation.navigate('Details')} />
        </View>
    );
}
