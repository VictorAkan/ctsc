import { Button, Text, Heading, Img } from "./..";

export default function IbomServicesOnePlum({
    userimage = "images/img_rectangle_361.png",
    username = "John Emmanuel",
    useraddress = "12 Abak Road, Uyo.",
    userphonenumber = "08489244859",
    messagebutton = "Message John",
    ...props
}) {
    return (
        <div {...props} className={`${props.className} flex items-center bg-[#d9d9d9] flex-1 rounded-[16px]`}>
            <Img src={userimage} alt="john_emmanuel" className="h-[21.31rem] w-[38%] rounded-[16px] object-cover md:w-full" />
            <div className="mb-[2.13rem] flex w-[21%] flex-col items-start self-end md:w-full">
                <Heading size="s" as="h4" className="!text-[#000000]">
                    {username}
                </Heading>
                <Text as="p" className="!text-[#000000] ">
                    {useraddress}
                </Text>
                <Text as="p" className="!text-[#000000]">
                    {userphonenumber}
                </Text>
                <Button color="blue_gray_900" size="2xl" shape="round" className="mt-[1.00rem] w-full font-medium">
                    {messagebutton}
                </Button>
            </div>
        </div>
    )
}