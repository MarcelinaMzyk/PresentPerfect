import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    res.send("Hello world!");
});

router.post("/login", (req, res) => {
    res.send("Form submitted");
});

router.post("/register", (req, res) => {
    res.send("Form submitted");
});

router.post("/draw", (req, res) => {
    res.send("Form submitted");
});

export { router };
