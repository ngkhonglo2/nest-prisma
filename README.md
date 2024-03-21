## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

---

# Prisma

```bash
# Lệnh này sẽ tạo mới SQL migration file và chạy SQL migration
$ npx prisma migrate dev --name init

# Chạy lệnh này (nếu trong node_modules không có folder .prisma)
$ prisma generate

# Lệnh này sẽ thêm hoặc xóa (model or trường in model)
$ prisma db push
```
