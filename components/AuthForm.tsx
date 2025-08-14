"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  DefaultValues,
  Path,
  UseFormReturn,
} from "react-hook-form";
import { z, ZodType } from "zod";
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
import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react"; // ✅ Use client-safe version
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  type: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
}: Props<T>) => {
  const router = useRouter();
  const isSignIn = type === "SIGN_IN";

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    const result = await onSubmit(data);

    if (result.success) {
      toast.success(isSignIn ? "Signed in successfully!" : "Signed up successfully!");
      router.push("/");
    } else {
      toast.error(result.error ?? "Something went wrong");
    }
  };

  return (
    <div className="flex flex-col gap-12 max-w-xl w-full md:py-20 p-[10px] m-auto ">
     <div className="flex flex-col gap-2">
      <h1 className="text-4xl font-bold text-white">
          {isSignIn ? "Welcome Back" : "Be bold. Be seen. Be you."}
        </h1>
        <p className="text-light-100">
          {isSignIn ? "Login to continue exploring" : "Sign up and express your truth"}
        </p>
     </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          {Object.keys(defaultValues).map((key) => (
            <FormField
              key={key}
              control={form.control}
              name={key as Path<T>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize !pb-0 !mb-0">
                    {FIELD_NAMES[key as keyof typeof FIELD_NAMES] || key}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type={FIELD_TYPES[key as keyof typeof FIELD_TYPES] || "text"}
                      className=""
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button type="submit" className="form-btn !w-full">
            {isSignIn ? "Sign In" : "Sign Up"}
          </Button>
        </form>
      </Form>

      <Button
        type="button"
        variant="outline"
        className="w-full text-black flex gap-3 items-center justify-center gap-2"
        onClick={() => signIn("google")} 
      >

        Continue with Google

        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-brand-google"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1 -1.265 .06a6 6 0 1 0 2.103 6.836l.001 -.004h-3.66a1 1 0 0 1 -.992 -.883l-.007 -.117v-2a1 1 0 0 1 1 -1h6.945a1 1 0 0 1 .994 .89c.04 .367 .061 .737 .061 1.11c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10z" /></svg>
      </Button>

      <p className="text-center text-sm mt-2">
        {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
        <Link href={isSignIn ? "/sign-up" : "/sign-in"} className="text-primary font-semibold">
          {isSignIn ? "Sign Up" : "Sign In"}
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;
