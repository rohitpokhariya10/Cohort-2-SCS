// Post model import (database se post create karne ke liye)
const postModel = require("../models/post.model")

// ImageKit import (image upload karne ke liye)
const ImageKit = require("@imagekit/nodejs")
const { toFile } = require("@imagekit/nodejs")

// JWT import (user verify karne ke liye)
const jwt = require("jsonwebtoken")


// ImageKit configuration (private key env file se aa rahi hai)
const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})


// Post create controller
async function createPostController(req, res) {

    // Body aur file check karne ke liye
    console.log(req.body, req.file)

    // Cookies check karne ke liye
    console.log("cookies", req.cookies)

    // JWT token cookie se nikal rahe hain
    const token = req.cookies.JWT_TOKEN

    // Agar token nahi mila → unauthorized
    if (!token) {
        return res.status(401).json({
            message: "Token not provided, Unauthorized access"
        })
    }

    let decoded = null
    
    // Token verify kar rahe hain
    // Agar token galat hua to 401 bhejenge
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (err) {
        return res.status(401).json({
            message: "User not authorized"
        })
    }

    console.log(decoded)

    // Image ko ImageKit pe upload kar rahe hain
    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'), // image buffer convert
        fileName: "image", // file ka naam
        folder: "cohort-2-insta-clone-posts" // folder name
    })
 
    // Database me post create kar rahe hain
    const post = await postModel.create({
        caption: req.body.caption,     // user ka caption
        imageUrl: file.url,            // uploaded image ka URL
        userId: decoded.id             // token se user id
    })

    // Success response
    res.status(201).json({
        message: "Post created successfully.",
        post
    })
}


// Controller export
module.exports = {
    createPostController
}
