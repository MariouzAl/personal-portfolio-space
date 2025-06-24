import PlayerCard from "@/components/Passions";
import SkillRadar from "@/components/SkillsRadar";

import { forwardRef } from "react";
import { useTranslation } from "react-i18next";


export type SkillType="Volea"|"Bandeja"|"Globo"|"Smash"|"Defensa"|"Ataque"|"Magia"|"Fisico"|"Condición"|"Velocidad"|"Toque"|"Posicionamiento"|"Servicio"

export type SkillData ={ skill:SkillType, value :number}

const PassionsSection = forwardRef<HTMLElement, { id: string }>((props, ref) => {

    const chartDataBase:SkillData[] = [
        { skill: "Volea", value: 63 },
        { skill: "Bandeja", value: 63 },
        { skill: "Globo", value: 45 },
        { skill: "Smash", value: 60 },
        { skill: "Defensa", value: 75 },
        { skill: "Ataque", value: 62 },
        { skill: "Magia", value: 30 },
        { skill: "Fisico", value: 74 },
        { skill: "Condición", value: 60 },
        { skill: "Velocidad", value: 85 },
        { skill: "Toque", value: 37 },
        { skill: "Posicionamiento", value: 40 },
        { skill: "Servicio", value: 70 },
    ]
    const chartDataGerry:SkillData[] = [
        { skill: "Volea", value: 70 },
        { skill: "Bandeja", value: 70},
        { skill: "Globo", value: 60},
        { skill: "Smash", value: 60},
        { skill: "Defensa", value: 90},
        { skill: "Ataque", value: 70},
        { skill: "Magia", value: 40 },
        { skill: "Fisico", value: 70 },
        { skill: "Condición", value: 60 },
        { skill: "Velocidad", value: 80},
        { skill: "Toque", value: 50 },
        { skill: "Posicionamiento", value: 70},
        { skill: "Servicio", value: 80 },
    ]
     const chartDataYaros:SkillData[] = [
        { skill: "Volea", value: 60 },
        { skill: "Bandeja", value: 70},
        { skill: "Globo", value: 45},
        { skill: "Smash", value: 68},
        { skill: "Defensa", value: 80},
        { skill: "Ataque", value: 65},
        { skill: "Magia", value: 20 },
        { skill: "Fisico", value: 80 },
        { skill: "Condición", value: 80 },
        { skill: "Velocidad", value: 80},
        { skill: "Toque", value: 45 },
        { skill: "Posicionamiento", value: 65},
        { skill: "Servicio", value: 45 },
    ]

const chartData =chartDataBase.map((data,index,lista)=>{
    return {...data,
        value: (parseInt(((chartDataGerry[index].value+chartDataYaros[index].value)/2).toFixed(0))),
        gerryValue : chartDataGerry[index].value, 
        yarosValue : chartDataYaros[index].value}
})

    const { t } = useTranslation();


    return (
        <section id={props.id} ref={ref} className="text-[var(--default-color)] bg-[var(--background-color)] py-14 px-0 overflow-clip relative">
            <div className="w-full max-w-[540px] px-[calc(var(--bs-gutter-x)*.5)] ml-auto mr-auto pb-[30px] md:max-w-[1320px]  ">
                <h2 className="emphasis-title">{t('my-passions.title')}</h2>
                <p>{t('my-passions.description')}</p>
            </div>
            <div className="w-full">
                <h3 className="w-full max-w-[540px] px-[calc(var(--bs-gutter-x)*.5)] ml-auto mr-auto pb-[30px] md:max-w-[1320px] ">Padel</h3>
                <div className="bg-[url(/my_passions/playing2.jpeg)] bg-cover bg-center ">
                    <div className="backdrop-blur-xs bg-blue-600/2">
                        <div className="px-4 relative">
                            <img className="
                            z-20
                            mix-blend-overlay
                            sm:mix-blend-normal
                        absolute sm:z-10  
                        -right-30 bottom-0 
                        h-90 w-80 
                        sm:h-80 sm:w-80 sm:right-[-116px]
                        md:h-90 md:w-90 md:-right-30
                        object-cover object-top"
                                src="./my_passions/playing1.png" alt="" />
                            <PlayerCard 
                            skills={chartData}
                            className=" relative -top-12 z-10 
                            left-1
                            sm:left-0
                    "/>
                            <SkillRadar chartData={chartData}
                            className="sm:absolute  sm:inset-1/2 
                               hidden
                               sm:-translate-x-1/2  sm:-translate-y-1/2 
                                sm:h-[80%] sm:w-[95%]         
                                sm:backdrop-blur-xs sm:bg-black/70 
                                sm:justify-end
                                sm:flex
                                sm:pr-30
                                lg:pr-40
                               "></SkillRadar>
                            <blockquote>
                                <span className="text-cyan-50 hidden
                            xl:block xl:absolute xl:top-[35%] xl:w-2xs xl:italic xl:text-2xl xl:font-raleway xl:font-black xl:left-[28%] xl:mx-4
                            " >"Paso a paso <br />...Un golpe, un punto, un juego."</span>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white px-10 ">
                <div className="sm:hidden">
                    <h4 className="mt-10">{t("my-passions.my-padel-skils.title")}</h4>
                    <SkillRadar chartData={chartData} className="
                                h-[250px]
                                mx-auto 
                                flex
                                "></SkillRadar>
                </div>
            </div>
            <div className="container mt-10 px-6">
                <p className="mb-5  font-raleway text-gray-500">
                    "Me considero un jugador bastante sobrio y de mucha entrega fisica. No dejaré de correr hasta que la bola de dos botes"
                </p>
                <div className="flex flex-col sm:flex-row sm:gap-4 ">
                    <ul className="flex-1/2">
                        <li className="font-semibold">Posición: </li>
                        <ul className="  pl-6">
                            <li><strong>REVÉS</strong> ocasionalmente <strong>DRIVE</strong>.</li>
                        </ul>
                        <li className="font-semibold">Categoría: </li>
                        <ul className="  pl-6">
                            <li>5ª Categoria.</li>
                        </ul>
                        <li className="font-semibold">Tiro Favorito:</li>
                        <ul className="  pl-6">
                            <li>La <strong>VIBORA</strong> al centro. </li>
                        </ul>
                        <li className="font-semibold">Mayor fortaleza:</li>
                        <ul className="  pl-6">
                            <li>Mi potencia y velocidad de piernas.</li>
                        </ul>
                        <li className="font-semibold">Jugadores profesionales a los que admiro:</li>
                        <ul className="  pl-6">
                            <li>Federico Chingotto y Alejandro Galán.</li>
                        </ul>

                    </ul>


                    <ul className="flex-1/2">
                        <li className="font-semibold">Máximo Logro:</li>
                        <ul className="  pl-6">
                            <li>2 veces finalista de 5ª categoria en torneos locales.</li>
                        </ul>
                        <li className="font-semibold">Club en el que juego:</li>
                        <ul className="  pl-6">
                            <li>X3 Padel Club.</li>
                        </ul>
                        <li className="font-semibold">Mi top 3 de Palas:</li>
                        <ol className=" list-decimal pl-10">
                            <li className="">XCALION H1-Max <span className="font-light text-black/50"> {"<"}actualmente juego con ella{">"}</span></li>
                            <li className="">Mayan Kukulkan 2024</li>
                            <li className="">Nox AT-10 Genius 2025</li>
                        </ol>
                        <li className="font-semibold">¿Das clases?</li>
                        <ul className="  pl-6">
                            <li>Estoy armando un grupo</li>
                        </ul>
                    </ul>

                </div>

            </div>
        </section>
    )
})

export default PassionsSection;