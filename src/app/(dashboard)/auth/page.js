import LoginForm from "./_components/login";

const Login = () => {
    return (
        <section className="min-h-screen w-full flex justify-center items-center">
            <section className="border w-full md:max-w-[1200px] h-auto flex">
                <section className="hidden md:block w-[30%] bg-black/80"></section>
                <section className="flex-1 flex-col justify-center items-center p-32  space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-2xl font-semibold tracking-tight text-center">
                            Login Now
                        </h1>
                        <p className="text-sm text-muted-foreground text-center">
                            Enter your email and password below to access admin
                            panel
                        </p>
                    </div>
                    <LoginForm />
                </section>
            </section>
        </section>
    );
};

export default Login;
