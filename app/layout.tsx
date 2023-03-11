import "../styles/globals.css"
import SideBar from "./components/SideBar"
import { authOptions } from "../pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import { SessionProvider } from "./components/SessionProvider"
import Login from "./components/Login"
import ClientProvider from "./components/ClientProvider"

export const metadata = {
  title: 'ANAPHAXETON OPEN AI',
  description: 'ChatGPT AI',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <body>
        <SessionProvider session={session}>
          {!session ? (
           <Login />
          ) :
            (
              <>
                <div className="lg:flex">
                  <div className="bg-gray-900 lg:max-w-xs lg:h-screen overflow-y-auto min-w-[20rem]">
                    <SideBar />
                  </div>
                  <div className="flex-1 bg-gray-800">
                  <ClientProvider/>
                    {children}
                  </div>
                </div>
              </>
            )}

        </SessionProvider>
      </body>
    </html>
  )
}
