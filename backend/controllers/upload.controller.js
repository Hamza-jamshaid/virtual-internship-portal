const multer = require("multer");
const getContainerClient = require("../config/blob");

const upload = multer({ storage: multer.memoryStorage() });

exports.uploadMiddleware = upload.single("file"); // ✅ function
exports.uploadFile = async (req, res) => {      // ✅ function
  try {
    const containerClient = getContainerClient();
    const blobName = `${Date.now()}-${req.file.originalname}`;
    const blobClient = containerClient.getBlockBlobClient(blobName);

    await blobClient.uploadData(req.file.buffer);

    res.json({
      message: "File uploaded successfully",
      fileUrl: blobClient.url
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
