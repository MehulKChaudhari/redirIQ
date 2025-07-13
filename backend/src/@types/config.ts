export type AccessTooken = {
  name: string;
  options: {
    domain: string;
    maxAge: number;
    httpOnly: boolean;
    sameSite: 'strict';
    secure: boolean;
  };
};
