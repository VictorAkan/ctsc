import { Img, Button, Text, Heading } from "./..";

export default function JobsPageOneRowdescription({ username = "John Okon",
    description = "Description",
    description1 = (
        <>
            Hello, am John am a designer and based
            <br />
            in uyo. i can design flyers and logo for your <br />
            brand. I can handle your designs with great
            <br />
            creativity.
        </>
    ),
    workexperience = "Work Experience:",
    brandlogo = "Brand logo design ",
    jobtitle = "Freelance designer",
    hireMe = "Hire me",
    ...props
}) {
    return (
        <div {...props} className={`${props.className} flex md:flex-col justify-between items-center gap-[1.25rem] flex-1`}>
            <div className="mb-[2.44rem] flex w-[48%] flex-col items-start self-end md:w-full">
                <div className="flex sm:flex-col w-[49%] items-center gap-[1.63rem] md:w-full">
                    <Img src="images/img_ellipse_185.png" alt="john_okon" className="h-[5.81rem] w-[5.81rem] rounded-[50%]" /> 
                    <Heading size="2xl" as="h2" className="!font-['Inter'] !text-[2.06rem] !text-[#000000]"> 
                    {username}
                    </Heading>
                </div>
                <Heading size="lg" as="h3" className="mt-[3.00rem] !font-['Inter'] !text-[#000000]">
                    {description}
                </Heading>
                <Text
                    size="11x1" as="p"
                    className="mt-[0.63rem] w-[84%] text-justify !font-['Inter'] leading-[1.88rem] !text-[#000000] md: w-full">
                    {description1}
                </Text>
                <Heading size="md" as="h4" className="mt-[1.19rem] !font-['Inter'] !text-[#000000]">
                    {workexperience}
                </Heading>
                <Text size="11xl" as="p" className="mt-[0.63rem] !font-['Inter'] !text-[#000000]">
                    {brandlogo}
                </Text>
                <Text size="11xl" as="p" className="mt-[0.31rem] !font-['Inter'] !text-[#000000]">
                    {jobtitle}
                </Text>
                <div className="mt-[1.38rem] flex items-center justify-between gap-[1.25rem] self-stretch"> 
                <div className="flex w-[23%] justify-center self-end">
                    <div className="h-[2.13rem] w-[2.13rem] rounded-[17px] bg-[#d9d9d9]" />
                    <div className="ml-[0.94rem] h-[2.13rem] w-[2.13rem] rounded-[17px] bg-[#d9d9d9]" />
                    <div className="ml-[1.50rem] h-[2.13rem] w-[2.13rem] rounded-[17px] bg-[#d9d9d9]" />
                </div>
                    <Button
                        color="blue_gray_900"
                        size="xl"
                        className="min-w-[9.38rem] rounded-[13px] font-['Inter'] font-medium sm:px-[1.25rem]">
                        {hireMe} </Button>
                </div>
            </div>
            <Img src="images/img_box_gris.svg" alt="image" className="h-[38.63rem] w-[42%] md:w-full" />
        </div>
    )
}