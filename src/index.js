import { app } from './app.js';
import { connectDB } from "./db/config.js";

const port = process.env.PORT;          // to import/get port no. from .env file

// to start a server, by using '.listen'
connectDB()
.then(()=>{
          app.listen(port, () => {
                    console.log(`App is listening / running on port: ${port}`);
                  // console.log(`app is running on port: ${process.env.PORT}`);
          })
})
.catch((err)=> console.log(err,"Error in Running our App"));
