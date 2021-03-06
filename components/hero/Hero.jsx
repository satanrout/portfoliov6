import Image from "next/image";
import { useGetMeQuery } from "../../redux/services/me";
import { SkeletonText } from "../molecules/skeletonText";

export const Hero = () => {
  const { data, error, isLoading } = useGetMeQuery();
  return (
    <section className="container flex items-center justify-between mx-auto h-[calc(100vh-112px)]">
      <div className="mb-12">
        <h1 className="text-6xl font-semibold text-slate-900 capitalize leading-normal w-[25ch]">
          {isLoading && <SkeletonText count={12} />}
          {error && "something went wrong"}
          {data && data.heroTitle}
        </h1>
        <div className="flex items-center gap-3 mt-8 text-xl">
          <p className="text-blue-500">Check Out My</p>
          <button className="text-white px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600">Works &#8594;</button>
        </div>
      </div>
      <div className="mb-12">
        <Image src="/hero.svg" width="500px" height="300px" alt="hero image" />
      </div>
    </section>
  );
};
