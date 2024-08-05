const express = require("express");
const path = require("path");
const User = require("../model/user");
const router = express.Router();
const { upload } = require("../multer");
const ErrorHandler = require("../utils/Errorhandler");
const fs = require("fs");

router.post("/create-user", upload.single("file"), async (req, res, next) => {
  const { name, email, password } = req.body;
  const userEmail = await User.findOne({ email });

  if (userEmail) {
    const filename = req.file.filename;
    const filePath = `uploads/${filename}`;
    fs.unlink(filePath, (err) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Error Deleting File" });
      } else {
        res.json({ message: "File Deleted Succesfully" });
      }
    });
    return next(new ErrorHandler("user already exists", 400));
  }

  const filename = req.file.filename;
  const fileUrl = path.join(filename);
  const user = {
    name: name,
    email: email,
    password: password,
    avatar: fileUrl,
  };

  const newUser = await User.create(user);
  res.status(201).json({
    success: true,
    newUser,
  });
});

module.exports = router;
