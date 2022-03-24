import Image from "next/image";
import Link from "next/link";

const ProjectImage = ({ imageURI, description, titleLink }: {
    imageURI: string, description: string, titleLink: string
    }) => {
        return (
            <Link href={`/projects/${titleLink}`} passHref>
                <div className="flex cursor-pointer relative group justify-center w-full bg-white-300">
                    <Image 
                        src={`/../public/${imageURI}`}
                        alt={description}
                        width="750"
                        height="500"
                        className="rounded-lg"
                    />
                </div>
            </Link>
        )
}

export default ProjectImage;