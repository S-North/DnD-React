import { connectToDatabase } from '../../utils/mongodb'
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const {db} = await connectToDatabase();
  const method = req.method
  const body = req.body
  let response = {}

  if (method === 'POST' && body.action === 'query') {
    console.log('get queried adventures')
    if (body.data && body.data._id) body.data = {...body.data, _id: new ObjectId(body.data._id)}
    response = await db.collection("monsters").find(body.data).toArray()
  }

  if (method === 'POST' && body.action === 'minilist') {
    // returns all monsters from the collection but with selected fields #projection
    console.log('get mini list of monsters')
    if (body.data && body.data._id) body.data = {...body.data, _id: new ObjectId(body.data._id)}
    response = await db.collection("monsters").find(
      {
        cr: {$gte: body.data.minCr, $lte: body.data.maxCr},
        name: {$regex: `[\w*]?${body.data.search}[\w*]?`, $options: "i"}
      }, 
      { projection: 
        { 
          _id: 1, 
          name: 1, 
          cr: 1,
          type: 1,
          size: 1
        } }
      ).toArray()
  }

  if (method === 'POST' && body.action === 'addmany') {
    // returns all monsters from the collection but with selected fields #projection
    console.log('insert array of monsters')
    // console.log(body.data)
    // if (body.data._id) body.data = {...body.data, _id: new ObjectId(body.data._id)}
    response = await db.collection("monsters").insertMany(body.data)
  }

  console.log(response)
  res.json(response)
}