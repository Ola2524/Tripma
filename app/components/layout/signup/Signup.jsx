import Image from "next/image";
import Link from "next/link";
import styles from "./Signup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Signup({ setShowSignupForm, status }) {
  return (
    <div className={styles.signup}>
      <div className={styles.signup_form}>
        <button
          className={styles.close_btn}
          type="button"
          onClick={() => setShowSignupForm(false)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        {status == "signin" ? (
          <h3 style={{ marginBottom: "20px" }}>Sign in for Tripma</h3>
        ) : (
          <>
            <h3>Sign up for Tripma</h3>
            <p>
              Tripma is totally free to use. Sign up using your email address or
              phone number below to get started.
            </p>
          </>
        )}
        <form action="#">
          <input type="text" placeholder="Email or phone number" />
          <input type="text" placeholder="Password" />
          {status != "signin" && (
            <>
              <div style={{ marginBottom: "12px" }}>
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">
                  I agree to the <Link href="#">terms and conditions</Link>
                </label>
              </div>
              <div>
                <input type="checkbox" name="newsletter" id="newsletter" />
                <label htmlFor="newsletter">
                  Send me the latest deal alerts
                </label>
              </div>
            </>
          )}
          <button type="submit">Create account</button>
          <div className={styles.divider}>or</div>
          <div className={styles.signup_links}>
            <Link href="#">
              <Image
                src="/images/google.png"
                alt="Google"
                width={18}
                height={18}
              />
              Continue with Google
            </Link>
            <Link href="#">
              <Image
                src="/images/apple mac.png"
                alt="Apple"
                width={18}
                height={18}
              />
              Continue with Apple
            </Link>
            <Link href="#">
              <Image
                src="/images/facebook.png"
                alt="Facebook"
                width={18}
                height={18}
              />
              Continue with Facebook
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
