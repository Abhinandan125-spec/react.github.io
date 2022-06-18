import React from 'react'
import styles from '../styles/Services.module.css'
import Image from 'next/image'



function Services({services}) {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>what we can do ?</h1>
        <h1 className={styles.subtitle}>Service we can help out with</h1>
        <div className={styles.services}>
            {services.map( (service)=> (
                    
                        <a  key={service.id} href={`/products/${service.name}`}>
                         <div className={styles.service}>
                         <div className={styles.catInfo}>{service.desc}</div>
                           <span className={styles.cat}>{service.title}</span>
                             <div className={styles.media}>
                                 {service.video ?(
                                     <video
                                     src={`/img/${service.video}`}
                                     autoPlay
                                     muted
                                     loop
                                     className={styles.video}
                                     />
                                 ) :(
                                     <Image
                                     src ={`/img/${service.photo}`}
                                     width="100%"
                                     height="100%"
                                     layout="responsive"
                                     objectFit="cover"
                                     alt="Not found"
                                     />
                                 )}
                                 
                             </div>

                         </div>
                        </a>
                    
            ))}
        </div>
        </div>
  )
}

export default Services