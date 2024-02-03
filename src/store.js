import { configureStore } from '@reduxjs/toolkit';
import greetings from './slice';

export default configureStore({ reducer: { greetings } });
