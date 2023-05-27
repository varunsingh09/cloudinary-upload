const multer = require("multer");
const cloudinary = require("cloudinary");
const { ErrorHandler } = require("./../errorHandler");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME || 'dedjqqast',
  api_key: process.env.API_KEY || '591741652157435',
  api_secret: process.env.API_SECRET || '4IEd7aNa5GjdWcxx9SdrXrgLALw',
});

const memoryStorage = multer.memoryStorage();

const upload = multer({
  storage: memoryStorage,
});

const uploadToCloudinary = async (fileString, format) => {
  try {
    const { uploader } = cloudinary;

    const res = await uploader.upload(
      `data:image/${format};base64,${fileString}`
    );

    return res;
  } catch (error) {
    throw new ErrorHandler(500, error);
  }
};

module.exports = {
  upload,
  uploadToCloudinary,
};