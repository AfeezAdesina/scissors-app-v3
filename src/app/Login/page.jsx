// Code for the Login page

import Link from "next/link";
import { Label, Input, Button } from "../ui/SignupInput";
import Image from "next/image";

export default function Login() {
  return (
    <>
      <section className="bg-gradient-to-b from-blue-500 to-transparent">
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

        <div className="flex  justify-around max-w-full">
          <div className="flex flex-col flex-start px-10 py-32 gap-4">
            <h2 className="text-3xl font-extrabold text-white">Welcome back to Scissors</h2>
            <p className="font-light text-md text-white">Create, share, and boost the performance of your branded short links <br /> directly from your dashboard.</p>
            <p className="font-light text-md text-white">Log in to your account and get started now.</p>
            <div>
              <Image
                src="/login.jpg"
                width={500}
                height={150}
                alt="loginlogo"
                className="rounded-3xl"
              />
            </div>
          </div>
          <div className="bg-white p-16 flex flex-col gap-4 rounded-3xl">
            <div className="mx-auto w-full max-w-md space-y-8 ">
              <div>
                <h2 className="my-6 text-center text-3xl font-bold tracking-tight text-foreground">
                  Log in
                </h2>
                <form className="space-y-6" action="#" method="POST">
                  <div className="">
                    <Label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="text"
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
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        placeholder="Your password"
                        className="block w-full appearance-none rounded-full border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                      />
                    </div>
                  </div>
                  <Button href="#" type="submit" className="rounded-full w-full py-3 text-center  text-sm font-medium bg-gray-600 hover:bg-blue-600 text-white">Login</Button>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Input type="checkbox" id="remember-me" name="remember-me" className="h-4 w-4 rounded" />
                      <Label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                        Remember me
                      </Label>
                    </div>
                    <div className="text-sm">
                      <Link href="#" className="font-sm text-primary hover:text-primary/90" prefetch={false}>
                        Forgot your password?
                      </Link>
                    </div>
                  </div>
                </form>
                <div className="mt-5 text-center flex flex-col gap-4">
                  <span ><hr/>
                    <h2>Or continue with</h2>
                  </span>
                  <div className="flex mt-3 gap-5 justify-center">
                    <Button className="flex gap-2  text-sm font-bold items-center rounded-full px-6 py-2 border-gray-500 border ">
                      <Image
                        src="/google.png"
                        width={24}
                        height={24}
                        alt="Google logo"
                      /> Google
                    </Button>
                    <Button className="flex gap-2  text-sm font-bold items-center rounded-full px-6 py-2 border-gray-500 border">
                      <Image
                        src="/facebook.png"
                        width={24}
                        height={24}
                        alt="Facebook logo"
                      /> Facebook
                    </Button>
                    <Button className="flex gap-2  text-sm font-bold items-center rounded-full px-6 py-2 border-gray-500 border">
                      <Image
                        src="/vercel.svg"
                        width={40}
                        height={24}
                        alt="Vercel logo"
                      /> Vercel
                    </Button>
                  </div>
                  <div className="flex gap-2 text-sm justify-center">
                    <p>Don&apos;t have a Scissors account yet?</p>
                    <Link href="/Signup" className="font-medium text-primary text-blue-600 " prefetch={false}>
                      Sign up
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
