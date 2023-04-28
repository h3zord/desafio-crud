const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    version: '1.0.0',
    title: 'Car Shop API',
    description: 'Esta documentação é destinada ao desafio CRUD.',
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Employees',
      description: 'Endpoints',
    },
  ],
  definitions: {
    EmployeeList: [
      {
        $nome: 'Teste',
        $idade: 30,
        $cargo: 'Back-end developer',
      },
    ],
    Employee: {
      $nome: 'Teste',
      $idade: 30,
      $cargo: 'Back-end developer',
    },
    CreateError: {
      message: 'Failed to create employee',
    },
    DataError: {
      message: 'Fill in the fields correctly',
    },
    InvalidIdError: {
      message: 'Invalid ID',
    },
    EmployeeNotFound: {
      message: 'Employee not found',
    },
    UpdateError: {
      message: 'Failed to update employee',
    },
    DeleteError: {
      message: 'Failed to delete employee',
    },
  },
};

const outputFile = './src/swagger-output.json';
const endpointsFiles = [
  './dist/routes/EmployeeRoutes.js',
];

swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
  await import('./dist/app.js'); // Your project's root file
});