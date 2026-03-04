const photos = [
  "https://images.unsplash.com/photo-1768405942773-87e8d4fb782b",
  "https://images.unsplash.com/photo-1761850648640-2ee5870ee883",
  "https://images.unsplash.com/photo-1768463852017-921060ff24fe",
  "https://images.unsplash.com/photo-1761839258753-85d8eecbbc29",
  "https://images.unsplash.com/photo-1768507109219-4408445c8762",
];

export default function Gallery() {
  const mid = Math.ceil(photos.length / 2);
  const left = photos.slice(0, mid);
  const right = photos.slice(mid);

  return (
    <div className="flex gap-2 w-full">
      <div className="flex flex-col gap-2 w-full">
        {left.map((src, i) => (
          <img key={i} src={src} className="w-full object-cover" />
        ))}
      </div>

      <div className="flex flex-col gap-2 w-full">
        {right.map((src, i) => (
          <img key={i} src={src} className="w-full object-cover" />
        ))}
      </div>
    </div>
  );
}
