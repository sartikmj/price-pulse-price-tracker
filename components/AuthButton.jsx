"use client"

import React from 'react'
import { Button } from "@/components/ui/button";
import { LogIn, LogOut } from 'lucide-react';
import AuthModal from './AuthModal';
import { useState } from 'react';
import { singOut } from '@/app/actions';

const AuthButton = ({ user }) => {

    const [showAuthModal, setshowAuthModal] = useState(false)

    if(user){
      return (
        <form action={singOut}>
          <Button variant="default" size="sm" type="submit" 
          className="bg-orange-500 hover:bg-orange-600 gap-2 py-5 text-lg">
            <LogOut className='w-4 h-4' />
            Sign Out
          </Button>
        </form>
      )
    }

  return (
    <>
        <Button 
        onClick={() => setshowAuthModal(true)}
        variant="default" size="sm" className="bg-orange-500 hover:bg-orange-600 gap-2 py-5 text-lg">
            <LogIn className="h-4 w-4" />
            Sign In
          </Button>

          <AuthModal
          isOpen={showAuthModal}
          onClose={() => setshowAuthModal(false)}
          >

          </AuthModal>
    </>
  )
}

export default AuthButton