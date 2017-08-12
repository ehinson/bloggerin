import configMongoose from './configMongoose';
const User = configMongoose.User;
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import jwtSecret from './configSecret';

export default [
  {
    route: ['login'],
    call: (callPath, args) => {
      const { username, password } = args[0];
      const saltedPassHash = crypto
        .createHash('sha256')
        .update(password)
        .digest('hex');

      const userStatementQuery = {
        $and: [
          {
            username: username
          },
          {
            password: saltedPassHash
          }
        ]
      };

      return User.find(userStatementQuery, (err, user) => {
        console.log(user);
        if (err) {
          console.error(err);
        }
      }).then(result => {
        if (result.length) {
          console.log(result);
          const role = result[0].role;
          const userDetailsToHash = username + role;
          const token = jwt.sign(userDetailsToHash, jwtSecret.secret);
          return [
            {
              path: ['login', 'token'],
              value: token
            },
            {
              path: ['login', 'username'],
              value: username
            },
            {
              path: ['login', 'role'],
              value: role
            },
            {
              path: ['login', 'error'],
              value: false
            }
          ];
        } else {
          return [
            {
              path: ['login', 'token'],
              value: 'INVALID'
            },
            {
              path: ['login', 'error'],
              value: 'NO USER FOUND, incorrect login information'
            }
          ];
        }
        return result;
      });
    }
  },
  {
    route: ['register'],
    call: (callPath, args) => {
      const newUserObj = args[0];
      newUserObj.password = newUserObj.password + 'bloggerin';
      newUserObj.password = crypto
        .createHash('sha256')
        .update(newUserObj.password)
        .digest('hex');
      const newUser = new User(newUserObj);
      return newUser
        .save((err, data) => {
          if (err) return err;
        })
        .then(newRes => {
          /*
              got new obj data, now let's get count:
             */
          const newUserDetail = newRes.toObject();

          if (newUserDetail._id) {
            return null; // Mocked for now
          } else {
            // registration failed
            return [
              {
                path: ['register', 'newUserId'],
                value: 'INVALID'
              },
              {
                path: ['register', 'error'],
                value: 'Registration failed - no id has been created'
              }
            ];
          }
          return;
        })
        .catch(reason => console.error(reason));
    }
  }
];
