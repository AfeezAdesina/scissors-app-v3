import Image from 'next/image'
import React from 'react'

export default function Faq() {
  return (
    <>
      <section>
        <div>
          <h1>FAQ</h1>
          <Image
            src="/scissors-w.png"
            alt="faq logo"
          />
        </div>
        <main>
          <details open>
            <summary>What is Scissors?</summary>
            <p>Scissors is a URL shortening service that allows you to create, share, and manage branded short links.</p>
          </details>
          <details open>
            <summary>What is a URL shortener?</summary>
            <p>A URL shortener, also referred to as a link shortener, may appear straightforward, but its use can significantly boost your marketing strategy.
              Link shorteners function by converting lengthy URLs into more compact, comprehensible versions. Clicking the abbreviated link redirects the user seamlessly to the intended destination URL. Consider a shortened URL as a catchy and concise moniker for your extended webpage address. For instance, you could use a short URL such as rb.gy/mynewbook, offering a clear preview of what to expect when the link is clicked.
              For individuals creating and sharing content online, a URL shortener is a valuable asset.
              Elevate your URLs with our user-friendly, complimentary link shortener provided above.</p>
          </details>
          <details open>
            <summary>How do I get started with Scissors?</summary>
            <p>Getting started with Scissors is easy. Simply create an account, and you can start creating, sharing, and managing your branded short links in minutes.</p>
          </details>

        </main>

      </section>
    </>
  )
}
