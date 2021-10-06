import { resolve } from 'dns';
import React, { FC } from 'react';
import crypto from 'crypto';

const cryptoPass: FC = () => {
  return new Promise((resolve, reject) => {
    const salt = crypto.randomBytes(32).toString('base64');
    crypto.pbkdf2(password, salt, 100, 64, 'sha256', (err, hash) => {
      if (err) {
        reject(err);
      } else {
        resolve({
          hash: hash.toString('base64'),
          salt: salt,
        });
      }
    });
  });
};
