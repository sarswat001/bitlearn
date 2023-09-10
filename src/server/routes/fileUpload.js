const express = require("express");
const path = require('path');
const { google } = require('googleapis');
const OAuth2Client = google.auth.OAuth2;
const multer = require('multer');
const storage = multer.diskStorage({});
const upload = multer();
const fs = require('fs');
const { Readable } = require('stream');


const CLIENT_ID = '394382853215-h0d4shf61nqilobi80434ltegvm6cuuu.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URL = 'https://developers.google.com/oauthplayground';

const REFRESH_TOKEN = '1//04By4mikI3YLQCgYIARAAGAQSNwF-L9IrOZVLRGbFIuqRt3Nu7b_rB3uQ9EN5Z-aYlFJGsmSRHX2OXOMc-JtrufvBrKioY3k7Loo';

const oAuth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
const drive = google.drive({ version: 'v3', auth: oAuth2Client });


const router = express.Router();

router.post('/', upload.single('file'), (req, res) => {
    const uploadedFile = req.file;
    console.log(uploadedFile);
    console.log("------------------------------------------------");

    const folderId = '1Wd0S8BxwFDw5xBeUWcRyn96RpxtXpmJS';
    const fileMetadata = {
        name: uploadedFile.originalname,
        parents: [folderId],
    };

    const fileStream = Readable.from(uploadedFile.buffer);
    const media = {
        mimeType: uploadedFile.mimetype,
        body: fileStream, // Use the file content from multer's buffer
    };

    drive.files.create(
        {
            resource: fileMetadata,
            media: media,
            fields: 'id',
        },
        (err, file) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            } else {
                const fileId = file.data.id;
                const fileURL = `https://drive.google.com/uc?id=${fileId}`;
                return res.status(200).json({ message: 'File uploaded successfully', fileURL });
            }
        }
    );
});

module.exports = router