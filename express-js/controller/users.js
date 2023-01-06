export const testCookie1 = (req, res, next) => {
  console.log('----- cookie1');
  res.cookie('user-id', 1107);
  next();
}

// end function
const userList = [
  { name: 'Hai', age: 22 },
  { name: 'Khanh', age: 21 }
];

export const testCookie2 = (req, res) => {
  console.log('----- cookie2');
  res.send("<h2><a href='/'>Set coockie is done!</a></h2>")
}

export const createUser = (req, res) => {
  console.log("------------- user post/: ", req.body, req.file, req.files)
  // console.log("------------- 33333333333333 ", req)
  res.redirect('/');
}

export const renderForm = (req, res) => {
  console.log("------------- user get/: ", req.body)
  res.render('users.pug', {
    name: 'Hải',
    userList,
  });
}
