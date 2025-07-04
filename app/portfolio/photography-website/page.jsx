export default function PhotographyRedirect() {
  return (
    <iframe
      src="https://photography-web-site.vercel.app"
      width="100%"
      height="100%"
      style={{
        border: "none",
        minHeight: "100vh",
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
      }}
      title="Photography Website"
    />
  );
}
