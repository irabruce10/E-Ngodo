import express, { request, response } from "express";

import ingodoModal from "../schema/ingodoSchema";
const router = express.Router();

router.get("getAllByUserID:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const record = await ingodoModal.find({ userId: userId });

    if (record.length === 0) {
      return res.status(404).send("No transactions found for the user");
    }
    res.status(200).send(record);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
