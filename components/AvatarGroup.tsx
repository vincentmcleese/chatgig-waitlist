import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarGroupProps {
  maxVisible?: number;
}

export function AvatarGroup({ maxVisible = 5 }: AvatarGroupProps) {
  const avatars = [
    { src: "https://i.pravatar.cc/150?img=1", fallback: "U1" },
    { src: "https://i.pravatar.cc/150?img=5", fallback: "U2" },
    { src: "https://i.pravatar.cc/150?img=8", fallback: "U3" },
    { src: "https://i.pravatar.cc/150?img=12", fallback: "U4" },
    { src: "https://i.pravatar.cc/150?img=15", fallback: "U5" },
  ];

  return (
    <div className="flex items-center justify-center">
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
    </div>
  );
}
