import type { SkillData } from "@/sections/PassionsSection";

const Passions = ({className, skills}:{className:string, skills:SkillData[]}) => {

    return (
        <div className={`flip-card w-64 h-80 perspective-1000 cursor-pointer ${className}`}>
            <div className="flip-card-inner w-full h-full text-center ">
                <div className="flip-card-front">
                    <div className={`relative w-[242px] py-14 px-4 h-[390px] bg-[url(/my_passions/placa.svg)] bg-cover flex flex-col`}>
                        <div className='flex-1/2  flex-row shrink-0'>
                            <img className="absolute top-14 right-2.5 h-44 sepia-40" src="./my_passions/me_padel_profile.png" alt="" />
                            <div className='flex flex-col absolute top-25 left-8 text-center'>
                                <span className='inline-block text-[#724b00]  font-roboto border-b border-solid border-[#724b00] text-center'  >REV</span>
                                <span className='inline-block text-4xl border-b border-solid border-[#724b00] text-center' >🇲🇽</span>
                                <span className='inline-block text-center py-1' ><img className='h-7' src="./my_passions/x3_logo.png" alt="" /></span>
                            </div>
                        </div>
                        <div className='flex-1/2 flex-col'>
                            <h2 className="font-raleway text-center mt-4 text-[#724b00]/80 text-2xl uppercase
                border-b border-solid border-[#724b00] pb-1.5 mb-1 mix-blend-hard-light
                ">Mario Rivera</h2>
                            <div className="grid grid-cols-2 gap-x-3  w-4/5 mx-auto text-[13px] uppercase">
                                <div><strong>{skills.find(val=>val.skill==="Volea")?.value}</strong> Vol</div>
                                <div><strong>{skills.find(val=>val.skill==="Defensa")?.value}</strong> Def</div>
                                <div><strong>{skills.find(val=>val.skill==="Bandeja")?.value}</strong> Ban</div>
                                <div><strong>{skills.find(val=>val.skill==="Ataque")?.value}</strong> Ata</div>
                                <div><strong>{skills.find(val=>val.skill==="Globo")?.value}</strong> Glo</div>
                                <div><strong>{skills.find(val=>val.skill==="Magia")?.value}</strong> Mag</div>
                                <div><strong>{skills.find(val=>val.skill==="Smash")?.value}</strong> Sma</div>
                                <div><strong>{skills.find(val=>val.skill==="Fisico")?.value}</strong> Fis</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flip-card-back">
                    <div className={`relative w-[242px] py-14 px-4 h-[390px] bg-[url(/my_passions/placa.svg)] bg-cover flex flex-col items-center`}>
                        <div>
                            <img src="./my_passions/pala_xcalion.png" className="size-30 object-contain" />
                            <p className="font-roboto uppercase font-bold text-sm text-black/80" >XCalion H1-Max </p>
                        </div>
                        <div className="flex flex-col mb-5 text-black/80">
                            <h2 className="font-raleway text-center mt-1 
                             text-xl font-extrabold uppercase pb-0 mb-0">Mario Rivera</h2>
                            <p className="text-sm">173 cm 75 kg Age: 38</p>
                            <p className="text-sm">Tiro favorito <strong>Vívora</strong></p>
                        </div>
                        <div className=" flex-row flex items-center w-full justify-around">
                            <div className="flex text-2xl text-[#724b00]">
                                <div className=" inline-block transform scale-x-[-1]">
                                    <i className=" bi bi-hand-index-thumb"></i>
                                </div>
                                <i className="bi bi-hand-index-thumb-fill "></i>
                            </div>
                            <div className="flex flex-col text-center font-roboto">
                                <p className="text-xs text-black/60">CAT</p>
                                <p className="text-3xl font-extrabold text-[#724b00]" >5<span className="align-super text-sm leading-none">a</span></p>
                            </div>
                            <span className='flex text-center py-1' ><img className='h-7' src="./my_passions/x3_logo.png" alt="" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}


export default Passions;