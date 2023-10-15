import React from 'react'
import { getPaginatedPosts } from '../../services/posts.service';
import { useState } from 'react';
import { useEffect } from 'react';
import RoundedButton from '../RoundedButton/RoundedButton';

const Pagination = ({onClick}) => {  
  return (
    <RoundedButton onClick={onClick} label='Učitaj još'/>
  )
}

export default Pagination