import { Action } from 'routing-controllers';
import { Exception } from '../modules/exception/Exception';
import { ErrorCode } from '../modules/exception/ErrorCode';
import { ErrorMessages } from '../modules/exception/ErrorMessages';

export const currentUserChecker = (action: Action): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const user = action.request.user;
    if(!user) resolve(user);
    if (!user.isVerified)
      return reject(new Exception(ErrorCode.Unauthenticated, { message: ErrorMessages.UserIsNotVerified }));
    resolve(user);
  });
};
