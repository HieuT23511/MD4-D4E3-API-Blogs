import {DataSource} from "typeorm";
import {Blog} from "./src/entity/Blog";
import express from "express";
import bodyParser from "body-parser";
import {AppDataSource} from "./src/data-source";
import {apiRouters} from "./src/routers/api.routers";

const app = express();
export const ProductRepo = AppDataSource.getRepository(Blog);

const PORT = 3535;

//kết nối tới database bằng phương thức initialize
AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!")
}).catch((err) => {
    console.error("Error during Data Source initialization:", err)
})

// Cau hinh views/parse
// app.set("view engine", "ejs");
// app.set("views", "./src/views");
app.use(bodyParser.json());
app.use(express.json());

//router:
app.use(apiRouters);

//listen:
app.listen(PORT, 'localhost', () => {
    console.log(`App running with port http://localhost:${PORT} `)
})

