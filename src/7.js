const fs = require('fs');

const data = {
  name: 'John Doe',
  age: 30,
  city: 'New York'
};

fs.writeFileSync('data.json', JSON.stringify(data));
