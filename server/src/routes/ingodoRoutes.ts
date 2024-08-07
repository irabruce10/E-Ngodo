import express, { request, response } from "express";

import ingodoModel from "../schema/ingodoSchema";
const router = express.Router();

router.get("getAllByUserID:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const record = await ingodoModel.find({ userId: userId });

    if (record.length === 0) {
      return res.status(404).send("No transactions found for the user");
    }
    res.status(200).send(record);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const newRecordBody = req.body;
    const newRecord = new ingodoModel(newRecordBody);
    const savedRecord = await newRecord.save();
    res.status(200).send(savedRecord);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const newRecordBody = req.body;
    const record = await ingodoModel.findByIdAndUpdate(id, newRecordBody, {
      new: true,
    });

    if (!record) return res.status(404).send();
    res.status(200).send(record);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const record = await ingodoModel.findByIdAndDelete(id);

    if (!record) return res.status(404).send();
    res.status(200).send(record);
  } catch (error) {
    res.status(500).send(error);
  }
});
export default router;
