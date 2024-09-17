import Image from "next/image";
import HotjarScript from "@/app/_components/HotjarScript";

export default function PageActualites() {
  return (
    <div className="px-[10%] py-[5%]">
      <HotjarScript />
      <div className="py-5 md:py-12">
        <h1 className="font-bold text-[24px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias necessitatibus veniam mollitia vel, eum aut doloremque aspernatur. </h1>
        <h2 className="py-5 text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nostrum velit tempora maxime vero nisi distinctio, voluptatem laborum cupiditate quasi, accusamus facere similique numquam dolores nam voluptatibus at necessitatibus dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h2>
      </div>
      <div className="flex items-center justify-items-center md:px-[20%]">
        <Image
          src="/assets/phytopub.jpeg"
          alt="Produit"
          width={100}
          height={100}
          className="object-cover h-auto w-full  bg-center bg-cover mx-auto"
        />
      </div>
      <div className="md:py-12 py-5">
        <p className=" text-[16px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ea, id eveniet animi unde et sapiente consequatur quae magni nisi cupiditate voluptates tenetur aut a quaerat vitae culpa impedit sint? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur atque qui aliquid quo beatae minima magni ratione quam, recusandae nulla totam architecto sunt odio quas assumenda expedita explicabo facere quos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto doloribus corporis aut minus doloremque perspiciatis? Facere nulla fugit hic. Ea maiores ab eligendi nostrum dolorem maxime quae tempora, quidem ipsam?</p>
      </div>
    </div>
  );
}

