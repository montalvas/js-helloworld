const pgp = require("pg-promise");

class Connection {

    constructor () {
        this.connection = pgp()("postgres://postgres:lucas1994@localhost:5432/financas_pessoais");
    }

    query (statement, params) {
        return this.connection.query(statement, params);
    }
}

module.exports = Connection;