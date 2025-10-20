import Image from "next/image";

interface FreelancerCardProps {
  mainImage: string | null;
  title: string;
  sellerDisplayName: string;
  sellerCountry: string;
  sellerRatingScore: number;
  sellerRatingCount: number;
  price: number;
  duration: number;
}

// Country code to flag emoji mapping
const countryFlags: Record<string, string> = {
  PK: "🇵🇰",
  US: "🇺🇸",
  CY: "🇨🇾",
  BY: "🇧🇾",
  BD: "🇧🇩",
  LK: "🇱🇰",
  EG: "🇪🇬",
  CA: "🇨🇦",
  BE: "🇧🇪",
  IN: "🇮🇳",
};

export function FreelancerCard({
  mainImage,
  title,
  sellerDisplayName,
  sellerCountry,
  sellerRatingScore,
  sellerRatingCount,
  price,
  duration,
}: FreelancerCardProps) {
  const flag = countryFlags[sellerCountry] || "🌍";

  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Image */}
      <div className="relative aspect-video bg-gray-100">
        {mainImage ? (
          <Image
            src={mainImage}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}

        {/* Active Badge */}
        <div className="absolute top-2 right-2 px-3 py-1 bg-[var(--color-ghostteam-green)] text-white text-xs font-semibold rounded-full shadow-md">
          Available for work
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Seller Info */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[var(--color-ghostteam-green)]/10 flex items-center justify-center text-sm font-semibold text-[var(--color-ghostteam-green)]">
            {sellerDisplayName.charAt(0)}
          </div>
          <div className="flex items-center gap-1.5 text-sm text-[var(--color-text-default)]">
            <span className="font-medium">{sellerDisplayName}</span>
            <span className="text-lg leading-none">{flag}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-[var(--color-text-heading)] line-clamp-2 min-h-[3rem]">
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <svg
            className="w-4 h-4 text-[var(--color-ghostteam-green)]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm font-semibold text-[var(--color-text-default)]">
            {sellerRatingScore.toFixed(1)}
          </span>
          <span className="text-sm text-[var(--color-text-muted)]">
            ({sellerRatingCount.toLocaleString()})
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-3" />

        {/* Price & Duration */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-[var(--color-ghostteam-green)]">
              ${price}
            </span>
            <span className="text-sm text-[var(--color-text-muted)] ml-1">
              starting at
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)]">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{duration} day delivery</span>
        </div>
      </div>
    </div>
  );
}
