import Image from 'next/image'
import { Fragment } from 'react'

const MeetupDetail = (props) => {
    console.log(props.image)
    return (
        <Fragment>
            {/* <img src={props.image} alt={props.title} /> */}
            <Image
                src={props.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt={props.title}
            />
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </Fragment>
    )
}

export default MeetupDetail


