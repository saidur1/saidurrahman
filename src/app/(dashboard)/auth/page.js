"use client";
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
import * as z from "zod";

const formSchema = z.object({
    email: z.string().min(6, {
        message: "email must be at least 6 characters",
    }),
    password: z.string().min(6, {
        message: "password must be at least 6 characters",
    }),
});

const AdminLogin = () => {
    return (
        <section className="min-h-screen w-full flex items-center justify-center">
            <section className="w-full md:max-w-[1000px] flex">
                <div className="flex-1 bg-black/80"></div>
                <div className="mx-auto flex-1 w-full flex-col justify-center space-y-6 sm:w-[350px] border p-32">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Create an account
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your email below to create your account
                        </p>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default AdminLogin;
