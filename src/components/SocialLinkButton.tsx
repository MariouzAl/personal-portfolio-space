
export type SocialNetworkType = 
    | "twitter-x"
    | "instagram"
    | "facebook"
    | "linkedin"
    | "github"
    |"skype";


const SocialLinkButton = (props : {linkTo:string , socialNetwork:SocialNetworkType })=>{

    return <a href={props.linkTo} target="_blank" ><i className={`bi bi-${props.socialNetwork}`}></i></a>
}

export default SocialLinkButton;