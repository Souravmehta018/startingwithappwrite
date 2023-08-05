import conf from '@/conf/config'
import {Client, Account, ID} from 'appwrite'

type CreateUserAccount = {
    email: string,
    password: string,
    name: string
}
type UserLogin = {
    email: string,
    password: string
}
const appwriteClient = new Client()

appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
export const account = new Account(appwriteClient);

export class AppwriteService{
    // Create a new user account
    async createUserAccount({email,password, name}:CreateUserAccount) {
        try {
            const userAccount = await account.create(ID.unique(), email,password, name);
            if (userAccount){
                return this.login({email, password})
            }
            else {
                return userAccount;
            }
        } catch (error) {
            throw error
        }
    }
    async login( {email, password}:UserLogin){
        try {
            return await account.createEmailSession(email,password);
        } catch (error) {
            throw error
        }
    }
    async isLoggedIn():Promise<boolean>{
        try {
            const data = await this.getCurrentUser()
            return Boolean(data)
        } catch (error) {          
        }return false
    }

    async getCurrentUser(){
        try {
            return account.get()
        } catch (error) {
            console.log("getCurrentUser error", error)
        }
    }

    async logout(){
        try {
            return await account.deleteSession("current")
        } catch (error) {
            console.log("logout error", error)
        }
    }
}
const appwriteServices= new AppwriteService()
export default appwriteServices;
