"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as z from "zod";

const formSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    password: z.string().min(6, {
        message: "password must be at least 6 characters",
    }),
});

const AdminLogin = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function submit(values) {
        console.log(values);
    }
    return (
        <section className="min-h-screen w-full flex items-center justify-center">
            <section className="w-full md:max-w-[1000px] flex">
                <div className="flex-1 bg-black/80"></div>
                <section className="mx-auto flex-1 w-full flex-col justify-center space-y-6 sm:w-[350px] border p-32">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Login Now
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your email and password below to access admin
                            panel
                        </p>
                    </div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(submit)}
                            className="space-y-6"
                        >
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel />
                                        <FormControl>
                                            <Input
                                                placeholder="your email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel />
                                        <FormControl>
                                            <Input
                                                placeholder="your password"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button className="w-full">Login</Button>
                        </form>
                    </Form>
                </section>
            </section>
        </section>
    );
};

export default AdminLogin;
