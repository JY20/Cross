"use client";
import WalletBar from "@/components/WalletBar";
import Menu from "@/components/menu";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-12">
      <WalletBar/>
    </main>
  );
}
