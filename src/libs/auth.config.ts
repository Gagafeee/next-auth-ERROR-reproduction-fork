import {NextAuthOptions} from "next-auth";
import Google from "next-auth/providers/google";
import {MongoDBAdapter} from "@auth/mongodb-adapter";
import client from "@/libs/auth";

export const authConfig: NextAuthOptions = {
    debug: true,
    adapter: MongoDBAdapter(client),
    providers: [
        Google({
            clientId: "dummy",
            clientSecret: "supersecret"
        })
    ]
}