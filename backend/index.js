//const express = require('express')
import express from "express";//
import { useCallback } from "react";

const app = express();

const port = 8080;

app.listen(port, ()=>{
    console.log("server listen to prot $(port)");

})
