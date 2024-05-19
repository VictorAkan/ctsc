import { Img, Text } from "./..";


export default function JobsPageTwoCategory({
    designandtext,
    skillsimage,
    skillscountertext,
    starimage,
    ratingtext,
    designandimage,
    ...props
}) {
    return (<div {...props} className={`${props.className} flex justify-center hover:scale-105 transition duration-300 ease-in-out items-center w-full bg-[#253451] cursor-pointer rounded-[17px] hover: shadow-[-5px_6px_27px_0px_#25345142]`}>
        <div className="flex w-full items-center justify-between gap-[1.25rem]">
            <div className="mb-[0.25rem] flex w-[60%] flex-col items-start gap-[1.13rem] self-end">
                {!!designandtext ? (
                    <Text as="p" className="!font-['Inter'] !font-medium">
                        {designandtext}
                    </Text>
                ) : null}
                <div className="flex w-[88%] flex-wrap items-end md:w-full">
                    {!!skillsimage ? <Img src={skillsimage} alt="457_skills" className="h-[1.63rem]" /> : null}
                    {!!skillscountertext ? (
                        <Text size="lg" as="p" className="!font-['Inter'] !text-[0.75rem]">
                            {skillscountertext}
                        </Text>
                    ) : null}
                    {!!starimage ? (
                        <img src={starimage} alt="457_skills" className="ml-[2.00rem] h-[1.25rem] w-[1.25rem]" />
                    ) : null}
                    {!!ratingtext ? (
                        <Text size="lg" as="p" className="!font-['Inter'] !text-[0.75rem]">
                            {ratingtext}
                        </Text>
                    ) : null}
                </div>
            </div>
            {!!designandimage ? (
                <Img src={designandimage} alt="design_and" className="h-[5.44rem] w-[28%] object-cover" />
            ) : null}
        </div>
    </div>
    );
}