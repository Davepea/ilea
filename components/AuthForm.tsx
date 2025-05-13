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
    <div className="flex flex-col gap-6 max-w-md w-full md:py-20 p-[10px] m-auto ">
     <div className="flex flex-col gap-2">
      <h1 className="text-4xl font-bold text-white">
          {isSignIn ? "Welcome Back" : "Be bold. Be seen. Be you."}
        </h1>
        <p className="text-light-100">
          {isSignIn ? "Login to continue exploring" : "Sign up and express your truth"}
        </p>
     </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
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

          <Button type="submit" className="form-btn w-full">
            {isSignIn ? "Sign In" : "Sign Up"}
          </Button>
        </form>
      </Form>

      <Button
        type="button"
        variant="outline"
        className="w-full flex items-center justify-center gap-2"
        onClick={() => signIn("google")} // ✅ Uses next-auth/react
      >

        Continue with Google
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
