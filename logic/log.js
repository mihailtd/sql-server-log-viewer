let DataService = require('../data/database').DataService;

let dataService = new DataService()

let formatData = data => {
  return JSON.stringify(data);
}


module.exports = {
  dataService: dataService,
  formatData: formatData
}