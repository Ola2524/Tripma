"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Signup from "../signup/Signup";
import Button from "../../ui/button/Button";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const searchParams = useSearchParams();
  const showSignupFormParam = searchParams.get("showSignupForm") === "true";
  const { data: session, status } = useSession();

  const [showSignupForm, setShowSignupForm] = useState(false);
  const [signFormStatus, setSignFormStatus] = useState(null);

  useEffect(() => {
    if (showSignupFormParam) {
      setSignFormStatus("signin");
      setShowSignupForm(true);
    }
  }, [showSignupFormParam]);

  function handleSignForm(status) {
    setSignFormStatus(status == "signin" ? "signin" : "signup");
    setShowSignupForm(true);
  }

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Tripme
      </Link>
      <button type="button" className={styles.toggleBtn}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className={styles.links}>
        <li>
          <Link href="/flights">Flights</Link>
        </li>
        <li>
          <Link href="/hotels">Hotels</Link>
        </li>
        <li>
          <Link href="/packages">Packages</Link>
        </li>
        {status === "unauthenticated" && (
          <>
            <li>
              <button
                type="button"
                className={styles.signin_btn}
                onClick={() => handleSignForm("signin")}
              >
                Sign in
              </button>
            </li>
            <li>
              <Button
                action={() => handleSignForm("signup")}
                customStyle={{ padding: "13px 20px" }}
              >
                Sign up
              </Button>
            </li>
          </>
        )}
        {status === "authenticated" && (
          <li>
            <Button
              action={() => signOut({ redirect: false })}
              customStyle={{ padding: "13px 20px" }}
            >
              Sign out
            </Button>
          </li>
        )}
        {showSignupForm && (
          <Signup
            setShowSignupForm={setShowSignupForm}
            status={signFormStatus}
          />
        )}
      </ul>
    </nav>
  );
}
