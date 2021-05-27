FROM golang:1.16-alpine3.13

ADD . /golang

WORKDIR /golang

COPY main.go .

RUN go build main.go

CMD [ "./main" ]