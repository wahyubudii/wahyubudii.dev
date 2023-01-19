import React from "react";
import { MetaProps } from "../../types";
import Head from "next/head";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";
import ContactWhatsapp from "../../components/Commons/ContactWhatsapp";
import Link from "next/link";

export default function Rara() {
  const meta: MetaProps = {
    title: "Azzahra Putri Martikasari",
    description:
      "Special birthday for my girlfriend in 21th name is Azzahra Putri Martikasari",
    favicon: "/images/favicons/surprise.png",
    type: "website",
  };

  const textWhatsapp =
    "*_sayang kalau mau diganti atau ditambahin kalimatnya silahkan ya yang penting ikhlas dari kamunya (hapus kalimat ini sebelum dikirim)_*%0a%0aSayang, aku juga sayang banget sama kamu%0aMakasih banyak ya sayang udah dibuatin kayak gini%0aAku seneng banget, aku seneng banget kamu support aku terus dan masih sama kamu di ulang tahunku yang sekarang semoga kamu bisa ada terus sama aku ya sampe tua nanti%0aMakasih sayang%0a%0aLove you moree sayangku ❤️❤️";

  const recapPhotos = [
    {
      month: "Januari 2022",
      title: "Bulan waktu kamu ulang tahun",
      description:
        "Waktu kamu ulang tahun malah marah, aku gasuka waktu itu padahal harusnya jadi hari yang seru.",
      photo: [
        "/images/loves/januari/1.jpg",
        "/images/loves/januari/2.jpg",
        "/images/loves/januari/3.jpg",
        "/images/loves/januari/4.jpg",
        "/images/loves/januari/5.jpg",
      ],
    },
    {
      month: "Februari 2022",
      title: "Aku suka bulan ini karena kita waktu itu ketemu",
      description:
        "Pengen lama-lama ketemu lagi rasanya waktu itu, aku suka banget waktu kita ketemu, tapi sayangnya cuma bentar",
      photo: [
        "/images/loves/februari/1.jpg",
        "/images/loves/februari/2.jpg",
        "/images/loves/februari/3.jpg",
        "/images/loves/februari/4.jpg",
        "/images/loves/februari/5.jpg",
        "/images/loves/februari/6.jpg",
      ],
    },
    {
      month: "Maret 2022",
      title: "Dan yaa kita ketemu lagi tapi pas di rumah",
      description:
        "Kita ketemu sebentar waktu itu dan aku bawa bunga wkwk, maaf ya karena bunganya ga asli. InsyaAllah soon okee",
      photo: [
        "/images/loves/maret/1.jpg",
        "/images/loves/maret/2.jpg",
        "/images/loves/maret/3.jpg",
        "/images/loves/maret/4.jpg",
        "/images/loves/maret/5.jpg",
        "/images/loves/maret/6.jpg",
        "/images/loves/maret/7.jpg",
        "/images/loves/maret/8.jpg",
        "/images/loves/maret/9.jpg",
      ],
    },
    {
      month: "April 2022",
      title: "Bulan awal-awal kita mulai berantem",
      description:
        "Aku benci bulan ini karena ini bulan kita sering berantem, semoga april bulan depan ga seperti april tahun ini",
      photo: [
        "/images/loves/april/1.jpg",
        "/images/loves/april/2.jpg",
        "/images/loves/april/3.jpg",
        "/images/loves/april/4.jpg",
      ],
    },
    {
      month: "Mei 2022",
      title: "Bulan puncak kita berantem",
      description:
        "Aku paling benci bulan ini, padahal bulan ini bulan ramadhan. Gara-gara kemarin ramadhanku jadi bulan yang buruk",
      photo: [
        "/images/loves/mei/1.jpg",
        "/images/loves/mei/2.jpg",
        "/images/loves/mei/3.jpg",
        "/images/loves/mei/4.jpg",
      ],
    },
    {
      month: "Juni 2022",
      title: "Kondisinya lagi jelek",
      description: "No much more comment, intinya i feel disgusted with you.",
      photo: [],
    },
    {
      month: "Juli 2022",
      title: "Kondisinya lagi jelek",
      description: "No much more comment, intinya i feel disgusted with you.",
      photo: [],
    },
    {
      month: "Agustus 2022",
      title: "Kondisinya lagi jelek",
      description: "No much more comment, intinya i feel disgusted with you.",
      photo: [],
    },
    {
      month: "September 2022",
      title: "Open the book again",
      description:
        "Kamu chat aku, dengan tujuan untuk perbaiki semua. Sedangkan aku masih belum bisa menerima itu because i feel disgusted with you. Pada akhirnya aku membuka kesempatan kedua kalinya untuk kamu dan jika kesempatan ini ternyata masih sama saja artinya kamu telah kehilangan orang yang tulus sayang ke kamu",
      photo: [
        "/images/loves/september/1.jpg",
        "/images/loves/september/2.jpg",
        "/images/loves/september/3.jpg",
        "/images/loves/september/4.jpg",
        "/images/loves/september/5.jpg",
        "/images/loves/september/6.jpg",
      ],
    },
    {
      month: "Oktober 2022",
      title: "I'm still trying to adapt",
      description:
        "Kita LDR Kediri-Jakarta dan beberapa kali berantem. Hal yang paling aku benci waktu berhubungan yaitu ketika berantem tapi pelampiasannya ke orang lain (lawan jenis) atau make me feeling lonely.",
      photo: [
        "/images/loves/oktober/1.jpg",
        "/images/loves/oktober/2.jpg",
        "/images/loves/oktober/3.jpg",
        "/images/loves/oktober/4.jpg",
        "/images/loves/oktober/5.jpg",
        "/images/loves/oktober/6.jpg",
        "/images/loves/oktober/7.jpg",
        "/images/loves/oktober/8.jpg",
        "/images/loves/oktober/9.jpg",
        "/images/loves/oktober/10.jpg",
        "/images/loves/oktober/11.jpg",
        "/images/loves/oktober/12.jpg",
      ],
    },
    {
      month: "November 2022",
      title: "Wahyu's Birthday",
      description:
        "Bulan ini tepatnya pada tanggal 06 November 2022 officially tanggal jadian kita dan besoknya tanggal 07 November 2022 adalah ulang tahunku. Di ulang tahunku ini aku mendapatkan hadiah yang sederhana tapi luarbiasa.",
      photo: [
        "/images/loves/november/1.jpg",
        "/images/loves/november/2.jpg",
        "/images/loves/november/3.jpg",
        "/images/loves/november/4.jpg",
        "/images/loves/november/5.jpg",
        "/images/loves/november/6.jpg",
        "/images/loves/november/7.jpg",
        "/images/loves/november/8.jpg",
        "/images/loves/november/9.jpg",
        "/images/loves/november/10.jpg",
        "/images/loves/november/11.jpg",
        "/images/loves/november/12.jpg",
        "/images/loves/november/13.jpg",
        "/images/loves/november/14.jpg",
        "/images/loves/november/15.jpg",
        "/images/loves/november/16.jpg",
        "/images/loves/november/17.jpg",
        "/images/loves/november/18.jpg",
      ],
    },
    {
      month: "Desember 2022",
      title: "Back to Malang again",
      description:
        "Aku balik dari jakarta-malang bulan ini, dan mulai berantem-berantem kecil karena wacana tahun baru dan karena masalah lain tentang orang ke-3. Sedikit saranku, kurang-kurangi untuk berteman sama lawan jenis apalagi kamu udah punya cowo, hargai perasaanku juga ya.",
      photo: [
        "/images/loves/desember/1.jpg",
        "/images/loves/desember/2.jpg",
        "/images/loves/desember/3.jpg",
        "/images/loves/desember/4.jpg",
        "/images/loves/desember/5.jpg",
        "/images/loves/desember/6.jpg",
      ],
    },
    {
      month: "Januari 2023",
      title: "Met after 9 months of LDR",
      description:
        "Seru banget, tapi... iya kamu tau sendiri. Aku minta maaf yaa untuk kali ini aku gaakan ulangi lagi dan aku usahain menjadi terakhir kalinya aku seperti itu. Aku kangen kamu yang kemarin suka manja, komunikatif, sering pap dan ceria kalo sama aku. I need it back... i'm sorry it's my bad.",
      photo: [
        "/images/loves/januari-2023/1.jpg",
        "/images/loves/januari-2023/2.jpg",
        "/images/loves/januari-2023/3.jpg",
        "/images/loves/januari-2023/4.jpg",
        "/images/loves/januari-2023/5.jpg",
        "/images/loves/januari-2023/6.jpg",
        "/images/loves/januari-2023/7.jpg",
        "/images/loves/januari-2023/8.jpg",
        "/images/loves/januari-2023/9.jpg",
        "/images/loves/januari-2023/10.jpg",
      ],
    },
    {
      month: "2024, 2025, 2026, 2027",
      title: "Coming soon...",
      description: "",
      photo: [],
    },
  ];

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="shortcut icon" href={meta.favicon} />
      </Head>
      {/* paste this ig want scrollhide but have problem with rough notation `h-screen overflow-y-scroll scrollbar-hide` */}
      <div className="relative flex flex-col transition duration-500 ease-in-out dark:bg-black min-h-screen">
        <main className="container mx-auto dark:text-white z-10">
          <div className="mx-10 sm:mx-20 lg:mx-24 xl:mx-96 pt-32 pb-4">
            {/* HERO */}
            <section>
              <h1 className="font-bold text-4xl">
                <RoughNotation
                  show={true}
                  animate={true}
                  type="underline"
                  color="#FF8E9E"
                >
                  Rara
                </RoughNotation>
              </h1>
              <p className="text-[11px] leading-4 italic mt-6 text-slate-600 text-justify">
                <span className="bg-gradient-to-r from-green-600 to-blue-500 text-transparent bg-clip-text font-semibold">
                  Azzahra Putri Martikasari
                </span>
                , that's beautiful name, fitting for the beauty she possesses,
                always lights up my days with stunning happiness and radiance.
                And
                <span className="bg-gradient-to-r from-pink-600 to-purple-500 text-transparent bg-clip-text font-semibold">
                  &nbsp;the name will always be my (wahyu) favorite name I've
                  ever seen.
                </span>
              </p>
              <div className="my-14 rounded-full">
                <div
                  className="mx-auto rounded-full h-60 w-60 rotate-[290deg] bg-cover bg-center object-cover"
                  style={{
                    backgroundImage: `url(/images/loves/desember/3.jpg)`,
                  }}
                />
              </div>
              <div className="space-y-4">
                <p className="text-[11px] text-slate-600 text-justify">
                  <span className="bg-gradient-to-r from-pink-600 to-purple-500 text-transparent bg-clip-text font-semibold">
                    Today
                  </span>
                  , you have reached{" "}
                  <span className="bg-gradient-to-r from-yellow-600 to-green-500 text-transparent bg-clip-text font-semibold">
                    21 years old
                  </span>
                  , so I want to give you a small gift to celebrate it. I hope
                  you like the website I made for you and of course, this is not
                  the only gift. I will give you more when we meet in person.
                </p>
                <p className="text-[11px] text-slate-600 text-justify">
                  &quot;
                  <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-semibold">
                    My dear lover
                  </span>
                  , today is a very special day for me. It's your birthday.{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-green-500 text-transparent bg-clip-text font-semibold">
                    I am so lucky&nbsp;
                  </span>
                  to have someone like you in my life. You are the source of my
                  <span className="bg-gradient-to-r from-red-400 via-purple-500 to-sky-400 text-transparent bg-clip-text font-semibold">
                    &nbsp;happiness, my support, and my best friend
                  </span>
                  . I hope today will be an amazing day for you and I look
                  forward to celebrating many more years together.
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text font-semibold">
                    &nbsp;Happy birthday, my love
                  </span>
                  &quot;
                </p>
              </div>
            </section>

            {/* OPEN CARD */}
            <section className="mt-8">
              <div className="grid grid-cols-3 gap-3">
                <div className="relative h-32 flex items-center justify-center font-bold text-4xl bg-green-300 text-white group">
                  <p>I</p>
                  <div className="absolute w-full h-full bg-green-200 origin-bottom transition duration-300 border border-dashed group-hover:rotate-180 flex items-center justify-center" />
                </div>
                <div className="relative h-32 flex items-center justify-center font-bold text-4xl bg-white text-red group">
                  <p className="text-red-500">❤</p>
                  <div className="absolute w-full h-full bg-gray-100 origin-bottom transition duration-300 border border-dashed group-hover:rotate-180 flex items-center justify-center" />
                </div>
                <div className="relative h-32 flex items-center justify-center font-bold text-4xl bg-sky-300 text-white group">
                  <p>U</p>
                  <div className="absolute w-full h-full bg-blue-200 origin-bottom transition duration-300 border border-dashed group-hover:rotate-180 flex items-center justify-center" />
                </div>
              </div>
            </section>

            {/* RECAP PHOTO */}
            <section className="mt-20">
              <h1 className="text-lg font-bold">Recap Photo</h1>
              <div className="mt-6">
                <ol className="text-xs relative border-l border-gray-300 dark:border-gray-700">
                  {recapPhotos.map((val, index) => {
                    return (
                      <li key={index} className="mb-10 ml-4 space-y-1">
                        <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 font-normal leading-none text-gray-400 dark:text-gray-500">
                          {val.month}
                        </time>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {val.title}
                        </h3>
                        <p className="mb-4 text-[10px] font-normal text-gray-500 dark:text-gray-400">
                          {val.description}
                        </p>
                        {val.photo.length === 0 ? (
                          <p className="pt-3 text-[10px] italic">
                            Photo not found
                          </p>
                        ) : (
                          <div className="pt-2 grid grid-cols-3 gap-2">
                            {val.photo.map((photo, indexPhoto) => {
                              return (
                                <Image
                                  key={indexPhoto}
                                  className="h-28 bg-cover object-cover bg-center rounded"
                                  alt="photo"
                                  src={photo}
                                  width={1280}
                                  height={720}
                                  priority
                                />
                              );
                            })}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </div>
            </section>

            {/* NOTE */}
            <section className="mt-14 bg-white text-center py-6 px-4 text-xs border border-slate-400 border-dashed space-y-5">
              <h1 className="italic bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text font-semibold">
                Please always remember to respect each other's feelings, don't
                let a third person come into this relationship. Now that you're
                21, it's time to start thinking more seriously about the purpose
                of this relationship. It's not the time to be too active in
                communicating with the opposite sex that causes problems in this
                relationship.
              </h1>
              <h1 className="pb-5 bg-gradient-to-r from-red-500 to-yellow-500 text-transparent text-sm bg-clip-text font-bold">
                Promise?
              </h1>
              <Link
                href={`https://wa.me/+6285856196359?text="*_sayang kalau mau diganti atau ditambahin kalimatnya silahkan ya yang penting ikhlas dari kamunya (hapus kalimat ini sebelum dikirim)_*%0a%0aIya sayang, aku ikhlas dan aku janji"`}
                target={"_blank"}
                className="text-5xl"
              >
                ☝
              </Link>
              <p className="text-[8px] italic">
                (Klik jari diatas sebagai bukti janji)
              </p>
            </section>
          </div>
        </main>
        <div className="absolute top-0 h-64 w-full bg-gradient-to-tr from-zinc-300 via-pink-200 to-violet-500 blur-2xl opacity-50 dark:opacity-20 z-0"></div>
        <ContactWhatsapp text={textWhatsapp} />
      </div>
    </div>
  );
}
