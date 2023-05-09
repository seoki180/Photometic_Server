import * as baseResponse from '../config/baseResponse'

export const notFound = (req, res) => {
    res.status(404).json(baseResponse.SERVER_WRONG_ENDPOINT)
}

export const internalSeverError = (req, res) => {
    res.status(500).json(baseResponse.SERVER_ERROR)
}
