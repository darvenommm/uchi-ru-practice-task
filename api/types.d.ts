import { UserEntity } from 'src/modules/auth';

declare global {
  namespace Express {
    interface Request {
      user: null | UserEntity;
    }
  }
}
