"use client";

import {type FC} from 'react';
import {IUserProfile} from "@/types/user";

interface AccountProfileProps {
    btnTitle: string;
    user: IUserProfile;
}

const AccountProfile: FC<AccountProfileProps> = ({user, btnTitle}) => {
    return (
        <div>

        </div>
    );
};

export default AccountProfile;
