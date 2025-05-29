import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true,
        }
    },

    email: {
        type: String,
        required: true,
    },

    phoneNumber: {
        type: String,
        required: true,
    },

    message: {
        type: String,
    }
});

export default mongoose.model("Contact", contactSchema);