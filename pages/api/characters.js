import { connectToDatabase } from '../../utils/mongodb'
import { ObjectId } from 'mongodb'

export default async function handler(req, res) {
  const {db} = await connectToDatabase();
  const method = req.method
  const body = req.body
  let response = {}

  if (method === 'POST' && body.action === 'query') {
    console.log('get queried characters')
    if (body.data._id) body.data = {...body.data, _id: new ObjectId(body.data._id)}
    console.log(body.data)
    response = await db.collection("characters").find(body.data).toArray()
  }

  if (method === 'POST' && body.action === 'deleteone') {
    console.log('delete characters')
    const id = new ObjectId(body.data._id)
    response = await db.collection('characters').deleteOne({_id: id});
  }

  if (method === 'POST' && body.action === 'addone') {
    console.log('add 1 characters')
    console.log(body.data)
    response = await db.collection("characters").insertOne(body.data);

    console.log(response)
  }

  if (method === 'POST' && body.action === 'editone') {
    console.log('edit 1 characters')
    const id = new ObjectId(body.data._id)
    response = await db.collection("characters").updateOne({_id: id}, {$set: {...body.data, _id: id}});

    console.log(response)
  }
  // const response = await db.collection("campaigns").updateOne(data);
  console.log(`response is ${response}`)
  console.log(response)

  res.json(response)
}
