const { Schema, Types} = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            requires: true,
            max: 280,
        },
        username:{
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //TODO: Use a getter method to format the timestamp on query
        }
    },
    {
        toJSON:{
            virtuals: true,
        },
        id: false,
    }
);

module.exports = reactionSchema;
