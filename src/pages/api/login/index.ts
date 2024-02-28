import {USERS} from "@/data/users";
import type {NextApiRequest, NextApiResponse} from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  
  if (req.method !== "POST") {
    res.status(405).json({message: "Metodo no permitido"});
  
  }

	// Aca se realiza la consulta a la base de datos
	const user = USERS.find(
		(user) => user.email === email && user.password === password
	);

	if (!user) {
		res.status(401).json({message: "Usuario no existe"});
	}

	// Setear alguna cookie
	res.setHeader("set-cookie", "path=/; access=true; samesite=lax; HttpOnly;");

	res.status(200).json({message: "Usuario logeado con exito"});
}
