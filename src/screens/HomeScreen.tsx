import React from 'react';
import { View, Text, Button } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { api } from '@services/api';

export default function HomeScreen({ navigation }: any) {
    const { data, isLoading, error } = useQuery({
        queryKey: ['hello'],
        queryFn: async () => (await api.get('/hello')).data,
    });

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 22, marginBottom: 12 }}>RN 2025 Starter</Text>
            {isLoading && <Text>Loading...</Text>}
            {error && <Text>Error</Text>}
            {data && <Text>{JSON.stringify(data)}</Text>}
            <Button title="Go Details" onPress={() => navigation.navigate('Details')} />
        </View>
    );
}
