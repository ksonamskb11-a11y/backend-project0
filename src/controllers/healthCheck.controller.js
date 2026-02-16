import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";

  
async function healthCheck(req,res) {
    try {
        return res.status(200).json(new ApiResponse(200,{},`app is all good and running on port :${process.env.PORT} `));
    } catch (error) {
        throw new ApiError(500,"app is not running",error);
    }
}

export { healthCheck };