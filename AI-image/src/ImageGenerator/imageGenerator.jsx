
import { useState } from "react";
import "../ImageGenerator/imageGene.css";

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateImage = async () => {
    if (!prompt.trim() || loading) return;

    setLoading(true);
    setError("");
    setImage("");//clears the previous generated image.

    try {
      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-image-1.5",
            prompt: prompt,
            size: "1024x1024",
            quality: "low",
            n: 1,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error?.message || "Image generation failed."
        );
      }

      const base64Image = data.data?.[0]?.b64_json;

      if (!base64Image) {
        throw new Error("No image was returned by the API.");
      }

      setImage(`data:image/png;base64,${base64Image}`);
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="generator">
      <h1>AI Image <span>Generator</span></h1>

      <div className="image-container">
        {loading ? (
          <p>Creating your image...</p>
        ) : image ? (
          <img src={image} alt={prompt} />
        ) : (
          <p>Your generated image will appear here</p>
        )}
      </div>

      {error && <p className="error">{error}</p>}

      <div className="search-box">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") generateImage();
          }}
          placeholder="Describe the image you want..."
        />

        <button onClick={generateImage} disabled={loading}>
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>
    </div>
  );
}