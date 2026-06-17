import { localImages } from "./images";

export const profile = {
  name: "Nguyễn Thị Thanh Ngà",
  quote: "Oncen you choose hope , anything is possible ✨",
  tagline: "Enjoy every moment",
  avatar: localImages.profile.avatar,
  intro: [
    { icon: "graduation", text: "Oversea-student in Korea" },
    { icon: "coffee", text: "Coffee Lover" },
    { icon: "laptop", text: "Passionate about technology" },
    { icon: "heart", text: "Enjoy every moment" },
  ],
};

export { socialPlatformConfigs, type SocialPlatformId } from "./social-config";

export const about = {
  description:
    "Xin chào! Mình là Ngà — một du học sinh tại Hàn Quốc. Mình yêu những buổi sáng với ly cà phê ấm, những chuyến đi ngẫu hứng và khoảnh khắc nhỏ bé khiến cuộc sống thêm đẹp. Đây là nơi mình lưu giữ những kỷ niệm, bức ảnh yêu thích và những điều khiến mình mỉm cười mỗi ngày.",
  interests: [
    { label: "Technology", emoji: "💻" },
    { label: "Photography", emoji: "📷" },
    { label: "Travel", emoji: "✈️" },
    { label: "Coffee", emoji: "☕" },
  ],
};

export type GalleryCategory = "all" | "people" | "places" | "food" | "life";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
  aspect: "square" | "portrait" | "landscape";
};

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: localImages.gallery(1),
    alt: "Cherry blossoms in spring",
    category: "places",
    aspect: "portrait",
  },
  {
    id: "2",
    src: localImages.gallery(2),
    alt: "Morning coffee",
    category: "food",
    aspect: "square",
  },
  {
    id: "3",
    src: localImages.gallery(3),
    alt: "Mountain landscape",
    category: "places",
    aspect: "landscape",
  },
  {
    id: "4",
    src: localImages.gallery(4),
    alt: "Cozy cafe moment",
    category: "life",
    aspect: "portrait",
  },
  {
    id: "5",
    src: localImages.gallery(5),
    alt: "Nature walk",
    category: "places",
    aspect: "square",
  },
  {
    id: "6",
    src: localImages.gallery(6),
    alt: "Delicious food",
    category: "food",
    aspect: "landscape",
  },
  {
    id: "7",
    src: localImages.gallery(7),
    alt: "Portrait in soft light",
    category: "people",
    aspect: "portrait",
  },
  {
    id: "8",
    src: localImages.gallery(8),
    alt: "Lake at sunset",
    category: "places",
    aspect: "square",
  },
  {
    id: "9",
    src: localImages.gallery(9),
    alt: "Fresh salad bowl",
    category: "food",
    aspect: "portrait",
  },
  {
    id: "10",
    src: localImages.gallery(10),
    alt: "Travel adventure",
    category: "life",
    aspect: "landscape",
  },
  {
    id: "11",
    src: localImages.gallery(11),
    alt: "Soft portrait",
    category: "people",
    aspect: "portrait",
  },
  {
    id: "12",
    src: localImages.gallery(12),
    alt: "Everyday life moment",
    category: "life",
    aspect: "square",
  },
];

export const galleryFilters: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "people", label: "People" },
  { id: "places", label: "Places" },
  { id: "food", label: "Food" },
  { id: "life", label: "Life" },
];

export type Memory = {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
};

export const memories: Memory[] = [
  {
    id: "1",
    title: "Spring in Daejeon 🌸",
    date: "12 Mar 2024",
    description: "Hoa anh đào nở rộ khắp thành phố, mùa xuân thật yên bình.",
    image: localImages.memory(1),
  },
  {
    id: "2",
    title: "Favorite Cafe ☕",
    date: "28 Feb 2024",
    description: "Góc quán nhỏ với ly latte và cuốn sách yêu thích.",
    image: localImages.memory(2),
  },
  {
    id: "3",
    title: "Busan Trip 🌊",
    date: "15 Jan 2024",
    description: "Biển xanh, gió mát và những khoảnh khắc không quên.",
    image: localImages.memory(3),
  },
  {
    id: "4",
    title: "Golden Hour Walk 🌅",
    date: "5 Dec 2023",
    description: "Đi dạo lúc hoàng hôn — cách tốt nhất để kết thúc một ngày.",
    image: localImages.memory(4),
  },
];

export type FavoriteCategory = {
  id: string;
  title: string;
  icon: "music" | "food" | "travel" | "books";
  items: string[];
};

export const favorites: FavoriteCategory[] = [
  {
    id: "music",
    title: "Music",
    icon: "music",
    items: ["IU", "NewJeans", "AKMU"],
  },
  {
    id: "food",
    title: "Food",
    icon: "food",
    items: ["Tteokbokki", "Matcha Latte", "Bingsu"],
  },
  {
    id: "travel",
    title: "Travel",
    icon: "travel",
    items: ["Jeju Island", "Busan", "Seoul"],
  },
  {
    id: "books",
    title: "Books",
    icon: "books",
    items: ["Kim Jiyoung", "Norwegian Wood", "The Alchemist"],
  },
];


export const navItems = [
  { id: "home", label: "Home", href: "#home" },
  { id: "gallery", label: "Gallery", href: "#gallery" },
  { id: "memories", label: "Memories", href: "#memories" },
  { id: "contact", label: "Contact", href: "#contact" },
];
