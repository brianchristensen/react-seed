yarn install
yarn build
docker build -t brian-react-starter .
docker run -p 80:80 -d brian-react-starter