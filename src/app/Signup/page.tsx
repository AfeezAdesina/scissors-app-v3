// Code for the Login page
'use client';

import Link from "next/link";
import { Label, Input, Button } from "../ui/SignupInput";
import Image from "next/image";

 export default function Signup() {
  function testClick(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()
    console.log('input changed')
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()
    console.log('button clicked')
  }
  return (
    <>
      <section className="bg-gradient-to-b from-blue-500 to-transparent mb-32">
        <header className="">
          <div >
            <Image
              src="/scissors-w.png"
              width={200}
              height={150}
              alt="Scissors logo"
              className="py-10 pl-10"
            />
          </div>
        </header>

        <div className="flex justify-evenly max-w-full">
          <div className="flex flex-col flex-start px-10 py-32 gap-4">
            <h2 className="text-3xl font-extrabold text-white">Create a free account</h2>
            <p className="font-light text-md text-white whitespace-pre-line">Take your links to a new level. Get started now with <br/> Scissors, the fastest, easiest way to brand, manage, and <br/> share short URLs..</p>
          </div>
          <div className="bg-white p-16 flex flex-col gap-4 rounded-3xl">
            <div className="mx-auto w-full max-w-md space-y-8 ">
              <div>
                <h2 className="my-6 text-center text-3xl font-bold tracking-tight text-foreground">
                  Sign up
                </h2>
                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      onChange={testClick}
                      required
                      value={name}
                      placeholder="Your name or company names"
                      className="block w-full appearance-none rounded-full border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                    />
                  </div>
                  <div className="">
                    <Label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                      Business Email
                    </Label>
                    <Input
                      id="email"
                      name="Email"
                      type="text"
                      onChange={testClick}
                      autoComplete="email"
                      required
                      placeholder="Your email address"
                      className="block w-full appearance-none rounded-full border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                    />

                  </div>
                  <div className="flex flex-col gap-4 ">
                    <div className="">
                      <Label htmlFor="password" className="block text-sm font-medium text-muted-foreground">
                        Password
                      </Label>
                      <Input
                        id="password"
                        name="Password"
                        type="password"
                        autoComplete="current-password"
                        required
                      
                      onChange={testClick}
                        placeholder="Your password"
                        className="block w-full appearance-none rounded-full border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                      />
                      <p className="text-gray-300 font-normal text-xs">* Minimum 8 characters, including at least 1 number</p>
                    </div>
                  </div>
                  <Button href="#" type="submit" onClick={handleSubmit} className="rounded-full w-full py-3 text-center  text-sm font-medium bg-gray-600 hover:bg-blue-600 text-white">Sign up</Button>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Input type="checkbox" id="remember-me" name="rememberMe" 
                      onChange={testClick}  className="h-4 w-4 rounded" />
                      <Label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                        Remember me
                      </Label>
                    </div>

                  </div>
                  <div />
                </form>
                <div className="mt-5 text-center flex flex-col gap-4">
                  <span ><hr />
                    <h2>Or continue with</h2>
                  </span>
                  <div className="flex mt-3 gap-5 justify-center">
                    <div className="flex gap-2 text-sm font-bold items-center rounded-full px-6 py-2 border-gray-500 border " >
                      <Image
                        src="/google.png"
                        width={24}
                        height={24}
                        alt="Google logo"
                      /> Google
                    </div>
                    <div className="flex gap-2  text-sm font-bold items-center rounded-full px-6 py-2 border-gray-500 border"  >
                      <Image
                        src="/facebook.png"
                        width={24}
                        height={24}
                        alt="Facebook logo"
                      /> Facebook
                    </div>
                    <div className="flex gap-2  text-sm font-bold items-center rounded-full px-6 py-2 border-gray-500 border" >
                      <Image
                        src="/vercel.svg"
                        width={40}
                        height={24}
                        alt="Vercel logo"
                      /> Vercel
                    </div>
                  </div>
                  <div className="flex gap-2 text-sm justify-center">
                    <p>Already have an account?</p>
                    <Link href="/login" className="font-medium text-primary text-blue-600 " prefetch={false}>
                      Login
                    </Link>
                  </div>
                  <div className="text-center text-xs">
                    <p>By continuing, you agree to Scissors&apos;s <Link href="#" className="font-medium text-blue-600 text-xs" prefetch={false}>Terms of Service</Link> and acknowledging that you have read <Link href="#" className="font-medium text-blue-600 text-xs" prefetch={false}>Privacy Policy</Link> to learn how we collect, use and share your data.</p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


