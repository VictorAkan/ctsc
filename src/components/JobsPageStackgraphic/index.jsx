import { Img, Text, Heading } from "./..";

export default function JobsPageStackgraphic({
    johnokon = "John Okon",
    graphic = "Graphic Designer", viewprofile = "View Profile",
    ...props
}) {
    return (
        <div {...props} className={`${props.className} h-[20.13rem] w-full md:h-auto relative`}>
            <Img
                src="images/img_rectangle_337.png"
                alt="graphic"
                className="h-[20.13rem] w-full rounded-[15px] object-cover"
            />
            <div className="absolute bottom-[0.63rem] left-[1.25rem] m-auto flex flex-col items-start"> 
            <Heading size="xs" as="h5" className="! font-['Inter']">
                {johnokon}
            </Heading>
                <Text size="s" as="p">
                    {graphic}
                </Text>
                <div className="ml-[0.38rem] flex rounded border border-solid border-[#ffffff] bg-[#00ff75] md:ml-0"> 
                <Text size="xs" as="p" className="!text-[0.50rem] !text-[#000000]">
                    {viewprofile}
                </Text>
                </div>
            </div>
        </div>
    );
}