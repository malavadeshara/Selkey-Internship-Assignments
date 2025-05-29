import Contact from '../models/contact.js'
import sendEmail from '../utils/mailSender.js'
import createMailOption from '../utils/mailOption.js';

const saveInfo = async (req, res) => {
  const { fullName, email, phoneNumber, message } = req.body;

  try {
    const newContact = new Contact({ fullName, email, phoneNumber, message });
    // await newContact.save(); // save first, so data is persistent

    const mailOption = createMailOption(newContact);

    const response = await sendEmail(mailOption);

    if(response) {
      await newContact.save();
    } else {
      res.status(500).json({
      success: false,
      message: 'Server error while saving contact info or sending email.'
    });
    }

    res.status(201).json({
      success: true,
      message: 'Contact information saved and email sent successfully.'
    });
  } catch (error) {
    console.error('Error in saveInfo:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while saving contact info or sending email.'
    });
  }
};

export default saveInfo;