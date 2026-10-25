
export default function Home() {
  return (
    <main
      style={{
        width: "100%",
        height: "100dvh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        src="/store.html"
        title="บ้านขันโตก เดอะแฮมสเตอร์ - ระบบจัดการร้านค้า"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
      />
    </main>
  );
}
