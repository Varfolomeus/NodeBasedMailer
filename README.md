# NodeBasedMailer
Email service that based on nodemailer, as transport used service ukr.net
simple mailer that uses server ukr.net
---------------------
to use it will be needed in project's root folder .env file with following parameters:

EMAIL_HOST=hostname
EMAIL_HOST_PASSWORD=<pass> to use EMAIL_HOST
EMAIL_HOST_USER=<username> to use EMAIL_HOST
EMAIL_PORT=<port> to use EMAIL_HOST
PORT=3002 //port that listens mailer
SEQURE=true or false to authenticate and complete sending email
---------------------
to send email through this mailer without any frontend use Insomnia or Postman

//place mailer in some folder, open in code editor install dependencies and run with Node JS.

URL: http://somehost:3002/mail

request body:
raw/JSON
{
    "email":"simpleaddress@simpleservice.somedomain",
    "message":"some message"
}
---------------------
