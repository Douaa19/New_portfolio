const mongoose = require('mongoose');

const Technologies = new mongoose.Schema({
    techno_name: {
        type: String,
        required: true,
    },
    project_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        required: true,
    },
    part_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Part",
        required: true,
    }
})