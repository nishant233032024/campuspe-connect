import "./globals.css";

export const metadata = {
  title: "CampusPe — Connect 10X Faster",
  description:
    "One platform connecting students, colleges and employers — faster. Find colleges, discover opportunities and connect with the right talent on CampusPe.",
};

function CampusPeLogo() {
  return (
    <svg
      viewBox="0 0 32 32"
      width="32"
      height="32"
      aria-hidden="true"
      focusable="false"
      style="background:linear-gradient(135deg,#28b4ff 0%,#0875ee 100%);border-radius:8px;"
    >
      <text
        x="50%"
        y="52%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="Manrope, Arial, sans-serif"
        fontSize="17"
        fontWeight="800"
        letterSpacing="-2.5"
      >
        Cp
      </text>
    </svg>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22><rect width=%2232%22 height=%2232%22 fill=%22%230875ee%22 rx=%228%22/><text x=%2216%22 y=%2218%22 font-size=%2217%22 font-weight=%22800%22 fill=%22%23ffffff%22 font-family=%22Manrope%22>Cp</text></svg>" />
      </head>
      <body>{children}</body>
    </html>
  );
}
