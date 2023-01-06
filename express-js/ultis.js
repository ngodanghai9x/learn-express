const withThrowToNext = (req, res, next, cb) => {
  try {
    cb(req, res, next);
  } catch (error) {
    next(error);
  }
}