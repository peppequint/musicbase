const express = require("express");
// const Track = require("./../models/Track");

// auth

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const url = req.body.url;
    const filteredUrl = url.filter((item) => item);

    const data = {
      title: req.body.title,
      artist: req.body.artist,
      source: req.body.source,
      url: filteredUrl,
      timestamp: req.body.timestamp,
      note: req.body.note,
    };

    const removeEmpty = (obj) => {
      Object.keys(obj).forEach((k) => {
        obj[k] === "" && delete obj[k];
      });
      return obj;
    };

    const cleanData = removeEmpty(data);

    console.log(cleanData);
    // const track = new Track(data);

    // await track.save();

    // res.status(201).redirect("/");
  } catch {
    res.status(400);
  }
});

async function add(req, res) {
  return res.render("pages/add", { data: "Add" });
}

module.exports = { router, add };
