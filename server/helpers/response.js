class Response {

    /**
     * 
     * succes message
     * @body res, message, data, status
     * @return status, message 
     */

    static successMessage(res, message, data = null, status){

        res.status(status).json(
            data?//if
            {
                status:status,
                message,
                data
            }
            ://else
            {
                status:status,
                message,
            }
        )
    }
    static errorMessage(res, error, status){

        res.status(status).json(
            {
                status:status,
                error
            }
        )
    }
}
export default Response;