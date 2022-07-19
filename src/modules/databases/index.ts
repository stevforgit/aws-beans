import mongoose from "mongoose";

export default (db_url: string) => {

    const connect_db = () => {
        mongoose
            .connect(
                db_url,
            )
            .then(() => {
                return console.info(`Successfully connected to ${db_url}`);
            })
            .catch(error => {
                console.error('Error connecting to database: ', error);
                return process.exit(1);
            });
    };
    connect_db();

    mongoose.connection.on('disconnected', connect_db);
};