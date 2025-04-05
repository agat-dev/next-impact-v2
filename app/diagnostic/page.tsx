import { Bento } from "@/components/diag-bento";




export default function Home() {

  return (
    <>
      <main className="flex-1 bg-white">

      {/* Bento Box */}
      <section className="flex align-center justify-center w-full h-full py-8 px-12 md:px-18 lg:px-18 xl:px-24">
          <Bento />
        </section>

        {/* End of Bento Box */}

        </main>
    </>
  );
}