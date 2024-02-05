import { Request, Response, Router } from "express"

const router: Router = Router()

router.get("/", (req: Request, res: Response) => {
  res.send("GET index")
})

module.exports = router