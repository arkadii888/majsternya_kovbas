import Image from "next/image";

export default function ProductPhotoGallery({
  photos,
  productName,
}: {
  photos?: string[];
  productName: string;
}) {
  const image = photos?.[0];

  if (!image) {
    return (
      <div className="flex aspect-[16/9] w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-muted text-center">
        <span className="text-4xl" aria-hidden>
          📸
        </span>
        <span className="text-sm text-muted-foreground">
          Фотографії товару нещодавно будуть додані
        </span>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-muted">
      <Image
        src={image}
        alt={`Фото «${productName}»`}
        fill
        sizes="(min-width: 1024px) 66vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}
