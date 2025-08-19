import fastify from "fastify";
import { cats } from "./repositories/catRepository";
import { dogs } from "./repositories/dogRepository";
import { request } from "http";

const server = fastify({
    logger: true
});

server.get("/cats", async(request, response) => {
    response.type("application/json").code(200);

    return [cats]
});

server.get("/dogs", async(request, response) => {
    response.type("application/json").code(200);

    return [dogs]
})

interface CatParams{
    id: string
}

server.get<{Params: CatParams}>("/cats/:id", async(request, response) => {
    const id = parseInt(request.params.id);
    const cat = cats.find((c) => c.id === id);

    if(!cat){
        response.type("application/json").code(404);
        return {message: 'Specified cat not found'};
    }else{
        response.type("application/json").code(200);
        return {cat}
    }
});

server.listen({port: 3333},
() => {
    console.log("Server running...");
})
