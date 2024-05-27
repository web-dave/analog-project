// /server/routes/v1/users/[id].get.ts
import { defineEventHandler, getRouterParam, createError } from 'h3';
import { users as apiUser } from '../users';
import { IUser } from 'src/app/pages/users.page';

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  const users = apiUser;
  const user: IUser | undefined = users.find((u) => u.id === id);
  if (!user) {
    throw createError({
      statusCode: 404,
      statusMessage: 'No User Found',
    });
  }
  return user;
});
