import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Book API',
            version: '1.0.0',
            description: 'API dokumentace pro správu knih',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Lokální vývojový server',
            },
        ],
    },
    apis: ['./routes/*.js', './controllers/*.js'],
};

export const specs = swaggerJsdoc(options);