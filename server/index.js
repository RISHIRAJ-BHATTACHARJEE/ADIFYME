import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { Contact } from "./models/contactModel.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => console.log(err));

app.post("/api/contact", async (req, res) => {
    try {
        const { firstName, lastName, email, message } = req.body;

        if(!firstName || !lastName || !email || !message) {
            // alert("All fields are required");
            return res.status(400).json({
                message: "All fields are required"
            })
        }

        const newContact = new Contact({ firstName, lastName, email, message });
        await newContact.save();

        res.status(200).json({ message: "Form data saved successfully" });
        // alert("Form Submitted Successfully")

    } catch (error) {
        console.log("Error saving form data:", error);
        res.status(500).json({
            message: "An error occured. Please try again."
        })
        // alert("An error occured. Please try again.")
    }
})

app.listen(process.env.PORT, () => {
    console.log("Server is running on port 3000");
})