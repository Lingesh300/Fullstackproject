import ContactForm from "./ContactForm";

function App() {
  return (
    <div style={{ background: "#020b1f", minHeight: "100vh", color: "white" }}>
      {/* HEADER */}
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "40px", fontWeight: "700" }}>GARI TECH</h1>
      </div>

      {/* SERVICES SECTION */}
      <section
        style={{
          padding: "40px",
          textAlign: "center"
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          What Can We Do For <span style={{ color: "#00bfff" }}>You?</span>
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            marginTop: "30px",
            flexWrap: "wrap"
          }}
        >
          <div
            style={{
              background: "#00112b",
              width: "280px",
              padding: "20px",
              borderRadius: "16px",
              border: "1px solid #0a2472",
              boxShadow: "0 0 15px rgba(0,150,255,0.2)"
            }}
          >
            <h3 style={{ color: "#00bfff" }}>Website Development</h3>
            <p>Responsive, modern websites built using React & modern tools.</p>
          </div>

          <div
            style={{
              background: "#00112b",
              width: "280px",
              padding: "20px",
              borderRadius: "16px",
              border: "1px solid #0a2472",
              boxShadow: "0 0 15px rgba(0,150,255,0.2)"
            }}
          >
            <h3 style={{ color: "#00bfff" }}>Graphic Designing</h3>
            <p>Logos, posters, branding and professional design services.</p>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}

export default App;
