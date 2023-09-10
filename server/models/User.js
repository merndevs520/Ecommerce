import mongoose from "mongoose";

// adress types objects
const AddressSchema = new mongoose.Schema({
  address: String,
  type: Number,
});

// schema
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    fullname: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,

      trim: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },

    photo: {
      type: String,
      default: null,
    },
    address: {
      type: [AddressSchema],
    },

    isverfied: {
      type: Boolean,
      default: false,
    },
    loggedInDevice: {
      type: Array,
    },
    token: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// export model
export default mongoose.model("User", userSchema);
