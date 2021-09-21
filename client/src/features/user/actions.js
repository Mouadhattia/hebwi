import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


 export const userActions = 

    createAsyncThunk("users/getuser", async () => {
        try {
          let response = await axios.get("http://localhost:5000/api/user/");
      
          return await response;
        } catch (error) {
          console.log(error);
        }
      })





