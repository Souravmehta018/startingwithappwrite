"use client";


import appwriteServices from "@/appwrite/config";
import useAuth from "@/context/Auth/useAuth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const LogoutPage = () => {
    const router = useRouter();
    const {setAuthStatus} = useAuth();

    useEffect(() => {
        appwriteServices.logout()
        .then(() => {
            setAuthStatus(false);
            router.replace("/");
        })
    }, []);

    return(
        <></>
    )
}


export default LogoutPage;