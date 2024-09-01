import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AIDashboard = () => {
  const [focusData, setFocusData] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Fetch focus data
    const fetchFocusData = async () => {
      try {
        const result = await axios.get('/api/focus-data');
        setFocusData(result.data);
      } catch (error) {
        console.error('Error fetching focus data:', error);
      }
    };

    // Fetch AI recommendations
    const fetchRecommendations = async () => {
      try {
        const result = await axios.get('/api/recommendations');
        setRecommendations(result.data);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchFocusData();
    fetchRecommendations();
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">Focus Dashboard</h1>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Focus Data</h2>
        {focusData ? (
          <p>Focus Level: {focusData.level}</p>
        ) : (
          <p>Loading focus data...</p>
        )}
      </div>
      <div>
        <h2 className="text-lg font-semibold">Recommendations</h2>
        {recommendations.length > 0 ? (
          <ul className="list-disc list-inside">
            {recommendations.map((rec, index) => (
              <li key={index} className="mb-2">{rec}</li>
            ))}
          </ul>
        ) : (
          <p>Loading recommendations...</p>
        )}
      </div>
    </div>
  );
};

export default AIDashboard;
