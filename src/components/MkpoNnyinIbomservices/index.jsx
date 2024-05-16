import { Img, Text } from "./..";


export default function MkpoNnyinIbomservices({ userimage = "images/img_subb.png",
    servicename = "Ibom Services",
    ...props
}) {
    return (
        <div {...props} className={`${props.className} h-[30.31rem] w-[90%] md:w-full md:h-auto flex-1 relative md:flex-none`}>
            <img src={userimage} alt="ibom_services" className="h-[30.31rem] w-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max items-center gap-[0.63rem] sm:relative sm:flex-col"> 
            <Text size="22xl" as="p">
                {servicename}
            </Text>
                <Img
                src="images/img_arrow_left.svg"
                alt="ibom services"
                className="mb-[0.94rem] h-[1.69rem] w-[1.69rem] self-end sm:w-full"
                />
            </div>
        </div>
    )
}