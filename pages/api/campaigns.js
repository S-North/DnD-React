import { connectToDatabase } from '../../utils/mongodb'
import { ObjectId } from 'mongodb'

export default async function handler(req, res) {
  const {db} = await connectToDatabase();
  const method = req.method
  const body = req.body
  // const request = req.query;
  let response = null

  // method to return filtered results from the collection
  if (method === 'POST' && body.action === 'query') {
    console.log('get filtered campaigns')
    console.log(body.data)
    if (body.data._id) body.data = {...body.data, _id: new ObjectId(body.data._id)}
    console.log(body.data)
    response = await db.collection("campaigns").find(body.data).toArray()
  }

  // method to add a new document
  if (method === 'POST' && body.action === 'addone') {
    console.log('get all campaigns')
    response = await db.collection("campaigns").insertOne(body.data);
  }

  // method to edit an existing document
  if (method === 'POST' && body.action === 'editone') {
    console.log('get all campaigns')
    const id = new ObjectId(body.data._id)
    response = await db.collection("campaigns").updateOne({_id: id}, {$set: {...body.data, _id: id}});
  }

  if (method === 'POST' && body.action === 'deleteone') {
    console.log('delete campaign')
    const id = new ObjectId(body.data._id)
    console.log(id)
    response = await db.collection('campaigns').deleteOne({_id: id});
  }

  // console.log(`response is ${response}`)
  console.log(response)

  res.json(response)
}
