import mongoose from "mongoose";

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/10min-warmup",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;
