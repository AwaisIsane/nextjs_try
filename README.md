this project is created using nextjs
"steps to run"
npm install to install all dependencies
npx prisma generate generate prisma client
start mongodb docker container by docker compose up -d
use "npm run dev" to start development server
i have used prisma as an orm and mongodb as database
.env file looks like this >> DATABASE_URL="mongodb://localhost:27017/assesment_db"
i have mostly implemented server side logic like add company,add user , list all users with nextjs server actions mostly in server_action.ts file .
use zod for form validations;
unable to complete delete api :( incomplete file under api directory
