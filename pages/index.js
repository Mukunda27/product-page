import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto px-0 lg:px-4">
      <Navbar />
    </main>
  );
}
