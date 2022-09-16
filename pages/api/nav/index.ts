import type { NextApiRequest, NextApiResponse } from "next";
import api from "../../../api";

type Data = { name: string }[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const links = await api.links();
  res.status(200).json(links);
}
