import React from 'react';
import styles from './page.module.css'; // Adjust the path if needed
import Link from 'next/link';

const Page = () => {
  return (


<div className={styles.container}>
<div className={styles.content}>
  <h1>The beam page</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officia totam neque, maxime natus rem. Reiciendis odio, nihil doloribus, corporis nostrum quia quo iste esse nobis minima ipsum rem voluptate?</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique alias animi eveniet distinctio. Voluptatem id distinctio perferendis recusandae enim nam itaque sed incidunt esse nesciunt cumque, nisi officiis, placeat rem.</p>
  <Link className='links' href="/important"> <button className='btn' type='submit'>sUB bENAM</button></Link>
</div>
</div>
  );
}

export default Page;