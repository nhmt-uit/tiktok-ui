import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/083bdd98191f72128eebdbcca718c29f~c5_100x100.jpeg?x-expires=1669795200&x-signature=8zPEvYRz9bXfg0fSSRb7%2FYKLLvE%3D"
        alt="Hoaa"
      />
      <div classNames={cx('info')}>
        <p className={cx('name')}>
          <span>Đào Lê Phương Hoa</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}> hoaa.hanassii </span>
      </div>
    </div>
  );
}

export default AccountItem;
