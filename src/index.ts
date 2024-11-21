import express, { Response, Request } from "express";

const app = express()

app.get("/", (req: Request, res: Response) => {
    console.log("end point ini ada yg pake");
    res.json(
        {
            no: 1,
            nama: "Radya",
            instansi: "UMM"
        },
    )
})

app.listen(3000, () => {
    console.log("Api berjalan pada port 3000");
})