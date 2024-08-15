'use client';

import React from 'react';
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import Link from 'next/link';
import { Input, Label, Textarea, Button } from '../ui/SignupInput';


export default function DemoPage() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()
    console.log('button clicked')
  }
  function testClick(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()
    console.log('input changed')
  }
  return (
    <>
      <Header />

      <div className='max-w-lg mx-auto mt-32 mb-11'>
        <form className="flex flex-col gap-3">
          <h1 className='font-light text-3xl text-black'>Book a Demo</h1>
          <div className="flex flex-col gap-5">
            <div className='flex gap-6'>
              <div className='flex flex-col'>
                <Label required htmlFor="first-name" className="text-sm font-light">First Name<span className='text-red-600'>*</span></Label>
                <Input type="text" id="first-name" name="first-name" value="text" onChange={testClick} required className="bg-gray-100 rounded-md p-2 " />
              </div>
              <div className='flex flex-col '>
                <Label htmlFor="last-name"className="text-sm font-light">Last Name<span className='text-red-600'>*</span></Label>
                <Input type="text" id="last-name" name="last-name" value="text" onChange={testClick} className="bg-gray-100 rounded-md p-2 w-full" required />
              </div>
            </div>
            <div>
              <Label htmlFor="email"className="text-sm font-light">Business Email<span className='text-red-600'>*</span></Label>
              <Input type="email" id="email" name="email" value="text" onChange={testClick} className="bg-gray-100 rounded-md p-2 w-full"  required />
            </div>
            <div>
              <Label htmlFor="message"className="text-sm font-light">Message<span className='text-red-600'>*</span></Label>
              <Textarea id="message" name="message" value="text" onChange={testClick} className="bg-gray-100 rounded-md p-2 w-full" required rows={5} />
            </div>
            <div>
              <Label htmlFor="contact"className="text-sm font-light">Contact Number<span className='text-red-600'>*</span></Label>
              <div className='flex gap-4'>
                <Input type="" id="contact" name="contact" value="text" onChange={testClick} className="bg-gray-100 rounded-md p-2 max-w-20" placeholder="+234" disabled required />
                <Input type="" id="contact" name="contact" value="text" onChange={testClick} className="bg-gray-100 rounded-md p-2 w-full"  required />
              </div>
            </div>
            
            <div className='mt-5'>
              <div className="flex gap-3 items-center">
                <Input type="checkbox" name="" id="" value="text" onChange={testClick} required />
                <Label htmlFor="" className="text-sm">I hereby declare that the information provided above is true and correct <span className='text-red-600'>*</span></Label>
              </div>
              <div className="flex gap-3 items-center">
                <Input type="checkbox" name="" id="" value="text" onChange={testClick}/>
                <Label htmlFor="" className="text-sm">I have read and agree to the <Link href="#" className='underline text-blue-600'>Privacy Policy<span className='text-red-600'>*</span></Link></Label>
              </div>
            </div>
            <Button type="submit" onClick={handleSubmit}className="bg-red-500 rounded-lg max-w-24 py-2 px-6 my-5 text-white font-medium text-sm">Submit</Button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

