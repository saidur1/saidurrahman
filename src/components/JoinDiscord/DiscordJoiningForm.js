"use client";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as z from "zod";

async function postData(data) {
    const res = await fetch(`${process.env.baseURL}/api/prospect`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        toast.error("Something went wrong");
        throw new Error("Failed to fetch data");
    }

    return true;
}
const FormSchema = z.object({
    name: z.string().min(2, {
        message: "Name is required",
    }),
    email: z.string().min(5, {
        message: "Email is required",
    }),
});
const DiscordJoiningForm = () => {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            email: "",
        },
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values) => {
        try {
            await postData(values);
            window.location.replace("https://discord.com/invite/uxfQY7HmQS");
        } catch (error) {
            // Handle error as needed
            console.error("Error submitting data:", error);
            toast.error("Something went wrong");
        }
    };

    return (
        <section className="w-full  flex justify-center h-auto items-center relative">
            <div className=" w-[400px]    rounded-md p-[30px] pt-[50px]">
                <Form {...form}>
                    <form
                        className="space-y-4"
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <Input
                                                type="text"
                                                id="name"
                                                placeholder="Your name"
                                                {...field}
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <Input
                                                type="email"
                                                id="email"
                                                placeholder="Your email"
                                                {...field}
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full disabled:bg-black bg-black/70 hover:bg-black/90 text-white"
                            disabled={!isValid || isSubmitting}
                        >
                            Accountability Community
                            {isSubmitting && (
                                <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                            )}
                        </Button>
                    </form>
                </Form>
            </div>
        </section>
    );
};

export default DiscordJoiningForm;
