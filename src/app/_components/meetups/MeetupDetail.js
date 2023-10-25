import Image from 'next/image'
import classes from './MeetupDetail.module.css';

const MeetupDetail = (props) => {
    return (
        <section className={classes.detail}>
            {/* <img src={props.image} alt={props.title} /> */}
            <Image
                src={props.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '80%', height: 'auto' }}
                alt={props.title}
            />
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </section>
    )
}

export default MeetupDetail


