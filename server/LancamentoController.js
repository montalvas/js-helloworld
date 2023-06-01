const express = require("express"); // CommonJS

class LancamentoController {
    
    constructor (httpServer, lancamentoData) {

        // read
        httpServer.register("get", "/api/lancamentos", async function (params, body) {
            const lancamentos = await lancamentoData.getLancamentos();
            return lancamentos;
        });

        // write
        httpServer.register("post", "/api/lancamentos", async function (params, body) {
            const lancamento = body;
            await lancamentoData.saveLancamento(lancamento);
        });

        // delete
        httpServer.register("delete", "/api/lancamentos/:idLancamento", async function (params, body) {
            const idLancamento = params.idLancamento;
            await lancamentoData.deleteLancamento(idLancamento);
        });
    }
}

module.exports = LancamentoController;