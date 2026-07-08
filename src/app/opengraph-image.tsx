import { ImageResponse } from "next/og";

export const alt = "Lilainie Adjei-Addo — People. Systems. Impact.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);
  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status === 200) return await response.arrayBuffer();
  }
  throw new Error("failed to load font data");
}

export default async function Image() {
  const text =
    "LILAINIE ADJEI-ADDO PEOPLE. SYSTEMS. IMPACT. Behavioural Science · Creativity · Partnerships · Implementation";

  const antonFont = await loadGoogleFont("Anton", text);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#c4b5d9",
          padding: "72px",
          fontFamily: "Anton",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 28,
              color: "#1a1a1a",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            LILAINIE ADJEI-ADDO
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <p style={{ margin: 0, fontSize: 150, color: "#d4431e", lineHeight: 1.02 }}>
            PEOPLE.
          </p>
          <p style={{ margin: 0, fontSize: 150, color: "#d4431e", lineHeight: 1.02 }}>
            SYSTEMS.
          </p>
          <p style={{ margin: 0, fontSize: 150, color: "#d4431e", lineHeight: 1.02 }}>
            IMPACT.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 26,
              color: "rgba(26,26,26,0.65)",
              letterSpacing: "0.12em",
            }}
          >
            Behavioural Science · Creativity · Partnerships · Implementation
          </p>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Anton",
          data: antonFont,
          style: "normal",
        },
      ],
    }
  );
}
