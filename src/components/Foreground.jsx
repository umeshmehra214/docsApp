import React, {useRef, useState}  from 'react'
import Card from './Card'




const Foreground = () => {
    const ref = useRef(null);


    const data = [
        {
            desc: "Easily integrate our API with minimal setup. Built for speed, scalability, and simplicity across modern web projects.",
            fileSize: ".4mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green"},
        },
        {
            desc: "Configure once, deploy anywhere. Our tools help you stay focused on code, not configuration or environment headaches.",
            fileSize: ".13mb",
            close: false,
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "blue"},
        },
         {
            desc: "Clear documentation, powerful features, and community support make it easy to build production-ready apps in no time.",
            fileSize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
        },
        {
            desc: "Stay up-to-date with real-time updates, auto-sync features, and version control built right into the developer workflow.",
            fileSize: ".3mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Upload", tagColor: "green"},
        },
        
    ];
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-screen flex gap-8 flex-wrap p-5'>
    {data.map((item, index) => (
        <Card data={item} reference={ref}/>
    ))}
    </div>
  )
}

export default Foreground