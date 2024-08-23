'use client';

import { useState } from "react";
import Footer from "../ui/Footer";
import Header from "../ui/Header";

export default function UrlPage() {
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');

    async function shortenUrl(url: string) {
        try {
            const response = await fetch(`https://api.tinyurl.com/create/${url}`, {  
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.TINYURL_ACCESS_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    url: url,
                    domain: "tinyurl.com",
                    description: "Shortened URL",
                }),
            });

            const headers= {
                'Authorization': `Bearer ${process.env.TINYURL_ACCESS_TOKEN}`,
            }

            console.log('Request headers:', headers);

            if (response.ok) {
                const data = await response.json(); 
                setShortUrl(data);
                const newUrl = data;
                return console.log(data)
               
            } else {
                throw new Error('Failed to shorten URL');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
        <section>
            <Header />
        </section>


            <div className="flex flex-col items-center justify-center h-[80vh] bg-slate-50">
                <h1 className="text-4xl font-bold text-center text-background">
                    Shorten your links
                </h1>
                <p className="mt-4 text-lg text-center text-muted-foreground">
                    Build and protect your brand using powerful short links
                </p>
                <div className="flex flex-col md:flex-row md:justify-between gap-5 mt-5">
                    <input
                        type="search"
                        id="search"
                        name="search"
                        placeholder="Type or paste a link (URL)"
                        className="w-full rounded-3xl bg-background border pl-8 md:w-[200px] lg:w-[480px]"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <button
                        className="text-lg px-4 py-2 font-semibold text-white p-2 rounded-full bg-gray-600 hover:bg-cyan-600 shadow transition-colors"
                        onClick={() => shortenUrl(url)}
                    >
                        Shorten URL
                    </button>
                </div>

                {shortUrl && (
                    <div className="mt-8">
                        <p className="text-lg text-center text-muted-foreground">
                            Shortened URL
                        </p>
                        <p className="mt-4 text-lg text-center text-muted-foreground">
                            {shortUrl}
                        </p>
                    </div>
                )}

                
            </div>
            <section className="mt-30">
                    <Footer />
                </section>
        </>
    );
}