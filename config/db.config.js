module.exports = {
  HOST: "localhost",
  USER: "honey",
  PASSWORD: "honey",
  DB: "testdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};