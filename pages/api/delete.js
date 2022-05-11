import { connectToDatabase } from '../../utils/mongodb'
import { ObjectId } from 'mongodb'

export default async function handler(req, res) {
  const {db} = await connectToDatabase();
  const method = req.method
  const data = req.body.data
  const collection = req.body.collection
  let response = null

  if (method === 'POST' && data && collection) {
    console.log('delete some stuff')
    const id = new ObjectId(data._id)
    switch (collection) {
      case 'encounters':
        response = await db.collection('encounters').deleteOne({_id: id});
        break
      case 'characters':
        response = await db.collection('characters').deleteOne({_id: id});
        break
      case 'adventures':
        response = await db.collection('encounters').deleteMany({adventureId: data._id})
        response = await db.collection('adventures').deleteOne({_id: id});
        break;
      case 'campaigns':

        response = await db.collection('encounters').deleteMany({campaignId: data._id})
        response = await db.collection('adventures').deleteMany({campaignId: data._id})
        response = await db.collection('characters').deleteMany({campaignId: data._id})
        response = await db.collection('campaigns').deleteOne({_id: id});
    }
  }
  console.log(response)
  res.json(response)
}
