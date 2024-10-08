const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');

const cors = require('cors');

const app = express();
app.use(cors());


app.use(express.static(path.join(__dirname, 'public')));


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});



app.get("/",function(req,res){
  res.sendFile(path.join(__dirname+"/File-Transfer-Project.html"))
  
})



const upload = multer({ storage });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "infotech6369@gmail.com",
    pass: 'pfuaytvmyoxqpjak'
  }
});

app.post('/send-email', upload.single('file'), (req, res) => {
  const email = req.body.email;
  const password=req.body.passowrd;
  const file = req.file;

  const mailOptions = {
    from: password,
    to: email,
    subject: 'File Upload',
    text: 'You have successfully uploaded a file!',
    attachments: [
      {
        path: file.path
      }
    ]
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    setTimeout(() => {}, 8000);
  });
});

app.listen(3000 ,() => {
  console.log('Server is running on port 3000');

 
});