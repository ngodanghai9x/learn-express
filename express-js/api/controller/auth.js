const cookieOptions = {
  signed: true,
  path: '/users',
  expires: new Date(Date.now() + 900000),
  domain: 'localhost',
}
export const renderLogin = (req, res, next) => {
  res.render('login.pug');
}

export const login = (req, res, next) => {
  if (req.body && req.body.password === '123456') {
    console.log("login post", req.body)
    res.cookie('userId', 1506, cookieOptions);
    res.redirect('/users/');
  } else {
    res.redirect('/auth/login');
  }
}