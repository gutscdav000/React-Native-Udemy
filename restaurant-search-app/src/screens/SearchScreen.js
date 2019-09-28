import React, {useState, useEffect} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import SearchBar from '../Components/SearchBar';
import yelp from '../api/yelp';

const searchScreen = props => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const searchApi = async searchTerm => {
        try {
            const resp = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'columbus'
                }
            });
            setResults(resp.data.businesses);
        } catch(error) {
            console.log(error);
            setErrorMsg("something went wrong")
        }
    };

    useEffect(() => {
        searchApi('pasta');
    }, [])

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)} />
            <Text> search screen</Text>
            <Text>{
                   errorMsg === ''? 
                   `We have found ${results.length} results.`:
                    errorMsg
                   } 
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default searchScreen;