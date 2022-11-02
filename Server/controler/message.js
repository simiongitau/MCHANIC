const Messages = require("../model/message");

exports.getAllMessages = async (req, res) => {
  // find is used to retrive or fetch data from the mongo db
  const messages = await Messages.find();
  if (!messages) {
    return res.status(404).json({
      success: false,
      message: "no new message",
    });
  }
  return res.json({
    success: true,
    messages,
  });
};

exports.createMessages = async (req, res) => {
  try {
    const messages = new Messages(req.body);
    console.log(messages);
    await messages.save();
    return res.status(200).json({ success: true, messages });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.DeleteMessages = async (req, res) => {
  try {
    const messages = await Messages.findByIdAndDelete(req.params.id);
    if (!messages) {
      return res.status(404).json({
        success: false,
        message: "message does not exist",
      });
    }
    return res.json({ success: true, messages });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
