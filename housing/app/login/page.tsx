"use client"

import React, { useState } from 'react';


import { useAppSelector, useAppDispatch, useAppStore } from '@/lib/hooks';
import { updateFloor ,updateUnit} from '@/lib/features/bookSlice';

export default function MyComponent() {

    const store = useAppStore();
    const floor= useAppSelector((state) => state.booking.floor);
    const unit = useAppSelector((state)=> state.booking.unit)
    const dispatch = useAppDispatch();
  

    dispatch(updateFloor(5))
    dispatch(updateUnit("my man"))

  
    return (<div>
        <input type="text" placeholder='email' />
        <input type="text" placeholder='password' />
        <button>Login</button>
    </div>)
  }
  