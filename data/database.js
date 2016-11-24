const sql = require('mssql');
let config = {
  user: 'log',
  password: 'dallas',
  server: '127.0.0.1',
  database: 'logs'
};


let connection = new sql.Connection(config);
connection.connect(err => {
  if (err) console.log(err);
});



class DataService {
  constructor(type) {
    this.connection = connection;
  }

  getLogData() {
    return new Promise((resolve, reject) => {
      new sql.Request(connection)
        .query('SELECT * FROM [log]')
        .then(recodset => {
          resolve(recodset);
        }).catch(err => {
          reject(err);
        })
    });
  }
}

module.exports = {
  DataService: DataService
}