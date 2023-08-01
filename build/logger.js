"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var path = require('path');
var winston = require('winston');
var _require = require('winston'),
  createLogger = _require.createLogger,
  format = _require.format,
  transports = _require.transports;
var filename = path.join(__dirname, 'created-logfile.log');
var logger = winston.createLogger({
  //using console
  // transports: [
  //     new winston.transports.Console(),
  // ],

  //create file logs
  transports: [new winston.transports.Console(), new winston.transports.File({
    filename: filename
  })],
  //format timestamp
  format: format.combine(format.label({
    label: '[my-service]'
  }), format.timestamp({
    format: 'DD-MM-YYYY HH:mm:ss'
  }),
  //
  // The simple format outputs
  // `${level}: ${message} ${[Object with everything else]}`
  //
  format.simple()
  //
  // Alternatively you could use this custom printf format if you
  // want to control where the timestamp comes in your final message.
  // Try replacing `format.simple()` above with this:
  //
  // format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  )
});
var _default = logger;
exports["default"] = _default;