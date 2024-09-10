const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}

async function handleGetUserById(req, res) {
  const id = req.params.id;
  const users = await User.findById(id);

  if (!users) {
    return res.status(404).json({
      error: "User not found",
    });
  }
  res.json(users);
}

async function handleUpdateUserById(req, res) {
  const id = req.params.id;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const gender = req.body.gender;
  const job_title = req.body.job_title;

  await User.findByIdAndUpdate(id, {
    firstName: first_name,
    lastName: last_name,
    email: email,
    gender: gender,
    jobTitle: job_title,
  });
  return res.json({ status: "Success" });
}

async function handleDeleteUserById(req, res) {
  const id = req.params.id;
  await User.findByIdAndDelete(id);
  return res.json({
    status: "Success",
  });
}

async function handleCreateNewUser(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({
      msg: "All fields are required....",
    });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });

  res.status(201).json({
    msg: "Success",
    id: result._id,
  });
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
};