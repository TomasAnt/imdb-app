import { NextApiRequest, NextApiResponse } from "next"

/**
 * imageProxy API Route
 *
 * This function serves as a proxy to load external images. It takes an image URL as a query parameter,
 * fetches the image, and returns it as a response. This is particularly useful for bypassing CORS issues
 * when trying to load images from external servers.
 *
 */

export default async function imageProxy(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query

  if (!url) {
    return res.status(400).end()
  }

  try {
    const imageRes = await fetch(String(url))
    const imageBuffer = await imageRes.arrayBuffer()
    const buffer = Buffer.from(imageBuffer)

    res.setHeader("Content-Type", "image/jpeg")
    res.send(buffer)
  } catch (error) {
    res.status(500).send("Internal Server Error")
  }
}
