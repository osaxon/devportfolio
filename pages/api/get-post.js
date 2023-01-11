import { getSinglePost } from "../../lib/queries"

export default async function handler(req, res) {
  const {slug} = req.query
  console.log(slug)
  try {
    const response = await getSinglePost(slug);
    if(response){
        return res.status(200).json(response);
    }
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  } 
}
