"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getSupabaseBrowserClient } from "../../../src/lib/supabase/browser";
import styles from "./Login.module.css";

export default function BlogAdminLoginPage() {
  const router = useRouter();
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const sendCode = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");
    setBusy(true);

    try {
      const supabase = getSupabaseBrowserClient();
      const { error: otpError } = await supabase.auth.signInWithOtp({
        email: email.trim(),
        options: { shouldCreateUser: false },
      });

      if (otpError) {
        setError("We couldn't send a code. Check the email address, Supabase Auth settings, and that this user already exists.");
        return;
      }

      setStep("code");
      setMessage("If this email belongs to an existing Supabase user, a one-time code has been sent.");
    } catch (sendError) {
      setError(sendError.message || "Supabase is not configured. Check your .env.local values.");
    } finally {
      setBusy(false);
    }
  };

  const verifyCode = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");
    setBusy(true);

    try {
      const supabase = getSupabaseBrowserClient();
      const { error: verifyError } = await supabase.auth.verifyOtp({
        email: email.trim(),
        token: token.trim(),
        type: "email",
      });

      if (verifyError) {
        setError("That code is invalid or expired. Request a new code and try again.");
        return;
      }

      const response = await fetch("/api/blog/admin/session", { cache: "no-store" });
      const session = await response.json();
      if (!response.ok || !session.authorized) {
        await supabase.auth.signOut();
        setError("This Supabase account is not enabled for blog administration. Ask an owner to add it to public.blog_admins.");
        setStep("email");
        return;
      }

      router.replace("/blog-admin");
      router.refresh();
    } catch (verifyError) {
      setError(verifyError.message || "We couldn't verify the code. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className={styles.page}>
      <section className={styles.story}>
        <div className={styles.brand}><span className={styles.brandMark}>C</span> CLASS TAKERS PRO</div>
        <div className={styles.storyCopy}>
          <span className={styles.eyebrow}>THE EDITORIAL WORKSPACE</span>
          <h2 className={styles.headline}>Good ideas<br />deserve a home.</h2>
          <p className={styles.storyText}>A considered space for publishing useful guidance, thoughtful perspectives and practical learning support.</p>
        </div>
        <div className={styles.copyright}>© Class Takers Pro · Publishing desk</div>
      </section>
      <section className={styles.formSide}>
        <div className={styles.formCard}>
          <div className={styles.formLabel}>Administrator access</div>
          <h1 className={styles.title}>Sign in</h1>
          <p className={styles.description}>Use your authorized account to continue to the publishing workspace.</p>

        {step === "email" ? (
          <form onSubmit={sendCode} className={styles.form}>
            <label className={styles.field}>
              Account email
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>

            {message ? <div role="status" className={styles.notice}>{message}</div> : null}
            {error ? <div role="alert" className={styles.alert}>{error}</div> : null}

            <button disabled={busy} type="submit" className={styles.button}>
              {busy ? "Sending code..." : "Send one-time code"}
            </button>
          </form>
        ) : (
          <form onSubmit={verifyCode} className={styles.form}>
            <p className={styles.description}>Enter the code sent to <strong>{email}</strong>.</p>
            <label className={styles.field}>
              One-time code
              <input
                name="token"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                required
                maxLength={10}
                value={token}
                onChange={(event) => setToken(event.target.value.replace(/\s/g, ""))}
                className={styles.token}
              />
            </label>

            {message ? <div role="status" className={styles.notice}>{message}</div> : null}
            {error ? <div role="alert" className={styles.alert}>{error}</div> : null}

            <button disabled={busy} type="submit" className={styles.button}>
              {busy ? "Verifying..." : "Verify code"}
            </button>
            <button type="button" onClick={() => { setStep("email"); setToken(""); setError(""); setMessage(""); }} className={styles.textButton}>
              Use a different email
            </button>
          </form>
        )}

          <Link href="/blog" className={styles.back}>← Return to public journal</Link>
        </div>
      </section>
    </main>
  );
}
