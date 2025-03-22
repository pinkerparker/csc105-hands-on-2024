import React from 'react'
import Navbar from '../components/Navbar'
import { useParams, useSearchParams } from 'react-router-dom';

function FavoriteDetailPage() {
  const { id } = useParams();
  const [SearchParams] = useSearchParams();

    return (
    <div>
      <Navbar/>
      <p>Your favourite post is {SearchParams.get("q")}. Post ID is {id}. Size is {SearchParams.get("size")}.</p>
    </div>
  )
}

export default FavoriteDetailPage
