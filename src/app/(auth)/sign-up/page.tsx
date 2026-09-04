"use client";

import AuthForm from "@/components/auth/AuthForm";
import AuthLayout from "@/components/auth/AuthLayout";
import FormInput from "@/components/auth/FormInput";
import { SignUpForm, signUpSchema } from "@/lib/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeClosed, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import OutlinedLink from "../../../components/common/OutlinedLink";

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = () => {
    alert("Ok!");
  };

  return (
    <div className="flex flex-col justify-center items-center flex-1 gap-10">
      <AuthLayout headerText="SignUp">
        <AuthForm
          Inputs={
            <>
              <FormInput
                label="Email"
                icon={Mail}
                {...register("email")}
                errorMsg={errors.email?.message}
              />
              <FormInput
                label="Password"
                icon={Lock}
                {...register("password")}
                errorMsg={errors.password?.message}
                type={showPassword ? "text" : "password"}
                placeholder="********"
                showPasswordButton={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-1 z-10 p-2 hover:bg-white/8 cursor-pointer rounded-xl"
                  >
                    {showPassword ? (
                      <EyeClosed size={20} color="#fff" />
                    ) : (
                      <Eye size={20} color="#fff" />
                    )}
                  </button>
                }
              />
              <FormInput
                label="Confirm Password"
                icon={Lock}
                {...register("confirmPassword")}
                errorMsg={errors.confirmPassword?.message}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="********"
                showPasswordButton={
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-1 z-10 p-2 hover:bg-white/8 cursor-pointer rounded-xl"
                  >
                    {showConfirmPassword ? (
                      <EyeClosed size={20} color="#fff" />
                    ) : (
                      <Eye size={20} color="#fff" />
                    )}
                  </button>
                }
              />
            </>
          }
          SubmitText="Submit"
          isSubmitting={isSubmitting}
          onSubmit={handleSubmit(onSubmit)}
          Footer={
            <>
              <div className="flex items-center w-full gap-2 mt-4">
                <span className="h-px flex-1 bg-white/10"></span>
                <h2 className="text-white flex-4 text-center text-xs sm:text-sm md:text-base">
                  Already have an account?
                </h2>
                <span className="h-px flex-1 bg-white/10"></span>
              </div>

              <OutlinedLink href="/sign-in" text="Sign in" />
            </>
          }
        />
      </AuthLayout>

      <div className="flex items-center justify-center gap-4">
        <Link
          href={"https://github.com/boydsv"}
          className="text-white/50 hover:text-white"
        >
          Github
        </Link>

        <span className="h-1 w-1 rounded-full bg-white/20 inline-block"></span>

        <Link
          href={"https://linkedin.com/in/abolfazl-mahmoudi-68a22a42b"}
          className="text-white/50 hover:text-white"
        >
          Linkedin
        </Link>
      </div>
    </div>
  );
}
