
export type SocialNetworkType = 
    | "twitter-x"
    | "instagram"
    | "facebook"
    | "linkedin"
    | "github"
    |"skype";


const SocialLinkButton = (props : {linkTo:string , socialNetwork:SocialNetworkType })=>{

    return <a href={props.linkTo} ><i className={`bi bi-${props.socialNetwork}`}></i></a>
}

export default SocialLinkButton;