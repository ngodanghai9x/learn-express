// import mongoose from 'mongoose';
// const { Schema } = mongoose;

// // tạo model
// const userSchema = new Schema({
//   name:  String, // String is shorthand for {type: String}
//   age: Number,
//   photos: [{ photoPath: String, date: Date }],
//   birthday: { type: Date, default: Date.now },
//   isDeleted: Boolean,
// });

// // add model vào db
// const Users = mongoose.model('Users', userSchema);

// // const user = {
// //   name: 'abc',
// //   age: 22,
// //   photos: [{ photoPath: 'String', date: new Date() }],
// //   birthday: null,
// // };
// // const users = await Users.create(user);

// // const userDoc = new Users({ name: 'Foo' });
// // await userDoc.save();
// // const userFromDb = await Users.findOne({ name: 'Foo' });
// export default Users;