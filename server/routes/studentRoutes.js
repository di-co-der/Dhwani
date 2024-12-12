const { uploadVideo } = require("../controllers/studentController");

const router = require("express").Router();
const multer = require("multer");

const upload = multer({
    storage: multer.diskStorage({}),
    // limits:{fileSize:50000000},
}
);

router.post("/uploadvideo", upload.single("video"), uploadVideo);


module.exports = router;