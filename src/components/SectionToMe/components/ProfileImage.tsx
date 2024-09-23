import Image from "next/image";
import myimg from "@/assets/img/My.jpg";

const ProfileImage = () => (
  <div className="flex items-center justify-center">
    <div className="rounded-full overflow-hidden lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] relative" style={{ filter: 'drop-shadow(0 4px 6px rgba(255, 0, 0, 0.3))' }}>
      <Image src={myimg} alt="sectionToMe" layout="fill" className="object-cover" />
    </div>
  </div>
);

export default ProfileImage;