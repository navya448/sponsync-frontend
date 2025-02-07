"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../ui/button";
// import Logo from "@/public/images/ezvc-logo.png";
// import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FormError } from "@/components/formHelpers/formError";
import { registerUser } from "@/hooks/query/auth";

const SignUpSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const SignUpForm = () => {
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const router = useRouter();
  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      router.push("/auth/login");
    },
  });

  function onSubmit(values: z.infer<typeof SignUpSchema>) {
    mutation.mutate({ email: values.email, password: values.password });
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        {/* <Image width={80} height={80} src={Logo} alt="ezvc-logo" /> */}
        <div className="text-center">
          <p className="font-semibold text-3xl">Create your account</p>
          <p className="text-form-subtitle mt-3">Sign up to get started with EZVC.</p>
        </div>
      </div>
      <div className="mt-6 max-w-md mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Confirm your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {mutation.isError && <FormError message={mutation.error.message} />}
            <Button disabled={mutation.isPending} className="w-full" type="submit">
              Sign Up
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};