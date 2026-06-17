/**
 * Đường dẫn ảnh local trong thư mục public/images/
 * Thay file ảnh tại đúng thư mục — đổi .svg thành .jpg/.png khi upload ảnh thật
 */
export const localImages = {
  profile: {
    /** Ảnh đại diện — đặt tại public/images/profile/avatar.jpg */
    avatar: "/images/profile/avatar.png",
  },
  gallery: (index: number) =>
    `/images/gallery/${String(index).padStart(2, "0")}.jpg`,
  memory: (index: number) =>
    `/images/memories/${String(index).padStart(2, "0")}.jpg`,
} as const;
