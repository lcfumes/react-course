FROM ubuntu:15.10
MAINTAINER Luiz Fumes <luiz.fumes@dafiti.com.br>

#Update and Intalation Ubuntu Packages
RUN apt-get update
RUN apt-get -y install npm
RUN apt-get -y install nginx

ADD containers/web/nginx.conf /etc/nginx/nginx.conf
ADD containers/web/catalog.pim.conf /etc/nginx/sites-available/catalog.pim.conf
RUN ln -s /etc/nginx/sites-available/catalog.pim.conf /etc/nginx/sites-enabled/catalog.pim.conf
RUN ln -s /usr/bin/nodejs /usr/bin/node

WORKDIR /srv/catalog-pim
ADD . /srv/catalog-pim

#Commands
CMD service nginx start

#Port
EXPOSE 80
