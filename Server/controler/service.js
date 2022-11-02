const Services = require("../model/service");

exports.getAllServices = async (req, res) => {
  // find is used to retrive or fetch data from the mongo db
  const services = await Services.find();
  if (!services) {
    return res.status(404).json({
      success: false,
      message: "no new service",
    });
  }
  return res.json({
    success: true,
    data: services,
  });
};

exports.createServices = async (req, res) => {
  try {
    const services = new Services(req.body);
    console.log(services);
    await services.save();
    return res.status(200).json({ success: true, services });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.updateServices = async (req, res, next) => {
  // Verifying if role and id is presnt
  // Verifying if the value of role is admin

  try {
    const services = await Services.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // condition if use exist
    if (!services) {
      return res.status(404).json({
        success: false,
        message: "service does not exist",
      });
    }
    return res.json({ success: true, services });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

exports.DeleteServices = async (req, res) => {
  try {
    const services = await Services.findByIdAndDelete(req.params.id);
    if (!services) {
      return res.status(404).json({
        success: false,
        message: "services does not exist",
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
