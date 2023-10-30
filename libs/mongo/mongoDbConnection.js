const mongoose = require("mongoose");

function _buildUri(host, db) {
    const uriParams = [host, db];
    const uri = uriParams.join("");

    return uri;
}

class MongoDbConnection {
    /**
     *
     * @param {mongodbConfiguration} dbConfiguration Mongodb congifuration for specific database
     * from /config/config.js
     */
    constructor(dbConfiguration) {
        this.dbName = dbConfiguration.db;

        this.host = dbConfiguration.host;
    }

    /**
     * @description Wrapper for 'mongoose.connect()'.
     * Creates default connection.
     * @param {Function} callback Function to pass to 'mongoose.connect()' as callback
     */
    connect(callback) {
        try {
            const uri = _buildUri(
                this.host,
                this.dbName
            );

            return mongoose.connect(uri);
        } catch (connectException) {
            console.log(`MongoDbConnection:connect: connect to [${this.dbName}]: error: ${connectException}`);
            return process.exit(1);
        }
    }
}

/**
 * @type {MongoDbConnection}
 */
exports.MongoDbConnection = MongoDbConnection;
