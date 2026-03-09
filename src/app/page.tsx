import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Masalah from "@/components/masalah";
import StoryJoko from "@/components/story-joko";
import StorySection from "@/components/story-section";
import ChipsStrip from "@/components/chips-strip";
import CTOSection from "@/components/cto-section";
import Pricing from "@/components/pricing";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Masalah />
      <StoryJoko />

      {/* Sari — CS */}
      <StorySection
        id="storySari"
        label="Ini Sari.AI, Karyawan CS-mu."
        title="Ada yang Komplain? Dia yang Beresin Duluan."
        description='Kamu tinggal bilang: "balasin ini dong".<br>Sari bikinin jawaban yang aman, sopan, dan siap kirim.'
        features={[
          { text: "Bikinin balasan siap kirim" },
          { text: "Kasih ringkas masalahnya apa" },
          { text: "Ngingetin kalau ada yang urgent" },
        ]}
        imageSrc="/assets/demo-sari-ai.png"
        imageAlt="Bukti Chat Sari.AI"
        reverse
        caption="Kamu tinggal approve. Selesai."
      />

      <ChipsStrip />

      {/* Budi — Laporan */}
      <StorySection
        id="storyBudi"
        label="Kalau ini Budi.AI, Jagonya Bikin Laporan!"
        title="Jam 12 Malam Pun Masih Bisa Nanya Penjualan."
        description='Lagi kepikiran penjualan?<br>Chat aja: "produk paling laku apa?"<br>Budi jawab cepat. Kamu gak perlu buka-buka laporan.'
        microNote="Yang ini gak tidur. Serius."
        features={[
          { text: "Angka ringkas, gak ribet" },
          { text: "Langsung kasih intinya" },
          { text: "Bisa kapan aja (bahkan tengah malam)" },
        ]}
        imageSrc="/assets/demo-budi-ai.png"
        imageAlt="Bukti Chat Budi.AI"
      />

      {/* Andi — Operasional */}
      <StorySection
        id="storyAndi"
        label="Andi.AI Akan Urus Semua Operasional."
        title="Order Nyangkut? Dia Kasih Checklist."
        description='Tanya aja: "list kerjaan hari ini".<br>Andi kasih urutan mana yang harus dikerjain dulu.'
        features={[
          { text: "Checklist harian" },
          { text: "Kasih tanda yang urgent" },
          { text: "Bantu kamu fokus yang penting" },
        ]}
        imageSrc="/assets/demo-andi-ai.png"
        imageAlt="Bukti Chat Andi.AI"
        reverse
        caption="Biar kamu gak kebanyakan mikir."
      />

      <CTOSection />
      <Pricing />
      <FinalCTA />
      <Footer />
    </>
  );
}