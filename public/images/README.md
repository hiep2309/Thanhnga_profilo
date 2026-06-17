# Hướng dẫn tải ảnh lên website

Thư mục `public/images/` dùng để lưu ảnh tĩnh. Bạn chỉ cần **copy ảnh vào đúng thư mục** — không cần sửa code nếu giữ đúng tên file.

## Cấu trúc thư mục

```
public/images/
├── profile/
│   └── avatar.jpg          ← Ảnh đại diện (Hero)
├── gallery/
│   ├── 01.jpg … 12.jpg     ← Ảnh gallery
├── memories/
│   └── 01.jpg … 04.jpg     ← Ảnh kỷ niệm
└── about/
    └── illustration.svg    ← (tuỳ chọn) Minh hoạ About Me
```

## Cách thêm / thay ảnh

1. Chuẩn bị ảnh định dạng **JPG, PNG hoặc WEBP**
2. Đặt tên file **đúng như bảng bên dưới**
3. Copy vào thư mục tương ứng trong `public/images/`
4. Refresh trình duyệt (Ctrl + F5)

## Bảng tên file

| Vị trí hiển thị | Thư mục | Tên file gợi ý |
|---|---|---|
| Ảnh đại diện | `profile/` | `avatar.jpg` |
| Gallery ảnh 1–12 | `gallery/` | `01.jpg` … `12.jpg` |
| Kỷ niệm 1–4 | `memories/` | `01.jpg` … `04.jpg` |

## Gợi ý kích thước

| Loại | Kích thước gợi ý |
|---|---|
| Avatar | 400×400 px (vuông) |
| Gallery | 800×1000 px trở lên |
| Memories | 400×400 px (thumbnail) |

## Đổi tên file khác?

Mở `lib/data.ts` và sửa đường dẫn, ví dụ:

```ts
avatar: "/images/profile/ten-anh-cua-ban.jpg"
src: "/images/gallery/anh-cafe.jpg"
```

## Lưu ý

- Đường dẫn trong code bắt đầu bằng `/images/...` (không cần ghi `public/`)
- Ảnh placeholder hiện tại là file `.svg` — thay bằng ảnh thật và cập nhật `lib/data.ts` nếu đổi đuôi file
- Nén ảnh trước khi upload để website load nhanh hơn
