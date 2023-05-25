import Image from "next/image";
import styles from "./page.module.css";
import UserSignup from "@/components/UserSignUp/UserSignup";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>ChatApp</h1>
      <UserSignup />
    </main>
  );
}
