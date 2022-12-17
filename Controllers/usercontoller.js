exports.add = async (req, res, next) => {
  try {
    console.log(req);
    console.log("req.body", req.body);
    const payload = req.body;
    res.send({
      message: "User Created ",
      status: false,
      payload,
    });
  } catch (error) {
    next(error);
  }
};

exports.list = async (req, res, next) => {
  try {
    const list = [
      {
        id: 1,
        firstname: "Osama",
        lastname: "Arshed",
        email: "osamaarshed11@gmail.com",
      },
      {
        id: 2,
        firstname: "Syed",
        lastname: "Osama",
        email: "osamaarshed11@gmail.com",
      },
    ];
    res.send({
      message: "user list has been successfully fetched!",
      status: true,
      data: list,
    });
  } catch (error) {
    next(error);
  }
};
