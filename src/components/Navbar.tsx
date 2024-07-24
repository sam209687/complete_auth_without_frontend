"use client";
import { useSession, signOut } from "next-auth/react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import React from "react";
import { User } from "next-auth";
import { Button } from "./ui/button";
import ToggleMode from "./ToggleMode";

export default function Navbar() {
  const { data: session } = useSession();
  const user: User = session?.user as User;

  return (
    <nav className="">
      <Menubar className="p-9 shadow-lg shadow-gray-900">
        <MenubarMenu>
          <div className="w-full  flex">
            <div className="w-1/3 ">
              <MenubarTrigger>Derive Solars</MenubarTrigger>
            </div>
            <div className="w-full  flex justify-end space-x-9">
              <MenubarTrigger className="cursor-pointer">Home</MenubarTrigger>
              <MenubarTrigger className="cursor-pointer">Shop</MenubarTrigger>
              <MenubarTrigger className="cursor-pointer">
                Profile
              </MenubarTrigger>
              <ToggleMode />
              {session ? (
                <>
                  <Button onClick={() => signOut()}>Logout</Button>
                </>
              ) : (
                <Button>
                  <Link href={"/sign-in"}> Login</Link>
                </Button>
              )}
            </div>
          </div>
        </MenubarMenu>
      </Menubar>
    </nav>
  );
}
