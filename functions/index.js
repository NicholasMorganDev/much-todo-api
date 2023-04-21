import functions from 'firebase-functions';
import express from "express";
import cors from "cors";
import { addNewItem, deleteItem, getAllItems, editItem } from './src/items';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/items', addNewItem)
app.get('/items', getAllItems)
app.patch('/items/:itemId', editItem)
app.delete('/items/:itemId', deleteItem)

export const api = functions.https.onRequest(app)
