import { db } from "./dbConnect.js";
//import { FieldValue } from "firebase-admin/firestore";

const coll = db.collection('tasks')

export async function addNewItem (req, res) {
  const newItem = req.body
  //newItem.createdAt = FieldValue.serverTimestamp();
  await coll.add(newItem)
    .catch(err => res.status(500).send(err))
    //res.status(201).send({message: 'Item added'})
  getAllItems(req, res)
}

export async function getAllItems (req, res) {
  const collection = await coll.get()
    .catch(err => res.status(500).send(err))
  const itemList = collection.docs.map(items => items.data()) //(doc => ({...doc.data(), id: doc.id}))
  res.send(itemList)
}

export async function editItem (req, res) {
  const { itemId } = req.params
  await coll.doc(itemId).update(req.body)
    .catch(err => res.status(500).send(err));
  getAllItems(req, res)
}

export async function deleteItem (req, res) {
  const { itemId } = req.params;
  await coll.doc(itemId).delete()
    .catch(err => res.status(500).send(err))
  res.status(202).send({message: "Item Deleted"})
}
