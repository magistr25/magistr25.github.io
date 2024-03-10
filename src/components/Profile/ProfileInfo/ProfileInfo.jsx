import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.wallpaper} src = 'https://avatars.mds.yandex.net/i?id=847d069a6b20589b3c9361f07feea6c0b8855d95-8184297-images-thumbs&n=13' alt = ''/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>


        </div>
    )
}

export  default ProfileInfo