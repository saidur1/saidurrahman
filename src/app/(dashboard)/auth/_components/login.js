"use client";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as z from "zod";

// from schema
const formSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    password: z.string().min(6, {
        message: "password must be at least 6 characters",
    }),
});
const LoginForm = () => {
    const router = useRouter();
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    // JS Variables
    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values) => {
        try {
            const baseURL = process.env.baseURL;
            const res = await fetch(`${baseURL}/api/auth/login`, {
                method: "POST",
                body: JSON.stringify(values),
            });
            const resData = await res.json();

            if (!res.ok) {
                toast.error(resData);
            } else {
                toast.success("Authentication successful");
                router.push("/admin");
            }
        } catch (error) {
            console.log("login submit error", error);
        }
    };

    return (
        <section className="w-full flex flex-col items-center">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 mt-8 w-full sm:w-[350px]"
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
                    <div>
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={!isValid || isSubmitting}
                        >
                            Login
                        </Button>
                    </div>
                </form>
            </Form>
        </section>
    );
};

export default LoginForm;
