import { Account, Client, ID } from "appwrite";
import { config } from "../../config.js";
import { current } from "@reduxjs/toolkit";
class Authentication {
    client;
    account;

    constructor() {
        this.client = new Client()
            .setEndpoint(config.appwriteEndpoint) // Your API Endpoint
            .setProject(config.appwriteProjectId); // Your project ID

        this.account = new Account(this.client);
    }

    async register({ email, password, name }) {
        try {
            await this.account.create(ID.unique(), email, password, name);
            return this.login({ email, password });
        } catch (error) {
            console.log("Authentication :: Register :", error.message);
            throw error.message;
        }
    }

    async login({ email, password }) {
        try {
            await this.account.createEmailPasswordSession(email, password);
            return this.currentUser();
        } catch (error) {
            console.log("Authentication :: Login :", error.message);
            throw error.message;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
            console.log("Logged out Successfully");
        } catch (error) {
            console.log("Authentication :: Logout :", error.message);
        }
    }

    async currentUser() {
        try {
            return this.account.get();
        } catch (error) {
            console.log("Authentication :: currentUser :", error.message);
        }
    }
}

export const authentication = new Authentication();
export default Authentication;
