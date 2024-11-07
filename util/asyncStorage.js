import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to store the user token
const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem('userToken', token);
    console.log('Token stored successfully');
  } catch (error) {
    console.error('Error storing the token:', error);
  }
};

// Function to get the user token
const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    if (token !== null) {
      // Token retrieved successfully
      console.log('Token retrieved:', token);
      return token;
    }
    return null; // Token not found
  } catch (error) {
    console.error('Error retrieving the token:', error);
  }
};
// const getUser = async () => {
//   try {
//     // Retrieve the user data from AsyncStorage
//     const userString = await AsyncStorage.getItem('user');
    
//     if (userString) {
//       try {
//         // Parse the JSON string back into an object
//         const user = JSON.parse(userString);
//         console.log('User retrieved:', user); // Optional: Only in dev mode
//         return user;
//       } catch (parseError) {
//         console.error('Error parsing user data:', parseError);
//         return null; // Invalid JSON
//       }
//     }

//     console.warn('No user data found'); // Optional logging
//     return null; // User data not found
//   } catch (error) {
//     console.error('Error retrieving user data:', error);
//     return null; // Handle AsyncStorage retrieval errors
//   }
// };
// const storeUserData = async (response) => {
//   try {
//     const user = response.user;
//     if (!user) {
//       console.warn('No user data found in response.');
//       return;
//     }

//     const userString = JSON.stringify(user);
//     await AsyncStorage.setItem('user', userString);
//     console.log('User data stored successfully.');
//   } catch (error) {
//     console.error('Error storing user data:', error);
//   }
// };


const getUser = async () => {
  try {
    // Retrieve the user data from AsyncStorage
    const userString = await AsyncStorage.getItem('user');
    
    if (userString !== null) {
      // Parse the JSON string back into an object
      const user = JSON.parse(userString);
      
      // User data retrieved successfully
      console.log('User retrieved:', user);
      return user;
    }
    
    return null; // User data not found
  } catch (error) {
    console.error('Error retrieving user data:', error);
  }
};


const storeUserData = async (response) => {
  try {
    // Parse the user data from the response
    const user = response.user;
    
    // Convert user data to a string for storage
    const userString = JSON.stringify(user);
    
    // Store user data
    await AsyncStorage.setItem('user', userString);

    // Extract user type and store it separately (if needed)
    // const userType = user.type.toString(); // Ensure it's stored as a string
    // await AsyncStorage.setItem('userType', userType);

    // console.log('User data stored successfully.');
  } catch (error) {
    console.error('Error storing user data:', error);
  }
};

const deleteUser = async () => {
  try {
    // Remove the user data from AsyncStorage
    await AsyncStorage.removeItem('user');
    
    console.log('User data deleted successfully.');
  } catch (error) {
    console.error('Error deleting user data:', error);
  }
};

// Function to update the user token
const updateToken = async (newToken) => {
  try {
    await AsyncStorage.setItem('userToken', newToken);
    console.log('Token updated successfully');
  } catch (error) {
    console.error('Error updating the token:', error);
  }
};

// Function to delete the user token
const deleteToken = async () => {
  try {
    await AsyncStorage.removeItem('userToken');
    console.log('Token deleted successfully');
  } catch (error) {
    console.error('Error deleting the token:', error);
  }
};




      
// const Data=()=>{
//   let user = null;
//     useEffect(() => {
//       const fetchUserData = async () => {
//         const data = await getUser();
//         if (data) {
//          user=data;
//         }
//       }; 
//       fetchUserData();  // Fetch user data on component mount
//     }, []);

// return user;
//   }

export { storeToken, getToken, updateToken, deleteToken , storeUserData, getUser,deleteUser};
