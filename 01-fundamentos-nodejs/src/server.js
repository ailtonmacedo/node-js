import http from "node:http";

const users = [];

const server = http.createServer((req, res) => {
  //desestururando a requisição
  const { method, url } = req;

  console.log(req.headers);
  console.log(res.headers);

  if (method === "GET" && url === "/users") {
    return res
      .setHeader("Content-type", "application/json")
      .writeHead(200)
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({ id: 1, nome: "Ailton Macedo", email: "emial@email.com" });

    return res
      .setHeader("Content-type", "application/json")
      .end("Criação de usuário");
  }

  return res.writeHead(404).end("Not Found");
});

server.listen(3333);
