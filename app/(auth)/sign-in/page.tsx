// app/sign-in/page.tsx
"use client";

import AuthForm from "@/components/AuthForm";
import { SignInSchema } from "@/lib/validation/authSchemas";
import { z } from "zod";
import Image from "next/image";
import Button from "@/components/Button";

const defaultValues = {
  email: "",
  password: "",
};

const SignInPage = () => {
  const onSubmit = async (data: z.infer<typeof SignInSchema>) => {
    const res = await fetch("/api/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    return result;
  };

  return (

    <>
      <section className="grid md:grid-cols-2 sm:grid-cols-1 h-screen overflow-hidden md:grid-rows-1 sm:grid-rows-3">
            <div className="h-full overflow-hidden relative md:block sm:row-span-1">
              <div className="absolute w-full right-[0px] left-[0px] bottom-[0px] top-[0px] ">
              <Image
                src="/img/download (7).jpg"
                height={1000}
                width={1000}
                alt="sign-up image"
                className="h-full object-cover object-top "
                />
              </div>
              {/* <div className="relative">
                <div className="flex justify-between py-3 px-4">
                  <div>
                    <div className='flex items-center gap-7'>
                    <div className='flex gap-[2px] items-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='size-8 text-[#FD5E53]'
                      >
                        <path d='M15 3.75H9v16.5h6V3.75ZM16.5 20.25h3.375c1.035 0 1.875-.84 1.875-1.875V5.625c0-1.036-.84-1.875-1.875-1.875H16.5v16.5ZM4.125 3.75H7.5v16.5H4.125a1.875 1.875 0 0 1-1.875-1.875V5.625c0-1.036.84-1.875 1.875-1.875Z' />
                      </svg>
                      <div className='md:flex hidden gap-[2px]'>
                        <b className='font-title font-bold text-3xl text-white'>ILEA</b>
                        <small className="text-white">&#xae;</small>
                      </div>
                    </div>
                </div>
                  </div>
                  <div>
                    <Button id='home button' title='go back home' containerClass='bg-white/10 backdrop-blur-md flex gap-3 text-white md:flex items-center justify-center gap-1' rightIcon={undefined} leftIcon={undefined} />
                  </div>
                </div>
      
              </div> */}
      
      
            </div>
            <div className="h-full overflow-auto sm:row-span-2">
              <div className=" overflow-scroll">
              <AuthForm
                type="SIGN_IN"
                schema={SignInSchema}
                defaultValues={defaultValues}
                onSubmit={onSubmit}
              />
              </div>
            </div>
          </section>
    </>
   
  );
};

export default SignInPage;
