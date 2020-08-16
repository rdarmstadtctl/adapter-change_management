// Update this constant with your ServiceNow credentials
const options = {
  url: 'https://dev82659.service-now.com/',
  username: 'admin',
  password: 'lrmp@27B',
  serviceNowTable: 'change_request'
};

// Import built-in Node.js package path.
const path = require('path');

/**
 * Import the ServiceNowConnector class from local Node.js module connector.js.
 *   and assign it to constant ServiceNowConnector.
 * When importing local modules, IAP requires an absolute file reference.
 * Built-in module path's join method constructs the absolute filename.
 */
const ServiceNowConnector = require(path.join(__dirname, './connector.js'));

function mainOnObject() {
  const connector = new ServiceNowConnector(options);

  connector.get((data, error) => {
                                    if (error) {
                                        console.error(`\nError returned from GET request:\n${JSON.stringify(error)}`);
                                    }
                                    console.log(`\nResponse returned from GET request:\n${JSON.stringify(data)}`)
                                 });
  
  connector.post((data, error) => {
                                    if (error) {
                                        console.error(`\nError returned from POST request:\n${JSON.stringify(error)}`);
                                    }
                                    console.log(`\nResponse returned from POST request:\n${JSON.stringify(data)}`)
                                  });

}

mainOnObject();