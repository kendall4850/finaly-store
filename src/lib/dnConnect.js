import mongoose fron "mongoose";

const MONGODB_URI=process.env.MONGO_URI;

if(!MONGODB_URI){
    throw new Error('favor defina su variable de entorno para MONGO DB')
}
    let cached= global.mongoose;

    if(!cached){
        cached = global.mongoose ={conn: null, promise: null};
    }

    async function dbConnect() {
        if(cached.conn){
            return cached.conn;
        }
        if(!cached.promise){
            const opts = {
                bufferCommands: false,
            };
            cached.promise = mongoose.conect(MONGODB_URI, opts).then((mongoose)=>{
                return mongoose;
            });
        }
        cached.conn=await cached.promise;
        return cached.conn;
    }

    export default dbConnect;

