const userProfile = (req, res) => {
    try {
       
    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err.message
        })
    }
}

export default userProfile