import type { NextApiRequest, NextApiResponse } from "next";
import api from "../../../api";

type Data = {
  image: string;
  location: string;
  description: string;
  services: string[];
  avatar: string;
}[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const home = await api.homeData();
  res.status(200).json(home);
}
