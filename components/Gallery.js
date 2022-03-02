import Image from "next/image";

export default function Gallery() {
  return (
    <section id="" className="">
      <div className="flex flex-col md:flex-row">
        <div className="flex">
          <Image
            src="/chimney500.jpg"
            alt="photos of work done"
            height={500}
            width={500}
          />
        </div>
        <div className="flex">
          <Image
            src="/demo500.jpg"
            alt="photos of work done"
            height={500}
            width={500}
          />
        </div>
        <div className="flex">
          <Image
            src="/interlock500.jpg"
            alt="photos of work done"
            height={500}
            width={500}
          />
        </div>
        <div className="flex">
          <Image
            src="/stonework500.jpg"
            alt="photos of work done"
            height={500}
            width={500}
          />
        </div>
        <div className="flex">
          <Image
            src="/wall500.jpg"
            alt="photos of work done"
            height={500}
            width={500}
          />
        </div>
      </div>
    </section>
  );
}
