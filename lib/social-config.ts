export type SocialPlatformId =
  | "instagram"
  | "facebook"
  | "tiktok"
  | "phone"
  | "email"
  | "kakaotalk";

export type SocialActionType = "open" | "close" | "copy" | "call" | "mailto";

export type SocialModalAction = {
  label: string;
  variant: "primary" | "secondary";
  action: SocialActionType;
};

export type SocialPlatformConfig = {
  id: SocialPlatformId;
  title: string;
  content: string;
  openUrl?: string;
  copyValue?: string;
  tel?: string;
  mailto?: string;
  actions: SocialModalAction[];
  color: string;
  primary?: boolean;
};

export const socialPlatformConfigs: SocialPlatformConfig[] = [
  {
    id: "instagram",
    title: "Instagram",
    content: "@hipz2309",
    openUrl: "https://instagram.com/hipz2309",
    actions: [
      { label: "Open Instagram", variant: "primary", action: "open" },
      { label: "Close", variant: "secondary", action: "close" },
    ],
    color: "from-pink-400 to-rose-400",
    primary: true,
  },
  {
    id: "facebook",
    title: "Facebook",
    content: "facebook.com/hipz2309",
    openUrl: "https://facebook.com/hipz2309",
    actions: [
      { label: "Open Facebook", variant: "primary", action: "open" },
      { label: "Close", variant: "secondary", action: "close" },
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "tiktok",
    title: "TikTok",
    content: "@hipz2309",
    openUrl: "https://tiktok.com/@hipz2309",
    actions: [
      { label: "Open TikTok", variant: "primary", action: "open" },
      { label: "Close", variant: "secondary", action: "close" },
    ],
    color: "from-neutral-800 to-neutral-900",
  },
  {
    id: "phone",
    title: "Phone Number",
    content: "+82 10-5613-2666",
    tel: "tel:+821056132666",
    actions: [
      { label: "Call Now", variant: "primary", action: "call" },
      { label: "Close", variant: "secondary", action: "close" },
    ],
    color: "from-emerald-400 to-green-500",
  },
  {
    id: "email",
    title: "Email",
    content: "hip2309@gmail.com",
    copyValue: "hip2309@gmail.com",
    mailto: "mailto:hip2309@gmail.com",
    actions: [
      { label: "Copy Email", variant: "primary", action: "copy" },
      { label: "Send Email", variant: "secondary", action: "mailto" },
      { label: "Close", variant: "secondary", action: "close" },
    ],
    color: "from-accent to-purple-400",
  },
  {
    id: "kakaotalk",
    title: "KakaoTalk",
    content: "ID: hipz2309",
    copyValue: "hipz2309",
    actions: [
      { label: "Copy ID", variant: "primary", action: "copy" },
      { label: "Close", variant: "secondary", action: "close" },
    ],
    color: "from-yellow-400 to-amber-400",
  },
];

export const socialPlatformMap = Object.fromEntries(
  socialPlatformConfigs.map((platform) => [platform.id, platform])
) as Record<SocialPlatformId, SocialPlatformConfig>;
