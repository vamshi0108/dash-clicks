const mongoose = require("mongoose");
const validator = require("validator");
const Task = require("./task");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid");
        }
      },
    },
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      // validate(value) {
      //   if (!validator.isEmail(value)) {
      //     throw new Error("Should not contain spaces");
      //   }
      // },
    },
  },
  {
    timestamps: true,
  }
);

//Creating primary key and foreign key mapping to task table
userSchema.virtual("tasks", {
  ref: "Task",
  localField: "_id",
  foreignField: "owner",
});

//Method can be called anywhere to conver it to json
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  return userObject;
};

// Delete user tasks when user is removed
userSchema.pre("remove", async function (next) {
  const user = this;
  await Task.deleteMany({ owner: user._id });
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
