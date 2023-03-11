# UTTG web app
Hệ thông quản lý bệnh nhân UTTG

### Công nghệ

- [ReactJs] xây dựng web app
- [ExpressJs] xây dựng APIs
- [CrateDB] cơ sở dữ liệu

### Chạy dự án trên local

- Clone dự án và cài đặt package


```sh
// Bước 1: clone code dự án
git clone https://vcnttgitlab.ap.ngrok.io/minhdh/uttg_soft.git
// Bước 2: di chuyển vào thư mục làm việc
cd uttg_soft
// Bước 3: cài đặt package thư mục gốc
npm install
// Bước 4: cài đặt backend và client package
npm run install-all

// Bước 5: chạy ứng dụng
npm run start
```

- local app: http://localhost:4000
- local api: http://localhost:4001


Username: admin
Password: Abcd@1234

### Các scripts 
```sh
"scripts": {
    "start": "concurrently \"cd backend && npm run start-dev\" \"cd client && npm run start\"",
    "start-product": "concurrently \"cd backend && npm run start-dev\" \"cd client && npm run start-https\"",
    "install-all": "concurrently \"cd backend && npm install\" \"cd client && npm install\"",
    "format": "concurrently \"cd backend && npm run format\" \"cd client && npm run format\"",
    "generate": "plop",
    "docker-compose": "docker-compose up -d"
},
// Khởi chạy cả backend và client
npm run start
//  Khởi chạy cả backend và client(https)
npm run start-product
// cài package cho backend và client
npm run install-all
// format code cho backend và client 
npm run format 
// generate code component, redux, api (đang phát triển)
npm run generate
```

### Các bước làm việc với git
#### Khi triển khai 1 task
```
- Step 1: Checkout sang nhánh main và lấy code mới nhất
Command: git checkout main
- Step 2: Lấy code mới nhât từ nhánh main
Command: git pull origin main
- Step 3: Tạo ra 1 nhánh mới từ nhánh main. Theo quy tắc: feature/tên_người_lam/tiêu_đề_task
Ví dụ: feature/hoplb/show-config-data
Command: git checkout -b feature/hoplb/show-config-data
- Step 4 Tiến hành viết code cho task của mình
Step 5: Đẩy code lên nhánh mới vừa rồi
Format lại toàn bộ code
Command: npm run format
Kiểm tra code đã thay đổi gì chưa
Command: git status
Lưu toàn bộ code vào local
Command: git add .
Ghi nội dung đã làm cho đoạn code đã sửa
Command: git commit -m"Show config data in admin page"
Lấy code mới nhất từ nhánh main về
Command: git pull origin main
Nếu có conflict tiến hành sửa conflict và chạy  git add, git commit lại
Đẩy code lên nhánh hiện tại
Command: git push origin feature/hoplb/show-config-data
Step 6: Tạo pull request
Merge code từ nhánh hiện tại vào nhánh main
```
#### Một số lệnh git khác hay dùng
- git stash: Khi đã sửa file và muốn lấy code mới nhất, có 2 cách để làm. Một là git add ., git commit để lưu code đã làm. Hai là dùng git stash để bỏ qua những file đã sửa và lưu tạm thời, rồi git pull để lấy code về. Để lấy code đã sửa trước đó chạy git stash pop.
- git cherry-pick
- git reset --hard ID_COMMIT
- git branch 
- git log
### Cấu trúc dự án
#### Thư mục gốc
Chứa các script để chạy dự án
#### Thư mục backend
- Chứa code backend
- Link APIs tài liệu: http://localhost:4001/docs
#### Thư mục client
- Chứa code client


### Quy tắc khi viết code
```
Sau đây là một số quy chuẩn đặt tên thường dùng trong dự án:
- Tên lớp đặt theo PascalCase, ví dụ: UserClass, CategoryClass…
- Tên hàm và phương thức sử dụng camelCase, ví dụ getUser, getCategory…
- Tên biến cũng sử dụng camelCase loginUser, categoryList…
- Tên hằng số thì đặc biệt, viết hoa hết và cách nhau bởi dấu gạch dưới DISCOUNT_PERCENT, LIMIT_RATE…
- Tên bảng, tên cột trong Database sử dụng underscore và sử dụng danh từ số nhiều, ví dụ bảng oauth_clients, oauth_refresh_tokens.

```


