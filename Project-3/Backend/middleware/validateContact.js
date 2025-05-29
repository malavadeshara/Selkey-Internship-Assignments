import validator from 'validator';

const validateContact = (req, res, next) => {
  const { fullName, email, phoneNumber, message } = req.body;

  const errorMessages = [];

  // Full name validation
  if (!fullName || typeof fullName !== 'object') {
    errorMessages.push('Full name must include first and last name.');
  } else {
    const { firstName, lastName } = fullName;

    if (!firstName || validator.isEmpty(firstName.trim())) {
      errorMessages.push('First name is required.');
    }

    if (!lastName || validator.isEmpty(lastName.trim())) {
      errorMessages.push('Last name is required.');
    }
  }

  // Email validation
  if (!email || !validator.isEmail(email)) {
    errorMessages.push('A valid email is required.');
  }

  // Phone number validation
  if (!phoneNumber || !validator.isMobilePhone(phoneNumber, 'any')) {
    errorMessages.push('A valid phone number is required.');
  } else {
    const digitsOnly = phoneNumber.replace(/\D/g, ''); // Remove non-digit characters

    if (digitsOnly.length !== 10) {
      errorMessages.push('Phone number must be exactly 10 digits.');
    }

    if (/^(\d)\1+$/.test(digitsOnly)) {
      errorMessages.push('Phone number cannot have all digits the same.');
    }
  }

  // Message validation
  if (!message || validator.isEmpty(message.trim())) {
    errorMessages.push('Message cannot be empty.');
  } else if (message.trim().split(/\s+/).length < 2) {
    errorMessages.push('Message must contain at least two words.');
  }

  // If any errors, return a single message string (not errors array)
  if (errorMessages.length > 0) {
    return res.status(400).json({
      success: false,
      message: errorMessages.join(' ')
    });
  }

  // If no errors, proceed to next middleware
  next();
};

export default validateContact;