

const Avatar = (props: { src: string, alt: string, size: number, title: string }) => {
    return (<>
        <div className="profile-img flex justify-center align-items-center">
            <img src={props.src} alt={props.alt} className={`profile-avatar   w-${props.size} h-${props.size}`}></img>
        </div>

        <a href="index.html" className=" mb-4 text-center">
            <h1 className="text-2xl font-bold m-0 font-raleway" >{props.title}</h1>
        </a>
    </>
    )
}


export default Avatar;