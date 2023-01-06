// import Users;
import Users from "../../models/users.js";

// middleware function (v)
export const testCookie1 = (req, res, next) => {
  console.log('----- cookie1');
  res.cookie('user-id', 1107);
  next();
}

// end function (v)
export const testCookie2 = (req, res) => {
  console.log('----- cookie2');
  res.send("<h2><a href='/'>Set coockie is done!</a></h2>")
}

export const createUser = async (req, res, next) => {
  try {
    console.log("------------- user post/: ", req.body, req.file, req.files)
    const user = {
      name: 'abc',
      age: 22,
      photos: [{ photoPath: 'String', date: new Date() }],
      birthday: null,
    };
    const users = await Users.create(user);
    res.redirect('/');
  } catch (error) {
    next(error);
  }
}

export const putUser = async (req, res, next) => {
  try {
    console.log("------------- user post/: ", req.body, req.file, req.files)
    const user = {
      name: 'abc',
      age: 22,
      photos: [{ photoPath: 'String', date: new Date() }],
      birthday: null,
    };
    const users = await Users.findById(123);
    res.redirect('/');
  } catch (error) {
    next(error);
  }
}

export const patchUser = async (req, res, next) => {
  try {
    console.log("------------- user post/: ", req.body, req.file, req.files)
    const user = {
      name: 'abc',
      age: 22,
      photos: [{ photoPath: 'String', date: new Date() }],
      birthday: null,
    };
    const users = await Users.findById(123);
    res.redirect('/');
  } catch (error) {
    next(error);
  }
}

export const renderForm = (req, res, next) => {
  try {
    console.log("------------- user get/: ", req.body)
    res.render('users.pug', {
      name: 'Hải',
      userList,
    });
  } catch (error) {
    next(error);
  }
}
