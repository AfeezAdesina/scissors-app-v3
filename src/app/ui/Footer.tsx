import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="bg-muted p-6 md:py-12 bg-gray-200 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" prefetch={false}>
              About Us
            </Link>
            <Link href="#" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#" prefetch={false}>
              links
            </Link>
            <Link href="#" prefetch={false}>
              Anakytics
            </Link>
            <Link href="#" prefetch={false}>
              Scissiors AI
            </Link>
            <Link href="#" prefetch={false}>
              API
            </Link>
            <Link href="#" prefetch={false}>
              QR codes
            </Link>
            <Link href="#" prefetch={false}>
              LinkGallery
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              FAQs
            </Link>
            <Link href="#" prefetch={false}>
              Testimonials
            </Link>
            <Link href="#" prefetch={false}>
              Case Studies
            </Link>
            <Link href="#" prefetch={false}>
              Buy Domain
            </Link>
            <Link href="#" prefetch={false}>
              Service Status
            </Link>
            <Link href="#" prefetch={false}>
              Integrations
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Use
            </Link>
            <Link href="#" prefetch={false}>
              Trust center
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link>
            <Link href="#" prefetch={false}>
              Anti-spam Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact Us</h3>
            <Link href="#" prefetch={false}>
              Contact sales
            </Link>
            <Link href="#" prefetch={false}>
              Contact Support
            </Link>
            <Link href="#" prefetch={false}>
              Patner With Us
            </Link>
            <div className="">
              <h3 className="font-semibold">Support</h3>
              <Link href="#" prefetch={false}>
                Knowledge base
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <p className="text-center mt-20">Scissors App &copy;2024</p>
    </>
  );
}
