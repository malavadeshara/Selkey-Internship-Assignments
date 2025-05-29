import nodemailer from 'nodemailer';

const sendEmail = async (mailOptions) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        const info = await transporter.sendMail(mailOptions);
        return true;
    } catch (err) {
        console.error("Failed to send email:", err.message);
        return false;
    }
};

export default sendEmail