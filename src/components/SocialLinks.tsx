import SocialLinkButton, { type SocialNetworkType }  from "./SocialLinkButton";


const socialLinks:Array<{socialNetwork:SocialNetworkType, linkTo:string}> =[
    {socialNetwork: "twitter-x", linkTo: "https://twitter.com/"},
    {socialNetwork: "facebook", linkTo: "https://facebook.com/"},
    {socialNetwork: "skype", linkTo: "https://skype.com/"},
    {socialNetwork: "instagram", linkTo: "https://instagram.com/"},
    {socialNetwork: "linkedin", linkTo: "https://linkedin.com/"},
]

const SocialLinks = () => {
    return (
        <div className="mb-5 flex justify-center align-items-center social-links">
           {socialLinks.map((socialLink, index) => (
                <SocialLinkButton key={index} linkTo={socialLink.linkTo} socialNetwork={socialLink.socialNetwork}></SocialLinkButton>
            ))}
        </div>
    )

}




export default SocialLinks;