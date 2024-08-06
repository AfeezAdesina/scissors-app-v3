import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Input, Textarea } from "./ui/SignupInput";
import Faq from "./ui/Faq";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className="flex flex-col min-h-[100dvh]">
       <Header/>
        <main className="flex-1 mt-6">
          <section className="w-full h-[80dvh] ">
            <div className=" flex items-center justify-around">
              <div className="text-start space-y-4 max-w-2xl flex flex-col gap-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-gray-800">
                  Think Beyond The Link
                </h1>
                <p className="text-lg font-extralight sm:text-lg md:text-2xl leading-8 text-gray-800">
                  Create branded short URLs and QR codes <br /> for secure
                  connections that matter.
                </p>
                <div className="flex items-start gap-5 justify-start">
                  <Link
                    href="/signup"
                    className="text-lg font-medium p-2 rounded-full bg-gray-800 px-10 py-3 text-white hover:bg-cyan-600 shadow transition-colors"
                    prefetch={false}
                  >
                    Sign Up Now
                  </Link>
                  <Link
                    href="/demopage"
                    className="text-lg font-medium p-2 rounded-full border-gray-800 border-solid text-gray-800 border px-10 py-3 hover:text-cyan-600 hover:border-cyan-600 shadow transition-colors"
                    prefetch={false}
                  >
                    Get a Demo
                  </Link>
                </div>
              </div>
              <div className="motion-reduce:hidden hover:animate-spin">
                <Image
                  src="/scissors-logo.png"
                  width={400}
                  height={400}
                  alt="Scissors logo"
                  
                />
              </div>
          

            </div>
          </section>
          <section className="flex mt-5 ">
            <div className="flex flex-col gap-8 bg-white rounded-md px-10 shadow-lg py-20">
              <h2 className=" text-3xl font-semibold leading-10 text-gray-600">
                Create a short link <br /> and QR code.
              </h2>
              <div className="flex justify-between">
                <Input
                  type="search"
                  placeholder="Type or paste a link (URL)"
                  className=" w-full rounded-3xl bg-background border pl-8 md:w-[200px] lg:w-[480px]"
                />
                <Link
                  href="#"
                  className="text-lg px-4 py-2 font-semibold text-white p-2 rounded-full bg-gray-600 hover:bg-cyan-600 shadow transition-colors"
                  prefetch={false}
                >
                  Shorten URL
                </Link>
              </div>
              <p className="font-light w-full text-gray-600">
                By clicking Shorten URL, you agree to Scissors’s{" "}
                <Link href="#" className="underline">
                  Terms of Use
                </Link>{" "}
                ,{" "}
                <Link href="#" className="underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="#" className="underline">
                  Cookie Policy
                </Link>{" "}
              </p>
            </div>
            <div className="relative bg-cyan-700 flex flex-col gap-2 pl-32 pr-10 pt-16 pb-12 shadow-lg mt-8 mb-8 rounded-r-md">
              <p className="text-white text-lg font-semibold">
                Customize your link in seconds!
              </p>
              <p className="text-white  text-lg">
                Do you have already own a domain?
              </p>
              <div className="flex gap-4 mt-4">
                <Link href="#" className="group">
                  <div className="flex items-center gap-4 flex-col group-hover:bg-cyan-100 bg-white px-5 py-3 rounded-lg w-[200px]">
                    <Image
                      src="/www.png"
                      width={32}
                      height={32}
                      alt="domian logo"
                      className="bg-cyan-100 p-1 rounded-xl group-hover:bg-white"
                    />
                    <p className="text-center text-sm font-medium group-hover:text-cyan-600">
                      Yes,i do have my own domain
                    </p>
                  </div>
                </Link>
                <Link href="#" className="group">
                  <div className="flex items-center gap-4 flex-col group-hover:bg-cyan-100 bg-white px-5 py-3 rounded-lg w-[200px]">
                    <Image
                      src="/www1.png"
                      width={32}
                      height={32}
                      alt="domian logo"
                      className="bg-cyan-100 p-1 rounded-xl group-hover:bg-white"
                    />
                    <p className="text-center text-sm font-medium group-hover:text-blue-500">
                      Not yet, lets check available domains
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <Image
              src="/pngegg.png"
              width={120}
              height={120}
              alt="arrow logo"
              className="absolute"
            />
          </section>
          <section id="about" className="w-full py-12 md:py-24 lg:py-32 hidden">
            <div className="container px-4 md:px-6">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    About Bright Lights Electric
                  </h2>
                  <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Bright Lights Electric is a leading provider of high-quality
                    LED and electrical installation services. Founded in 2010,
                    we have a team of experienced technicians who are dedicated
                    to delivering exceptional results for our clients.
                  </p>
                  <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    With a focus on innovation and customer satisfaction, we
                    have built a reputation for excellence in the industry. Our
                    commitment to using the latest technologies and techniques
                    ensures that our clients receive the best possible service.
                  </p>
                </div>
                <div className="grid gap-4">
                  <Image
                    src="/placeholder.svg"
                    width={550}
                    height={310}
                    alt="About Image 1"
                    className="rounded-xl object-cover"
                  />
                  <Image
                    src="/placeholder.svg"
                    width={550}
                    height={310}
                    alt="About Image 2"
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
          <section id="products" className="w-full px-10 py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-gray-600 sm:text-4xl md:text-5xl">
                  Our Services
                </h2>
                <p className="text-gray-600 font-light">
                  Choose the right plan for you
                </p>
              </div>
              <div className="flex gap-1 items-center px-2 w-fit border-2 border-gray-600 rounded-full py-2 ">
                <Button
                  href="#"
                  className="rounded-full px-6 py-2  hover:text-white  hover:bg-slate-600 active:bg-slate-600"
                >
                  Pay monthly
                </Button>
                <Button
                  href="#"
                  className="rounded-full px-6 py-2 hover:text-white hover:bg-slate-600 active:bg-slate-600"
                >
                  Pay annually
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-4  text-center">
                <div className="space-y-4 flex flex-col p-4 hover:scale-105">
                  <div className="flex flex-col gap-4 bg-gray-100 px-4 rounded-lg ring-4 ring-white shadow-lg ring-offset-0 h-[300px]">
                    <h3 className="text-4xl font-light mt-8 text-gray-600">
                      Get Started
                    </h3>
                    <p className="text-xs text-gray-600">
                      The quickiest and easiest way to create branded short
                      links.
                    </p>
                    <p className="text-gray-600">
                      <span className="font-bold text-black text-3xl">$0</span>
                      /mo
                    </p>
                    <hr className="bordet-t border-white "/>
                    <div className="flex flex-col mt-4 mb-4 gap-2 text-xs font-medium">
                      <p>
                        <span className="font-extrabold">10</span> branded
                        links/month
                      </p>
                      <p>
                        <span className="font-extrabold">10</span> QR
                        Codes/month
                      </p>
                    </div>
                  </div>
                  <div className="font-medium text-sm flex flex-col gap-2  text-gray-600">
                    <p>Custom Domain</p>
                    <p>Link Analytics</p>
                    <p>UTM Builder</p>
                    <p>QR Codes</p>
                  </div>

                  <Link
                    href="#"
                    className="rounded-full visited:bg-gray-600 px-4 py-2 text-gray-600 border border-gray-600 font-bold"
                  >
                    Sign up
                  </Link>
                </div>
                <div className="space-y-4 flec flex-col hover:scale-105 p-4">
                  <div className="flex flex-col gap-4 bg-gray-100 px-4 rounded-lg ring-4 ring-white shadow-lg ring-offset-0 h-[300px] ">
                    <h3 className="text-4xl font-light mt-8 text-gray-600">
                      Essentials
                    </h3>
                    <p className="text-xs text-gray-600">
                      More power for small teams who need higher link volume
                    </p>
                    <p className="text-gray-600">
                      <span className="font-bold text-black text-3xl">$13</span>
                      /mo
                    </p>
                    <hr className="bordet-t border-white "/>
            
                    <div className="flex flex-col mt-4 mb-4 gap-2 text-xs font-medium items-center">
                      <p>
                        <span className="font-extrabold">250</span> branded
                        links/month
                      </p>
                      <p>
                        <span className="font-extrabold">250</span> QR
                        Codes/month
                      </p>
                      <p className="text-xs text-white font-bold bg-cyan-600 rounded-full w-fit text-center px-1">
                        Customize with add-ons
                      </p>
                    </div>
                  </div>
                  <div className="font-medium text-sm flex flex-col gap-2 text-gray-600">
                    <p>Scissor AI Boost</p>
                    <p>404 Redirect</p>
                    <p>Password Protection</p>
                    <p>Includes 1 Branded Domain</p>
                  </div>
                  <Button
                    href="#"
                    className="rounded-full w-full visited:bg-gray-600 px-4 py-2 text-gray-600 border border-gray-600 font-bold"
                  >
                    Buy Now
                  </Button>
                  <div>
                    <Link href="#" className="text-cyan-600 hover:underline">
                      or Start Free Trial
                    </Link>
                  </div>
                </div>
                <div className="space-y-4 flec flex-col hover:scale-105 p-4">
                  <div className="flex flex-col gap-4 bg-cyan-100 px-4 rounded-lg ring-4 ring-white shadow-lg ring-offset-0 h-[300px]">
                    <h3 className="text-4xl font-light mt-8 text-gray-600">
                      Professional
                    </h3>
                    <p className="text-xs text-gray-600">
                      Advanced features to boost performanve and scale your
                      business.
                    </p>
                    <p className="text-gray-600">
                      <span className="font-bold text-black text-3xl">$32</span>
                      /mo
                    </p>
                    <hr className="bordet-t border-white "/>
                    <div className="flex flex-col mt-4 mb-4 gap-2 text-xs font-medium items-center">
                      <p>
                        <span className="font-extrabold">1,500</span> branded
                        links/month
                      </p>
                      <p>
                        <span className="font-extrabold">1,500</span> QR
                        Codes/month
                      </p>
                      <p className="text-xs text-white font-bold bg-cyan-600 rounded-full w-fit text-center px-1">
                        Customize with add-ons
                      </p>
                    </div>
                  </div>
                  <div className="font-medium text-sm flex flex-col gap-2 text-gray-600">
                    <p>Traffic Routing</p>
                    <p>Link Expiration</p>
                    <p>1 Teammate</p>
                    <p>2 Workspaces</p>
                  </div>
                  <Button
                    href="#"
                    className="rounded-full w-full visited:bg-gray-600 px-4 py-2 text-gray-600 border border-gray-600 font-bold"
                  >
                    Buy Now
                  </Button>
                  <div>
                    <Link href="#" className="text-cyan-600 hover:underline">
                      or Start Free Trial
                    </Link>
                  </div>
                </div>
                <div className="space-y-4 flec flex-col hover:scale-105 p-4">
                  <div className="flex flex-col gap-4 bg-cyan-100 px-4 rounded-lg ring-4 ring-white shadow-lg ring-offset-0 h-[300px]">
                    <h3 className="text-4xl font-light mt-8 text-gray-600">
                      Premium
                    </h3>
                    <p className="text-xs text-gray-600">
                      Large-scale link creation and management.
                    </p>
                    <p className="text-gray-600">
                      <span className="font-bold text-black text-3xl">
                        $365
                      </span>
                      /mo
                    </p>
                    <hr className="bordet-t border-white "/>
                    <div className="flex flex-col mt-4 mb-4 gap-2 text-xs font-medium items-center">
                      <p>
                        <span className="font-extrabold">10,000</span> branded
                        links/month
                      </p>
                      <p>
                        <span className="font-extrabold">10,000</span> QR
                        Codes/month
                      </p>
                      <p className="text-xs text-white font-bold bg-cyan-600 rounded-full w-fit text-center px-1">
                        Customize with add-ons
                      </p>
                    </div>
                  </div>
                  <div className="font-medium text-sm flex flex-col gap-2 text-gray-600">
                    <p>Broken Link Management</p>
                    <p>Deep links</p>
                    <p>2 Teammate</p>
                    <p>2 Workspaces</p>
                  </div>
                  <Button
                    href="#"
                    className="rounded-full w-full visited:bg-gray-600 px-4 py-2 text-gray-600 border border-gray-600 font-bold"
                  >
                    Buy Now
                  </Button>
                  <div>
                    <Link href="#" className="text-cyan-600 hover:underline">
                      or Start Free Trial
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="faq">
            <Faq/>
          </section>
          <section
            id="clients"
            className="w-full py-12 md:py-24 lg:py-32 bg-muted"
          >
            <div className="container px-4 md:px-6">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Clients
                </h2>
                <p className="text-lg font-light text-gray-600 text-center">
                  Trusted by the world&apos;s smartest brand
                </p>
              </div>
              <div className="mt-12 flex justify-center items-center gap-8 animate-bounce h-10 opacity-50 grayscale ">
                <Image
                  src="/afeez.png"
                  width={200}
                  height={70}
                  alt="Client Logo 1"
                 
                />
                <Image
                  src="/next.svg"
                  width={140}
                  height={70}
                  alt="Client Logo 2"
                  className="aspect-[2/1] object-contain"
                />
                <Image
                  src="/Temz.png"
                  width={140}
                  height={70}
                  alt="Client Logo 3"
                  className="aspect-[2/1] object-contain"
                />
                <Image
                  src="/scissors.png"
                  width={140}
                  height={70}
                  alt="Client Logo 4"
                  className="aspect-[2/1] object-contain"
                />
                <Image
                  src="/vercel.svg"
                  width={140}
                  height={70}
                  alt="Client Logo 5"
                  className="aspect-[2/1] object-contain"
                />
                
              </div>
            </div>
          </section>
          <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-600">
            <div className="container px-4 md:px-6">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl ">
                  Contact Us
                </h2>
                <p className="text-lg font-light text-white text-center">
                  Get in touch with our team to learn more about our services or
                  to request a quote.
                </p>
              </div>
              <div className="mt-12 max-w-md mx-auto">
                <form className="grid gap-4" >
                  <Input type="text" placeholder="Name:" className="w-full border border-white p-2 rounded-lg" />
                  <Input type="email" placeholder="Email:" className="w-full border border-white p-2 rounded-lg" />
                  <Textarea placeholder="Message:" className="w-full border border-white p-2 rounded-lg" rows={5} />
                  <Button type="submit" className="w-full border bg-white p-2 rounded-lg text-gray-600 font-bold">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </section>
        </main>
        <Footer/>
      </div>
    </main>
  );
}
