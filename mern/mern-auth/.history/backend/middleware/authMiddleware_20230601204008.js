import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'

const protect = asyncHandler(async (req, res, next) => {
    let token 

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decoded.userId).select('-password')
        } catch (err) {
            res.status(401)
            throw new Error('Not authorized, invalid token')
        }
    } else {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

export {protect}