const { Schema, Types, model } = require('mongoose');

const ThoughtsSchema = new Schema(
    {   
        thoughtText: {
            type: String,
            required: 'Thought is required'
            // Must be between 1 and 280 characters
        },

        createdAt: {
            type: Date,
            default: Date.now,
            // Use a getter method to format the timestamp on query
        },

        username: {    
            type: String,
            required: 'Username is required'
        },

        reactions: [
            {
                    type: Schema.Types.ObjectId,
            }
        ]


    },
);

ThoughtsSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thoughts = model('ThoughtsSchema', ThoughtsSchema);

module.exports = Thoughts;