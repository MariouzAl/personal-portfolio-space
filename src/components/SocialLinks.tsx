import SocialLinkButton, { type SocialNetworkType }  from "./SocialLinkButton";


const socialLinks:Array<{socialNetwork:SocialNetworkType, linkTo:string}> =[
    {socialNetwork: "facebook", linkTo: "https://www.facebook.com/mriveradominguez1"},
    {socialNetwork: "instagram", linkTo: "https://www.instagram.com/marioalbertoriveradominguez/"},
    {socialNetwork: "linkedin", linkTo: "https://www.linkedin.com/in/mario-alberto-rivera-dominguez-94969726"},
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