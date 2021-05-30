FROM mcr.microsoft.com/vscode/devcontainers/base:alpine

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.cloud.tencent.com/g' /etc/apk/repositories
RUN apk update
RUN apk add nodejs yarn

RUN yarn config set registry https://mirrors.huaweicloud.com/repository/npm/
RUN yarn global add eslint

RUN sed -i "s/ZSH_THEME=\"codespaces\"/ZSH_THEME=\"robbyrussell\"/" /root/.zshrc
RUN sed -i "s/plugins=(git)/plugins=(git yarn)/" /root/.zshrc

RUN sed -i -e "s/bin\/ash/bin\/zsh/" /etc/passwd
