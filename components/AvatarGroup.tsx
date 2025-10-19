import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarGroupProps {
  count: number;
  maxVisible?: number;
}

export function AvatarGroup({ count, maxVisible = 4 }: AvatarGroupProps) {
  const avatars = [
    { src: "/avatars/1.jpg", fallback: "JD" },
    { src: "/avatars/2.jpg", fallback: "SA" },
    { src: "/avatars/3.jpg", fallback: "MK" },
    { src: "/avatars/4.jpg", fallback: "RL" },
  ];

  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2">
        {avatars.slice(0, maxVisible).map((avatar, i) => (
          <Avatar
            key={i}
            className="border-2 border-white h-10 w-10 transition-transform hover:scale-110 hover:z-10"
          >
            <AvatarImage src={avatar.src} alt={`User ${i + 1}`} />
            <AvatarFallback className="bg-[var(--color-ghostteam-green)] text-white text-xs">
              {avatar.fallback}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>
      <span className="text-sm text-[var(--color-text-muted)]">
        <span className="font-semibold text-[var(--color-text-default)]">
          +{count.toLocaleString()}
        </span>{" "}
        on the waitlist
      </span>
    </div>
  );
}
