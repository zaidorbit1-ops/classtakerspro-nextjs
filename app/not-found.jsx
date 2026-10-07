import Header from "../src/component/header";
import Footer from "../src/component/footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="container" style={{ padding: "150px 0 80px" }}>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
      </main>
      <Footer />
    </>
  );
}
