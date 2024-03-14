import Image from 'next/image';

const LazyImage = (props) => {
    return (
        <Image
            draggable="false"
            alt=''
            src={props.src}
            width={500}
            height={500}
            loading="lazy"
            onLoad={props.onLoad}
            className={props.className}
            onClick={props.onClick}
        />
    );
}

export default LazyImage;