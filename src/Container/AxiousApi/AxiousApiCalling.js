import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const AxiousApiCalling = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = axios('https://jsonplaceholder.typicode.com/posts');
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>yyy{data.userId}</Text>
    </View>
  );
};

export default AxiousApiCalling;