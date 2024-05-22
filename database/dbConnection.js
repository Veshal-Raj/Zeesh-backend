import mongoose from "mongoose";


export const dbConnection = () => {
    mongoose.connect(process.env.DB_URL)
        .then(()=> {
            console.log('connected to database successfully!')
        }).catch((error) => {
            console.log('Error occured connecting to db ',error )
        })
}