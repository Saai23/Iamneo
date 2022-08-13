var faker = require('faker'); // Faker.js library

// Custom user snippet to generate formatted phone numbers
var phonenum = require('priya/phonenumber/1');
api.name = faker.internet.useName();
api.Email = faker.internet.useEmail();

api.Phone = phonenum(`(${list(['214', '469', '972'])}) xxx-xxxx`);

api.DOB = faker.date.birthdate(options: {
  max: number,
  min: number,
  mode: 'age' | 'year',
  refDate: Date | number | string
} = {}): Date
faker.date.birthdate() // 2000-10-10
faker.date.birthdate({ min: 18, max: 65, mode: 'age' }) // 2003-11-02T20:03:20.116Z

faker.date.birthdate({ min: 1900, max: 2000, mode: 'year' }) // 1940-08-20T08:53:07.538Z
api.Location = faker.setLocale('de');
api.Gender = faker.internet.useGender();
api.address = faker.internet.useAddress();

}



{
  
  "username": "Rocky46",
  "password": "3KKWY5tmSfMSY8u",
   "Email" : "priya@gmail.com",
"phone": "(994) 146-0513",
"DOB" : "10-10-2000",
"Location" : " DE",
"Gender" :"Female",
  "address":"lksj jhjks jjhjkh ",

}


