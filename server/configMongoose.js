import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const conf = {
  hostname: process.env.MONGO_HOSTNAME || 'localhost',
  port: process.env.MONGO_PORT || 27017,
  env: process.env.MONGO_ENV || 'bloggerin'
};

mongoose.connect(`mongodb://${conf.hostname}:${conf.port}/${conf.env}`, {
  useMongoClient: true
});

const articleSchema = {
  articleTitle: String,
  articleContent: String
};

const userSchema = {
  username: { type: String, index: { unique: true, dropDups: true } },
  password: String,
  firstName: String,
  lastName: String,
  email: { type: String, index: { unique: true, dropDups: true } },
  role: { type: String, default: 'editor' },
  verified: Boolean,
  imageUrl: String
};

const Article = mongoose.model('Article', articleSchema);
const User = mongoose.model('User', userSchema, 'blogUsers');

export default {
  Article,
  User
};
