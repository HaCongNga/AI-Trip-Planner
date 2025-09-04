'use client'
import React, { useEffect, useState } from 'react'
import Header from './_components/Header';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { CreateNewUser } from '@/convex/user';
import { UserDetailContext } from '@/context/UserDetailContext';

function Provider({children}: Readonly<{
  children: React.ReactNode;
}>) {

  const CreateUser = useMutation(api.user.CreateNewUser)

  const {user} = useUser();
  const [userDetail, setUserDetail] = useState<any>()

  useEffect(() => {
    user && CreateNewUser();
  }, [user]);

  const CreateNewUser = async () => {
    if (user) {
      // Save New User if Not Exist
      const result = await CreateUser({
        email: user?.primaryEmailAddress?.emailAddress ?? '',
        name: user?.fullName ?? '',
        imageUrl: user?.imageUrl ?? '',
      });
    }

    setUserDetail(user);
  }


  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <div>
          <Header/>
          {children}
      </div>
    </UserDetailContext.Provider>
  )
}

export default Provider

export const useUserDetail = () => React.useContext(UserDetailContext);