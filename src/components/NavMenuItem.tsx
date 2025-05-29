
const NavMenuItem = (props: {isActive:boolean, onClick:()=>void,  id:string, name: string; path: string ,icon:string }) => {
    return (
        <li key={props.id} className={`group ${props.isActive? "activated" : "" }`}>
        <a
            onClick={(e)=>{e.preventDefault();props.onClick()}}
            href={props.path}
            className=" flex items-center text-gray-500 hover:text-white group-[.activated]:text-white"
        >
            <i
                className={`bi ${props.icon} mr-2.5 text-xl group-hover:text-cyan-500 group-[.activated]:text-cyan-500` }
            ></i>
            {props.name}
        </a>
    </li>
    );
}
export default NavMenuItem;