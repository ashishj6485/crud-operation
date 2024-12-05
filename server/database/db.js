import mongoose from "mongoose"



const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@crud-app.wwvmg.mongodb.net/`;

    try{
        await mongoose.connect(URL);
        console.log('database connected successfully');
    } catch(error) {
        console.log('error while connecting with the database', error);
    }
}


export default Connection;