const loginRequired = (req, res, next) => {
  if (!req.session.user_id) {
    return next({
      status: 401,
      message: 'invalid username or password',
      err: 'Not Logged In.'
    });
  }
  next();
};

const isCorrectUser = (req, res, next) => {
  if (req.params.user_id !== req.session.user_id) {
    return next({
      status: 403,
      message: 'Not Authorized',
      err: 'Not Correct User.'
    });
  } else {
    next();
  }
};

const isAdmin = (req, res, next) => {
  if (!req.session.isAdmin) {
    return next({
      status: 403,
      message: 'Not Authorized',
      err: 'Not Admin.'
    });
  } else {
    next();
  }
};
