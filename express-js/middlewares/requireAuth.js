export const requireAuth = (req, res, next) => {
  console.log("requireAuth signedCookies", req.signedCookies.userId)
  if (!req.signedCookies || !req.signedCookies.userId) {
    res.redirect('/auth/login');
    return;
  }
  if (req.signedCookies.userId == 1506) {
    next();
  }
}

export const requireAuth1 = (req, res, next) => {
  next();
}