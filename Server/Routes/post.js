import express from 'express'

const postRouter = express.Router();

postRouter.get("/test", (req, res) => {
    res.json("This is a post!");
});

export default postRouter;