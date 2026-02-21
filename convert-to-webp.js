import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "./src/assets";     // CHANGE if needed
const outputDir = "./src/assets-webp"; // WebP output folder

// Create output folder if not exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all image files recursively
function getAllImages(dir, files = []) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllImages(fullPath, files);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      files.push(fullPath);
    }
  });
  return files;
}

const images = getAllImages(inputDir);

(async () => {
  for (const img of images) {
    const fileName = path.basename(img).replace(/\.(jpg|jpeg|png)$/i, ".webp");
    const outputPath = path.join(outputDir, fileName);

    await sharp(img)
      .webp({ quality: 90 }) // Adjust quality (85 is best for art)
      .toFile(outputPath);

    console.log(`✅ Converted: ${img} → ${outputPath}`);
  }

  console.log("🎉 All images converted to WebP!");
})();