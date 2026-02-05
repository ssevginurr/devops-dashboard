FROM node:18-alpine

# Klasör oluştur
WORKDIR /app

# Dosyaları kopyala
COPY package.json .

# Modülleri yükle
RUN npm install

# Kalan her şeyi kopyala
COPY . .

# Başlat
CMD ["node", "server.js"]