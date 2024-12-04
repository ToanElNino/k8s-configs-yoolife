# Sử dụng Node.js 18 Alpine
FROM node:18-alpine

# Thiết lập thư mục làm việc
WORKDIR /usr/src/app

# Copy package.json và cài đặt các dependencies
COPY package*.json ./
RUN npm install

# Copy mã nguồn ứng dụng vào container
COPY . .

# Mở port cho backend
EXPOSE 3001

# Chạy server
CMD ["node", "index.js"]
