// select source

const selectSource = document.querySelector("#source");
const soundcloudValues = document.querySelectorAll(".source-option--sc");
const facebookValues = document.querySelectorAll(".source-option--fb");
const otherValues = document.querySelectorAll(".source-option--other");

selectSource.addEventListener("change", (e) => {
  console.log(e.target.value);
  if (e.target.value == "soundcloud") {
    soundcloudValues.forEach((elem) => {
      elem.style.display = "block";
    });

    facebookValues.forEach((elem) => {
      elem.style.display = "none";
    });

    otherValues.forEach((elem) => {
      elem.style.display = "none";
    });
  } else if ((e.target.value == "facebook")) {
    soundcloudValues.forEach((elem) => {
      elem.style.display = "none";
    });

    facebookValues.forEach((elem) => {
      elem.style.display = "block";
    });

    otherValues.forEach((elem) => {
      elem.style.display = "none";
    });
  } else if ((e.target.value == "other")) {
    soundcloudValues.forEach((elem) => {
      elem.style.display = "none";
    });

    facebookValues.forEach((elem) => {
      elem.style.display = "none";
    });

    otherValues.forEach((elem) => {
      elem.style.display = "block";
    });
  }
});
