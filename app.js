const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')

// create application/json parser
const jsonParser = bodyParser.json()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


// Endpoint /concelhos    Métodos GET e POST
app.get('/concelhos', (req, res) => {
    res.send('Responder com a lista dos concelhos no formato JSON')
  })

app.post('/concelhos', jsonParser, (req, res) => {
    res.send(`Adicionar um concelho à colecção de concelhos. \n
              O novo concelho vem representado em JSON no Body do pedido \n
              Concelho: ${req.body.concelho} , Casos: ${req.body.casos}`)
  })  

// Endpoint /concelhos/idConcelho    Métodos GET, PUT e DELETE
app.get('/concelhos/:idConcelho', (req, res) => {
    res.send(`Responder com o concelho com o id ${req.params.idConcelho} no formato JSON`)
  })

app.put('/concelhos/:idConcelho', jsonParser, (req, res) => {
    res.send(`Actualizar o concelho com o id ${req.params.idConcelho}  \n
              Com os novos dados do concelho em JSON no Body do pedido \n
              Concelho: ${req.body.concelho} , Casos: ${req.body.casos}`)
  })  

app.delete('/concelhos/:idConcelho', (req, res) => {
    res.send(`Apagar o concelho com o id ${req.params.idConcelho}`)
  })  


