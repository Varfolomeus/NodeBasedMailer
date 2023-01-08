import dotenv from 'dotenv';
import nodeMailer from 'nodemailer';

dotenv.config();

const { EMAIL_HOST, EMAIL_HOST_USER, EMAIL_HOST_PASSWORD, EMAIL_PORT, SEQURE } =
  process.env;

// console.log(EMAIL_HOST_PASSWORD);

class Mail {
  #transporter = null;

  constructor() {
    this.#transporter = this.#getTransporter();
  }

  #getTransporter() {
    return nodeMailer.createTransport({
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      secure: SEQURE,
      auth: {
        user: EMAIL_HOST_USER,
        pass: EMAIL_HOST_PASSWORD,
      },
      tls: {
        ciphers: 'SSLv3',
      },
    });
  }
  async send(receiver, message) {
    try {
      const info = await this.#transporter.sendMail({
        from: 'gelohc@ukr.net',
        to: receiver,
        subject: 'Welcome to test mail service! Thank you for using.',
        text: message,
        html: `<b>Howdy ${message}</b>`,
      });
      return info.messageId;
    } catch (error) {
      return error;
    }
  }
}

export default new Mail();
