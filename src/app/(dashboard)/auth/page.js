"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
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

    const router = useRouter();

    const { isSubmitting, isValid } = form.formState;

    async function submit(values) {
        try {
            const baseURL = process.env.baseURL;
            await fetch(`${baseURL}/api/auth/login`, {
                method: "POST",
                body: JSON.stringify(values),
            });
            toast.success("Authentication successful");
            router.push("/admin");
        } catch (error) {
            console.log("login submit error", error);
        }
    }
    return (
        <section className="min-h-screen w-full flex items-center justify-center">
            <div className="w-full md:max-w-[1000px] flex">
                <div className="flex-1 bg-black/80"></div>
                <div className="mx-auto flex-1 w-full flex-col justify-center space-y-6 sm:w-[350px] border p-32">
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
                                        <FormControl>
                                            <Input
                                                placeholder="your email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="your password"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={!isValid || isSubmitting}
                            >
                                Login
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default AdminLogin;
