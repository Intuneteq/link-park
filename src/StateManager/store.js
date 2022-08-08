// import {configureStore} from '@reduxjs/toolkit';
// import dataReducer from '../Features/dataSlice';

// export const store = configureStore({
//     reducer: {
//         data: dataReducer,
//     }
// })















//1. open statemanager folder and open store file
//2. import confingure store from redux tool kit
//3. immediately export a const store assigning it to configureStore and pass in reducers
//4. Go to index.js and import the store from here
//5. Also, import provider from react-redux and wrap around app and pass in the store props
//6. Open a features folder to hold each slice -> Logic for tasks
//7. In each slice, import createSlice from redux/toolkit
//8. declare the initial state as an object into a variable
//9. export const slice name = createSlice({})
//10. In the createSlice object, pass in the name of the logic, initialstate and reducers--> same thing as action
//11. export both actions and reducers
//12. open store file and import dataReducer from dataSlice
//13. Pass it into the reducer object