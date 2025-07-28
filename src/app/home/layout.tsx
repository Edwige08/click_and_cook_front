'use client'

import { UserProvider } from "@/components/UserInfos";
import Navbar from "../../components/Navbar";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <UserProvider>
        {children}
      </UserProvider>
    </>
  )
}