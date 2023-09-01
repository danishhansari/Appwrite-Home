
const ToggleBtns = [
    { label: "Auth", id: 1 },
    { label: "Databases", id: 2 },
    { label: "Functions", id: 3 },
    { label: "Storage", id: 4 },
  ];
  
  const sideBtns = [
    {heading: 'Upload File', text : "Create, resume and retry file upload to the cloud with ease" ,id:1}, 
    {heading: 'Download File', text : "Download files with minimal code, optimised with state of the art compression" ,id:2}, 
    {heading: 'Delete File', text : "Delete unused files with ease" ,id:3}, 
  ]
  
  const code = [
    `
    const client = new Client();
  client
     .setEndpoint('https://cloud.appwrite.io/v1')
     .setProject('644ff1c9d31507e513c2');
  
  const account = new Account(client);
                  
  const result = account.create(
    ID.unique(), 
    'walterobrian@example.com',
    'password',
    "Walter o'Brian"
  );
  
  result.then(function (response) {
     console.log(response);
  }, function (error) {
     console.log(error);
  });
    `,
    `const client = new Client();
    client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('644ff1c9d31507e513c2');
    
    const storage = new Storage(client);
    
    const result = storage.createFile(
      'my-bucket', 
      ID.unique(), 
      document.getElementById('uploader').files[0]
    );
    
    result.then(function (response) {
       console.log(response);
    }, function (error) {
       console.log(error);
    });`,
    
    `const client = new Client();
    client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('644ff1c9d31507e513c2');
    
    const functions = new Functions(client);
                        
    const result = functions.execute(
      'createInvoice', 
      '001'
    );
    
    result.then(function (response) {
       console.log(response);
    }, function (error) {
       console.log(error);
    });`,
    
    `const client = new Client();
    client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('644ff1c9d31507e513c2');
    
    const databases = new Databases(client);
    
    const result = databases.createDocument(
      'my-awesome-database',
      'players',
      ID.unique(),
      {
        'name': 'John Doe',
        'score': 0,
        'age': 21,
        'preferences': ['football', 'golf', 'rugby'],
      }
    );
    
    result.then(function (response) {
       console.log(response);
    }, function (error) {
       console.log(error);
    });`,
    
    `const client = new Client();
    client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('644ff1c9d31507e513c2');
    
    const account = new Account(client);
                    
    const result = account.create(
      ID.unique(), 
      'walterobrian@example.com',
      'password',
      "Walter o'Brian"
    );
    
    result.then(function (response) {
       console.log(response);
    }, function (error) {
       console.log(error);
    });`
  ];
  
export {ToggleBtns, sideBtns,  code}  