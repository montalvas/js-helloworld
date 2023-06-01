const Connection = require("./server/Connection");
const HttpServer = require("./server/HttpServer");
const LancamentoData = require("./server/LancamentoData");
const LancamentoController = require("./server/LancamentoController");

const connection = new Connection();
const lancamentoData = new LancamentoData(connection);
const httpServer = new HttpServer();
new LancamentoController(httpServer, lancamentoData);
httpServer.listen(3000);