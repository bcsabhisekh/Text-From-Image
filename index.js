import tesseract from "node-tesseract-ocr";

const img = ["https://i.ibb.co/jTKYQqP/Captcha-United.png", "https://i.ibb.co/R4BB4DW/Captcha-Bajaj.jpg"];
const config = {
    lang: "eng",
    oem: 1,
    psm: 3,
}

const GetTextFromImage = function (img) {
    img && img.map(async (item, index) => {
        await tesseract
            .recognize(item, config)
            .then((text) => {
                console.log(index + 1 + " ", text)
            })
            .catch((error) => {
                console.log(error.message)
            })
    });
}

GetTextFromImage(img);

