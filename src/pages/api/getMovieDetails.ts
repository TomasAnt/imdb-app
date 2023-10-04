import { NextApiRequest, NextApiResponse } from "next"

import { getRequest } from "@utils/helpers"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const API_KEY = process.env.OMDB_API_KEY
  const selectedId = req.query.i

  if (!selectedId) {
    return res.status(400).json({ error: "Missing IMDb ID parameter" })
  }

  try {
    const data = await getRequest(
      `https://www.omdbapi.com/?apiKey=${API_KEY}&i=${selectedId}`
    )
    if (data.Response === "False") {
      return res.status(404).json({ error: data.Error })
    }
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
  }
}
