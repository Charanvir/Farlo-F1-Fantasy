require('dotenv').config();

// user data
const CharanvirData = {
    username: "charanvir",
    email: "charanvir@gmail.com",
    password: "charanvir123",
    teams: [],
    admin: false
};
const RandeepData = {
    username: "randeep",
    email: "randeep@gmail.com",
    password: "randeep123",
    teams: [],
    admin: false
};
const GurvirData = {
    username: "gurvir",
    email: "gurvir@gmail.com",
    password: "gurvir123",
    teams: [],
    admin: false
};
const JoeData = {
    username: "joe",
    email: "joe@gmail.com",
    password: "joe12345",
    teams: [],
    admin: false
};
const GaganvirData = {
    username: "gaganvir",
    email: "gaganvir@gmail.com",
    password: "gaganvir123",
    teams: [],
    admin: false
};
const JaskaranData = {
    username: "jaskaran",
    email: "jaskaran@gmail.com",
    password: "jaskaran123",
    teams: [],
    admin: false
};
const ManroopData = {
    username: "manroop",
    email: "manroop@gmail.com",
    password: "manroop123",
    teams: [],
    admin: false
};
const adminAccount = {
    username: "f1_admin",
    email: "charanvir123@gmail.com",
    password: process.env.ADMIN_PASSWORD,
    admin: true
}
const userData = []
userData.push(CharanvirData, RandeepData, GurvirData, JoeData, GaganvirData, JaskaranData, ManroopData, adminAccount)

module.exports = userData;