import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import type { SkillData } from "@/sections/PassionsSection";


const SkillRadar = ({ className ,chartData}: { className: string, chartData:SkillData[] }) => {



    const chartConfig = {
        skill: {
            label: "skill",
            color: "var(--color-cyan-500)",
        },
        gerryValue: {
            label: "Gerry Skill",
            color: "var(--color-amber-500)",
        },
        yarosValue: {
            label: "Yaros Skill",
            color: "var(--color-blue-900)",
        },
    } satisfies ChartConfig

console.log(chartData)

    return (
        <div className={`${className}`}>
            <ChartContainer
                config={chartConfig}
                className="sm:mx-10 mx-auto aspect-square max-h-[250px]"
            >
                <RadarChart data={chartData}>
                    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                    <PolarAngleAxis dataKey="skill"
                        tickFormatter={(val: string) => val.toUpperCase().slice(0, 3)}
                        tickCount={6} // Opcional: para definir cuántas marcas de escala quieres (0, 20, 40, 60, 80, 100)
                    />
                    <PolarRadiusAxis
                        angle={90} // La posición del eje vertical (puedes ajustarlo)
                        domain={[0, 100]} // <-- ¡Aquí estableces el valor máximo de 100!
                        tickCount={6} // Opcional: para definir cuántas marcas de escala quieres (0, 20, 40, 60, 80, 100)
                        tickFormatter={(value) => `${value}`} // Formatea las etiquetas del tick
                        tick={{ fill: 'grey', fontSize: 10 }} // Estilo de los números del eje
                    />
                    <PolarGrid />
                  {/*   <Radar
                        dataKey="gerryValue"
                        fill="var(--color-gerryValue)"
                        fillOpacity={0.4}
                    />
                    <Radar
                        dataKey="yarosValue"
                        fill="var(--color-yarosValue)"
                        fillOpacity={0.4}
                    /> */}
                    <Radar
                        dataKey="value"
                        fill="var(--color-skill)"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </ChartContainer>
        </div>)
}





export default SkillRadar 