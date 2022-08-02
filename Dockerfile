# FROM indica a partir de qual imagem estamos montando nosso container
FROM node:16
# WORKDIR define o diretório de trabalho dentro do container para executar a aplicação. Qualquer comando RUN, CMD, ADD, COPY ou ENTRYPOINT será executado no diretório de trabalho especificado pelo comando WORKDIR.
WORKDIR /app
# COPY literalmente copia o arquivo package*.json para dentro do WORKDIR
COPY package*.json ./
# RUN executa uma linha de comando no terminal enquanto o container está sendo criado, no nosso caso ele vai instalar as dependencias do package.json
RUN npm install

COPY ./src /app/src/
# EXPOSE definimos a porta em que nossa aplicação vai rodar.
EXPOSE 3000
#ENTRYPOINT
ENTRYPOINT [ "npm" ]
# CMD é o comando que vai ser executado depois que o container for inicializado.
CMD ["run", "dev"]