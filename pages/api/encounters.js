import { connectToDatabase } from '../../utils/mongodb'
import { ObjectId } from 'mongodb'

export default async function handler(req, res) {
  console.log('api call to encounters')
  const {db} = await connectToDatabase();
  const method = req.method
  const body = req.body
  let response = {}

  if (method == 'POST' && body.action === 'getall') {
    console.log('get all encounters')
    response = await db.collection("encounters").find({}).toArray()
  }

  if (method == 'POST' && body.action === 'query') {
    console.log('get filtered encounters')
    console.log(req.body.data)
    if (body.data._id) body.data = {...body.data, _id: new ObjectId(body.data._id)}

    response = await db.collection("encounters").find(req.body.data).toArray()
  }
  
  if (method == 'POST' && body.action === 'addone') {
    console.log('add 1 encounter')
    response = await db.collection("encounters").insertOne(body.data);
  }

  if (method == 'POST' && body.action === 'editone') {
    console.log('edit 1 encounter')
    const id = new ObjectId(body.data._id)
    response = await db.collection("encounters").updateOne({_id: id}, {$set: {...body.data, _id: id}});

    console.log(response)
  }

  if (method == 'POST' && body.action === 'deleteone') {
    console.log('delete encounter')
    const id = new ObjectId(body.data._id)
    console.log(id)
    response = await db.collection('encounters').deleteOne({_id: id});
  }

  console.log(response)
  res.json(response)
}
