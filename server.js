#!/usr/bin/env node

import minimist from 'minimist';
import express from 'express'
import { playRps, playRpsls } from './lib/rpsls'

const args = minimist(process.args.slice(2));
let port = args.port || 5000
const app = express(); 

app.used(express.json());
app.used(express.urlencoded({extented: true}));

app.get('/app', (req, res) => {
    res.status(200).send('200 OK').end();
});

app.get('/app/rps', (req,res) => {
    res.status(200).send(JSON.stringify(playRps())).end();
});

app.get('/app/rpsls', (req,res) => {
    res.status(200).send(JSON.stringify(playRpsls())).end();
});

//Queries
app.get('/app/rps/play/', (req,res) => {
    res.status(200).send(JSON.stringify(playRps(req.query.shot))).end();
});

app.get('/app/rpsls/play/', (req,res) => {
    res.status(200).send(JSON.stringify(playRpsls(req.query.shot))).end();
});

//JSON bodies
app.post('/app/rps/play/', (req,res) => {
    res.status(200).send(JSON.stringify(playRps(req.body.shot))).end();
});

app.post('/app/rpsls/play/', (req,res) => {
    res.status(200).send(JSON.stringify(playRpsls(req.body.shot))).end();
});

//parameters endpoints
app.get('/app/rpsls/play/:shot', (req,res) => {
    res.status(200).send(JSON.stringify(playRpsls(req.params.shot))).end();
});

app.post('/app/rps/play/:shot', (req,res) => {
    res.status(200).send(JSON.stringify(playRps(req.params.shot))).end();
});

app.all('*', (req,res) => {
    res.status(404).send('404 NOT FOUND').end();
});

app.listen(port);