const { Schema, Types, model } = require('mongoose');
const ReactionsSchema = require('./reactions');

const ThoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'Thought is required',
            minLength: 1,
            maxLength: 280,
        },

        createdAt: {
            type: Date,
            default: Date.now,
        },

        username: {
            type: String,
            required: 'Username is required'
        },

        reactions: [ReactionsSchema],
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }

);

ThoughtsSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thoughts = model('ThoughtsSchema', ThoughtsSchema);

module.exports = Thoughts;