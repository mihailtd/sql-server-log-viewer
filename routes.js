"use strict";
const express = require('express');
const router = express.Router();
const index = require('./views/index.marko');
const config = require('./views/config.marko');
const dashboard = require('./views/dashboard.marko');
const log = require('./views/log.marko');
const logLogic = require('./logic/log');


router.use((req, res, next) => {

  // log each request to the console
  console.log(req.method, req.url);

  // continue doing what we were doing and go to the route
  next();
});

router.route('/').get((req, res) => {
  index.render({
    title: 'Hey',
    message: 'Hello There Marko!'
  }, res.status(200));
});

router.route('/dashboard').get((req, res) => {
  dashboard.render({
    title: 'Hey',
    message: 'Hello There Marko!'
  }, res.status(200));
});

router.route('/config').get((req, res) => {
  config.render({
    title: 'Hey',
    message: 'Hello There Marko!'
  }, res.status(200));
});

router.route('/log').get((req, res) => {
  logLogic.dataService.getLogData().then(logData => {
    let displayData = logLogic.formatData(logData);
    log.render({
      title: 'Hey',
      message: 'Hello There Marko!',
      logData: displayData
    }, res.status(200));
  });
});

module.exports = {
  'router': router
}