import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';
import { bold } from 'ansi-colors';
import ResultsDetail from './ResultDetail';

const resultslist = ({title, results}) => {
 
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => results.id}
                renderItem={({item}) => {
                    return <ResultsDetail result={item}/>
                }} />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
    container : {
        marginBottom: 10,
    }
});

export default resultslist;