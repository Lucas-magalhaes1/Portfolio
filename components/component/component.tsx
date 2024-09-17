import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from 'react';
import Image from 'next/image';



export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-[#0077b6] to-[#00b894]">
        <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center text-primary-foreground">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
            
          </h1>
          <p className="max-w-[700px] text-xl md:text-2xl mt-4">
           
          </p>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
          <Image
            src="/placeholder.svg" 
            width={400} 
            height={400} 
            alt="Profile Photo"
            className="rounded-xl"
            style={{ aspectRatio: "400/400", objectFit: "cover" }}
            />
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl font-bold"></h2>
              <p className="text-muted-foreground mt-2">
                
              </p>
            </div>
            <div>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}
              >
                <DownloadIcon className="mr-2 h-5 w-5" />
                
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold"></h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-8">
            <div className="flex flex-col items-center justify-center space-y-2">
              <CodepenIcon className="w-12 h-12" />
              <h3 className="text-lg font-semibold"></h3>
              <p className="text-muted-foreground text-sm">
             
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <PiIcon className="w-12 h-12" />
              <h3 className="text-lg font-semibold"></h3>
              <p className="text-muted-foreground text-sm">
                
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <DatabaseIcon className="w-12 h-12" />
              <h3 className="text-lg font-semibold"></h3>
              <p className="text-muted-foreground text-sm">
                
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <DatabaseIcon className="w-12 h-12" />
              <h3 className="text-lg font-semibold"></h3>
              <p className="text-muted-foreground text-sm"></p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <RedoDotIcon className="w-12 h-12" />
              <h3 className="text-lg font-semibold"></h3>
              <p className="text-muted-foreground text-sm">
               
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <DockIcon className="w-12 h-12" />
              <h3 className="text-lg font-semibold"></h3>
              <p className="text-muted-foreground text-sm">
                
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold"></h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle></CardTitle>
                <CardDescription>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  <GitlabIcon className="mr-2 h-5 w-5" />
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle></CardTitle>
                <CardDescription>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                 
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  <GitlabIcon className="mr-2 h-5 w-5" />
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle></CardTitle>
                <CardDescription>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  <GitlabIcon className="mr-2 h-5 w-5" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold"></h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name"></Label>
                  <Input id="name" type="text" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject"></Label>
                  <Input id="subject" type="text" placeholder="Subject" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message"></Label>
                  <Textarea id="message" rows={5} placeholder="Your message" />
                </div>
                <Button type="submit" className="w-full">
                </Button>
              </form>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-2">
                <GitlabIcon className="w-6 h-6" />
                <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <LinkedinIcon className="w-6 h-6" />
                <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full bg-muted py-6 mt-auto">
        <div className="container px-4 md:px-6 flex items-center justify-between">
          <p className="text-muted-foreground text-sm"></p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              <GitlabIcon className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              <LinkedinIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function CodepenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
}


function DatabaseIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function DockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 8h20" />
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 16h12" />
    </svg>
  )
}


function DownloadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}


function GitlabIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  )
}


function LinkedinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function PiIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="9" x2="9" y1="4" y2="20" />
      <path d="M4 7c0-1.7 1.3-3 3-3h13" />
      <path d="M18 20c-1.7 0-3-1.3-3-3V4" />
    </svg>
  )
}


function RedoDotIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="17" r="1" />
      <path d="M21 7v6h-6" />
      <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
    </svg>
  )
}
