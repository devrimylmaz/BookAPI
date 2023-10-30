var authorSchema = require('./schema.js');
var mongoose = require('mongoose');
var errorCodes = require('../../config/errorCodes.json');

authorSchema.statics.create = async (data) => {
    try {
        if (!data.name) {
            console.log(`author:model.js:create - parameter missing!`);
            throw errorCodes.MISSING_PARAMS_ERROR;
        }
        return await authorModel.create({
            name: data.name,
            country: data.country,
            birthDate: data.birthDate
        });
    } catch (error) {
        console.log(`author:model.js:create - Error while creating author - err: ${JSON.stringify(error)}`);
        throw error;
    }
};

authorSchema.statics.update = async (data) => {
    try {
        if (!data.id) {
            console.log(`author:model.js:update - parameter missing!`);
            throw new Error("MISSING_PARAMS_ERROR");
        }
        return await authorModel.findOneAndUpdate(
            {
                _id: data.id
            },        
            {
                name: data.name,
                country: data.country,
                birthDate: data.birthDate
            }
        );
    } catch (error) {
        console.log(`author:model.js:update - Error while updating author - err: ${JSON.stringify(error)}`);
        throw error;
    }
};

authorSchema.statics.delete = async (data) => {
    try {
        if (!data.id) {
            console.log(`author:model.js:delete - parameter missing!`);
            throw new Error("MISSING_PARAMS_ERROR");
        }
        return await authorModel.findOneAndDelete(
            {
                _id: data.id
            }
        );
    } catch (error) {
        console.log(`author:model.js:delete - Error while deleting author - err: ${JSON.stringify(error)}`);
        throw error;
    }
};

authorSchema.statics.getAuthor = async (data) => {
    try {
        return await authorModel.find(
            {
                _id: data.id
            }
        );
    } catch (error) {
        console.log(`author:model.js:getAuthor - Error while getting author info - err: ${JSON.stringify(error)}`);
        throw error;
    }
};

authorSchema.statics.getAllAuthors = async (data) => {
    try {
        return await authorModel.find( data.filter, {__v:0}, data.options );
    } catch (error) {
        console.log(`author:model.js:getAllAuthors - Error while getting author info - err: ${JSON.stringify(error)}`);
        throw error;
    }
};

var authorModel = mongoose.model("author", authorSchema);

module.exports = authorModel;