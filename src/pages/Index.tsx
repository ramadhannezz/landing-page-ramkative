import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Calendar, Globe, QrCode, Star, Users, Shield, Zap, ChevronRight, Menu, X, AlertTriangle, Clock, DollarSign, Smartphone, CheckCircle, Monitor, Camera, Gift, Scan, Ticket, LayoutDashboard, Sparkles,  ClipboardCheck,  Wallet,  Scale,  FileText, BarChart2, CalendarCheck, Send, ListChecks, MailOpen } from "lucide-react";
import TestimonialSlider from "@/components/TestimonialSlider";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState("aplikasi-penerima-tamu");
  const [activeProduct, setActiveProduct] = useState("digital-guestbook");
  const [isBundling, setIsBundling] = useState(true);

  const productImages = [
    "assets/hero/1.png",
    "assets/hero/2.png",
    "assets/hero/3.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productImages.length);
    }, 4000);
    return () => clearInterval(timer);
    
  }, [productImages.length]);

  const [promoTimeLeft, setPromoTimeLeft] = useState("");
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [showAllPremium, setShowAllPremium] = useState(false);
  const [showAllEnterprise, setShowAllEnterprise] = useState(false);

  const features = [
    "Wedding Planner Tools",
    "Bonus Moodboard Engagement/Wedding",
    "Bonus E-Book Financial & Wedding",
    "Gratis Update Fitur Baru",
    "Akses Gratis Selamanya",
    "Bisa Sharing Dengan Pasangan",
    "Bisa Diakses dari Mana Saja & Kapan Saja",
    "Bisa Diakses dari Berbagai Perangkat",
    "Countdown Kalender dengan Notifikasi",
    "Konsultasi Gratis",
  ];
  const enterpriseFeatures = [
  "Wedding Planner Tools",
  "Digital Invitation Website",
  "Digital Guest Book - QR Code & Selfie Check-In",
  "Bonus Moodboard Engagement/Wedding",
  "Bonus E-Book Financial & Wedding",
  "File Foto Selfie Bisa Disimpan sebagai Album Digital",
  "Real-Time Display – Bisa Ditampilkan di Layar / TV",
  "Export Semua Data Tamu & Ucapan ke Excel",
  "Statistik Kehadiran Real-Time (Jumlah tamu hadir, jam check-in, dll)",
  "Mudah Input Daftar Tamu Import Dengan Excel",
  "Bisa Check-In Manual dan Otomatis Dengan QR Code",
  "Bisa Share QR Code Undangan ke Tamu via Whatsapp",
  "Kemudahan Dalam Check-In Tamu",
  "Konsultasi Gratis",
];
  const premiumFeatures = [
    "Wedding Planner Tools",
    "Digital Invitation Website",
    "Bonus Moodboard & E-Book Wedding",
    "200+ Template Premium Bebas Pilih Desain",
    "Bisa Custom Domain Sendiri",
    "Bebas Input Nama Tamu Sebanyak-Banyaknya",
    "Akses Link Aktif Hingga 12 Bulan",
    "Ratusan Pilihan Music Latar & Bisa Custom",
    "Bisa di Buatkan Oleh Admin",
    "Konsultasi Gratis",
  ];

  useEffect(() => {
    const targetDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(countdown);
        setPromoTimeLeft("00:00:00");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const format = `${days}h ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        setPromoTimeLeft(format);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const productFeatures = {
    "digital-guestbook": {
      title: "Digital Guestbook",
      subtitle: "Ngapain repot pake buku tamu kertas yang ribet?",
      description: "Dengan 99rb aja, tamu kamu bisa check-in gampang pake QR code + selfie langsung masuk data!",
      copywriting: "Bukan sekadar catat nama tamu, buku tamu digital kami bikin acara makin berkesan dan data langsung aman di genggamanmu!",
      features: [
  {
    id: "aplikasi-penerima-tamu",
    icon: <BarChart2 className="h-5 w-5" />, // grafik, statistik
    title: "Dashboard Interaktif & Real-time",
    description: "Pantau tamu undangan secara langsung melalui dashboard modern yang menampilkan grafik kehadiran, aktivitas terbaru, serta statistik pengiriman undangan dalam sekali lihat. Semua data penting tersaji jelas, bikin kamu makin percaya diri di hari acara!",
    image: "assets/dgb/17.png"
  },
  {
    id: "layar-sapa",
    icon: <CalendarCheck className="h-5 w-5" />, // acara, kalender
    title: "Kelola Banyak Acara Dalam Satu Aplikasi",
    description: "Ga perlu ribet lagi pakai banyak aplikasi! Di Ramkative, kamu bisa mengelola berbagai acara sekaligus. Cukup satu tempat, semua terintegrasi rapi, mulai dari tanggal, lokasi, hingga detail undangan yang sudah disiapkan.",
    image: "assets/dgb/18.png"
  },
  {
    id: "food-management",
    icon: <Users className="h-5 w-5" />, // data tamu
    title: "Data Tamu Tersusun Rapi & Mudah Diatur",
    description: "Kelola daftar tamu secara digital, lengkap dengan kategori, kontak, serta informasi penting lainnya dalam satu tabel yang user-friendly. Impor dan ekspor data dengan mudah kapan pun dibutuhkan!",
    image: "assets/dgb/19.png"
  },
  {
    id: "selfie-checkin",
    icon: <Send className="h-5 w-5" />, // pengiriman undangan digital
    title: "Undangan Digital Dengan Tracking Pengiriman",
    description: "Undang tamu secara digital, dilengkapi QR Code khusus untuk setiap undangan. Status undangan dapat dilacak dengan jelas, apakah sudah dikirim, dibuka, atau masih menunggu. Akses kontrol penuh di tangan kamu!",
    image: "assets/dgb/20.png"
  },
  {
    id: "pencatatan-hadiah",
    icon: <QrCode className="h-5 w-5" />, // scan QR & selfie
    title: "Check-in Cepat dan Praktis dengan Scan QR & Selfie",
    description: "Check-in tamu berlangsung lebih cepat, modern, dan akurat dengan teknologi scan QR Code. Tamu tinggal tunjukkan QR code unik mereka, langsung terdeteksi! Opsional dengan selfie, keamanan ekstra tanpa ribet, tamu senang, acara lancar.",
    image: "assets/dgb/21.png"
  },
  {
    id: "cetak-qr-fisik",
    icon: <ClipboardCheck className="h-5 w-5" />, // check-in manual
    title: "Check-in Manual Sebagai Backup Praktis",
    description: "Jika tamu lupa membawa QR code, fitur check-in manual tersedia sebagai alternatif yang cepat dan mudah. Tetap fleksibel di segala situasi!",
    image: "assets/dgb/22.png"
  },
  {
    id: "log-kedatangan",
    icon: <ListChecks className="h-5 w-5" />, // log kedatangan
    title: "Log Kedatangan Tamu Akurat & Terintegrasi",
    description: "Riwayat kedatangan tamu tercatat otomatis saat tamu melakukan check-in menggunakan QR code. Data lengkap dengan waktu kedatangan, lokasi meja, bahkan foto selfie bisa kamu unduh langsung untuk dokumentasi acara yang rapi.",
    image: "assets/dgb/23.png"
  },
  {
    id: "undangan-digital",
    icon: <MailOpen className="h-5 w-5" />, // undangan digital
    title: "Undangan Digital Elegan & Personalisasi",
    description: "Hadirkan kesan eksklusif untuk tamu VIP maupun reguler melalui undangan digital yang cantik dan modern. Dilengkapi informasi jelas serta QR Code khusus yang memudahkan proses kedatangan.",
    image: "assets/dgb/24.png"
  }

      ]
    },
    "wedding-planner": {
      title: "Wedding Planner Tools",
      subtitle: "Nikah Niatnya Bahagia, Tapi Kok Persiapannya Bikin Pusing?",
      description: "Tenang, kamu gak sendirian. Ramkative hadir buat bantuin kamu rapiin semua hal yang sering bikin stres pas nyiapin nikah",
      copywriting: "Daripada ngatur budget di notes, nyimpen vendor di chat, dan checklist-nya lupa ditandain — mending pakai satu tools yang udah nyatuin semuanya",
    features: [
      {
        id: "dashboard-overview",
        icon: <LayoutDashboard className="h-5 w-5" />, // Ikon dashboard utama
        title: "Dashboard Overview - Satu Dashboard, Semua Terlihat Jelas",
        description: "Semua fitur inti kamu tampil dalam satu tampilan. Gak perlu klik sana-sini — kamu bisa liat progres persiapan nikah kamu secara menyeluruh dari awal sampai hari H. Serius, ini bikin kamu ngerasa lebih tenang.",
        image: "assets/wpt/9.png"
      },
      {
        id: "inspiration",
        icon: <Sparkles className="h-5 w-5" />, // Icon nuansa inspiratif
        title: "Inspiration - Ide Nikahan Keren, Semua dalam Satu Tempat",
        description: "Dari bridesmaid look sampai mahar dan dekor, semua referensi kece udah kita siapin. Gak usah scroll Pinterest berjam-jam — tinggal buka, pilih, dan save yang kamu suka.",
        image: "assets/wpt/10.png"
      },
      {
        id: "event-list",
        icon: <ClipboardCheck className="h-5 w-5" />, // Ikon checklist acara
        title: "Event List - Timeline Pernikahan Interaktif & Checklist Anti Lupa",
        description: "Atur semua dari checklist sampai rundown acara dengan gampang. Gak ada lagi hal yang bikin lupa “eh ini udah dicek belum ya?”",
        image: "assets/wpt/11.png"
      },
      {
        id: "guest-list",
        icon: <Users className="h-5 w-5" />, // Representasi tamu
        title: "Guest List Organizer - Data Tamu & Seating Chart Gak Lagi Ribet",
        description: "Susun tamu, tandai status undangan, atur tempat duduk — semua bisa kamu kelola digital. Simple, rapi, dan gak bikin pusing.",
        image: "assets/wpt/12.png"
      },
      {
        id: "financial-list",
        icon: <Wallet className="h-5 w-5" />, // Dompet untuk finansial
        title: "Wedding Budget Tracker - Biar Dompet Aman Sampai Hari H",
        description: "Budget kamu bisa dipantau real-time. Ada juga fitur vendor research & savings tracker biar keputusan finansial makin tepat.",
        image: "assets/wpt/13.png"
      },
      {
        id: "vendor-comparison",
        icon: <Scale className="h-5 w-5" />, // Bandingkan vendor = icon timbang
        title: "Vendor Comparison - Bandingin Vendor Yang Paling Pas",
        description: "Venue, MUA, catering, sampai dokumentasi — semua bisa kamu nilai dan bandingkan langsung. Jadi gak cuma “katanya bagus”, tapi emang terbukti cocok.",
        image: "assets/wpt/14.png"
      },
      {
        id: "administration-list",
        icon: <FileText className="h-5 w-5" />, // Dokumen administrasi
        title: "Checklist Administrasi Nikah - Biar Gak Ada yang Kelewat",
        description: "Semua keperluan administrasi kamu urut di sini, dari medical check-up sampai dokumen resmi. Gak perlu nyari info ke sana-sini lagi.",
        image: "assets/wpt/15.png"
      },
      {
        id: "supporting-things",
        icon: <Gift className="h-5 w-5" />, // Seserahan, donatur = hadiah
        title: "Supporting Things - Hal Kecil yang Bikin Nikah Kamu Makin Spesial",
        description: "Musik, seserahan, sampai rekap donatur — semuanya kita sediain tempatnya. Karena detail kecil juga bikin momen makin berkesan.",
        image: "assets/wpt/16.png"
      },
    ]

    },
    "digital-invitation": {
      title: "Website Undangan Digital",
      subtitle: "Undangan modern untuk era digital!",
      description: "Website undangan yang elegan, responsif, dan ramah lingkungan untuk pernikahan modern!",
      copywriting: "Hemat kertas, hemat biaya, tapi tetap memukau dengan desain yang personal dan interaktif",
      features: [
  {
    id: "opening",
    icon: <Globe className="h-5 w-5" />,
    title: "Opening",
    description: "Sambutan hangat yang menyapa tamu saat pertama kali membuka undangan.",
    image: "assets/diw/1.png"
  },
  {
    id: "mempelai",
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Mempelai",
    description: "Perkenalan mempelai lengkap dengan foto dan kisah singkat perjalanan cinta.",
    image: "assets/diw/2.png"
  },
  {
    id: "acara",
    icon: <Globe className="h-5 w-5" />,
    title: "Detail Acara",
    description: "Informasi lengkap seputar akad & resepsi: waktu, lokasi, dresscode, dll.",
    image: "assets/diw/3.png"
  },
  {
    id: "gallery",
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Galeri Foto & Video",
    description: "Tampilkan momen prewed, engagement, atau kenangan bersama dalam galeri digital.",
    image: "assets/diw/4.png"
  },
  {
    id: "gift",
    icon: <Globe className="h-5 w-5" />,
    title: "Amplop Digital",
    description: "Mudah dan aman untuk menerima tanda kasih langsung lewat e-wallet atau rekening.",
    image: "/assets/diw/5.png"
  },
  {
    id: "love-story",
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Love Story",
    description: "Kisah cinta kalian ditampilkan dalam bentuk timeline yang manis dan estetik.",
    image: "assets/diw/6.png"
  },
  {
    id: "rsvp",
    icon: <Globe className="h-5 w-5" />,
    title: "RSVP & Ucapan",
    description: "Konfirmasi kehadiran dan kolom ucapan dari para tamu yang penuh doa baik.",
    image: "assets/diw/7.png"
  },
  {
    id: "dresscode",
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Dresscode",
    description: "Informasi tema busana agar para tamu bisa tampil selaras di hari spesialmu.",
    image: "assets/diw/8.png"
  }
]
    }
  };

  const currentProduct = productFeatures[activeProduct];
  const currentFeature = currentProduct.features.find(f => f.id === selectedFeature) || currentProduct.features[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-pink-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center space-x-2">
            <img src="/assets/logo.png" alt="Logo Ramkative" className="h-10 w-auto" />
          </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('tentang')} className="text-gray-700 hover:text-pink-500 transition-colors">
                Tentang Kami
              </button>
              <button onClick={() => scrollToSection('harga')} className="text-gray-700 hover:text-pink-500 transition-colors">
                Harga
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-pink-500 transition-colors">
                Portfolio
              </button>
              <a href="/payment-list" className="text-gray-700 hover:text-pink-500 transition-colors">
                Metode Pembayaran
              </a>
              <button onClick={() => scrollToSection('testimoni')} className="text-gray-700 hover:text-pink-500 transition-colors">
                Testimoni
              </button>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                Masuk/Daftar
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-pink-100 py-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('tentang')} className="text-left text-gray-700 hover:text-pink-500">
                  Tentang Kami
                </button>
                <button onClick={() => scrollToSection('harga')} className="text-left text-gray-700 hover:text-pink-500">
                  Harga
                </button>
                <button onClick={() => scrollToSection('portfolio')} className="text-left text-gray-700 hover:text-pink-500">
                  Portfolio
                </button>
                <a href="/payment-list" className="text-gray-700 hover:text-pink-500">
                  Metode Pembayaran
                </a>
                <button onClick={() => scrollToSection('testimoni')} className="text-left text-gray-700 hover:text-pink-500">
                  Testimoni
                </button>
<Button
  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white w-full"
  onClick={() => window.location.href = "https://buku-tamu.ramkative.my.id/home"}
>
  Masuk ke Buku Tamu
</Button>

                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white w-full">
                  Masuk/Daftar
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Header/Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Section 1 - Title, Description, CTA */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Digital Wedding Kit
                  <span className="block text-3xl lg:text-4xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                      Bantu Kamu Yang Lagi Pusing Rencanain Pernikahan
                  </span>
                </h1>
                <br />
                <p className="text-l text-gray-600 mb-8 leading-relaxed">
                  Solusi lengkap digital untuk pernikahan kamu. Dari wedding planner tools, website undangan digital, hingga digital guestbook dengan QR Code - semua dalam satu paket! 💑✨
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg"
                  onClick={() => scrollToSection('harga')}
                >
                  Coba Sekarang
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg"
                  onClick={() => {
                    const phone = '62881011287735'; // nomor WhatsApp (pakai kode negara 62 untuk Indonesia)
                    const text = encodeURIComponent('Halo kak, aku mau tanya perihal produk wedding digital kit nya apakah bisa?');
                    const url = `https://wa.me/${phone}?text=${text}`;
                    window.open(url, '_blank');
                  }}
                >
                  Konsultasi Gratis
                </Button>

              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>1000+ Pasangan Bahagia</span>
                </div>
              </div>
            </div>

            {/* Section 2 - Product Slideshow */}
            <div className="relative h-96 lg:h-[500px] animate-scale-in">
              {/* <div className="relative h-full overflow-hidden rounded-2xl shadow-2xl"> */}
              <div className="relative h-full">
                {productImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Product showcase ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                
                {/* Slide indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-white' : 'bg-white/50'
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Solving Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Persiapan nikah itu kadang <span className="text-red-500">bikin pusing, ya?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ramkative hadir buat bantu kamu lewat tools digital lengkap, supaya semua rencana bisa jalan lancar sampai hari bahagia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Problem Cards */}
            <Card className="text-center border-red-200 bg-red-50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-500" />
                </div>
                <CardTitle className="text-red-600">Ribet & Melelahkan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Harus mengurus undangan cetak, booking vendor, mengatur guest list manual - semuanya memakan waktu berhari-hari
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-red-200 bg-red-50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="h-8 w-8 text-red-500" />
                </div>
                <CardTitle className="text-red-600">Budget Bengkak</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Biaya cetak undangan, buku tamu fisik, dekorasi tambahan membuat budget pernikahan membengkak tidak terkendali
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-red-200 bg-red-50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-red-500" />
                </div>
                <CardTitle className="text-red-600">Koordinasi Sulit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Sulit mengetahui siapa yang hadir, update acara terlambat sampai ke tamu, koordinasi vendor tidak terintegrasi
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-red-200 bg-red-50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="h-8 w-8 text-red-500" />
                </div>
                <CardTitle className="text-red-600">Tidak Modern</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Cara lama terasa kuno, tamu millennial lebih suka yang praktis dan digital, memories sulit diorganisir
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Solution */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-6">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ramkative Solusi <span className="text-pink-500">Semua Masalah!</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Dengan teknologi digital terdepan, kami mengubah persiapan pernikahan yang ribet menjadi mudah, hemat, dan modern. Satu platform untuk semua kebutuhan pernikahan kamu
            </p>
            {/* <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg"
              onClick={() => scrollToSection('portfolio')}
            >
              Lihat Solusi Lengkap
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button> */}
          </div>
        </div>
      </section>

      {/* Kenapa Harus Kami Section */}
      <section id="tentang" className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kenapa Harus <span className="text-pink-500">Ramkative?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami paham betapa pentingnya hari pernikahan kamu. Dengan teknologi terdepan dan desain yang memukau, kami siap bantu kamu dalam mempersiapkan pernikahan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-pink-100">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-pink-600">Mudah & Cepat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Setup dalam hitungan menit. Tidak perlu keahlian teknis, semua sudah siap pakai untuk pernikahan kamu.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-pink-100">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-pink-600">Terpercaya</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sudah dipercaya oleh 1000+ pasangan. Data aman, server stabil, dan dukungan pelanggan 24/7.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-pink-100">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-pink-600">Personal Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Setiap desain dapat disesuaikan dengan tema dan kepribadian unik kamu sebagai pasangan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Review Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Produk Digital <span className="text-pink-500">Wedding Kit</span>
            </h2>
            <p className="text-lg text-gray-600">
              Solusi lengkap untuk bantu persiapan pernikahan kamu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Wedding Planner Tools */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-pink-200">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-gray-900">Wedding Planner Tools</CardTitle>
                <div className="flex items-center justify-center space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">4.9/5</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>✅ Mudah digunakan kapan saja</li>
                  <li>✅ Mudah digunakan di hp & laptop</li>
                  <li>✅ Bisa dibagikan bareng pasangan</li>
                  <li>✅ Aktif selamanya tanpa batasan </li>
                  <li>✅ Dapat upgrade fitur terbaru</li>
                  <li>✅ Data tersimpan aman di cloud</li>
                  <li>✅ User interface simpel dan intuitif</li>
                  <li>✅ Dukungan layanan pelanggan</li>
                </ul>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium text-center">
                  ✅ Tersedia Sekarang
                </div>
              </CardContent>
            </Card>

            {/* Digital Invitation */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-pink-200">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-gray-900">Website Undangan Digital</CardTitle>
                <div className="flex items-center justify-center space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">4.8/5</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>✅ 100+ template premium</li>
                  <li>✅ Custom domain</li>
                  <li>✅ Custom Nama Tamu Undangan</li>
                  <li>✅ Custom Musik Latar</li>
                  <li>✅ Tema Lengkap Bisa Custom</li>
                  <li>✅ Edit Gampang Cukup Pake HP</li>
                  <li>✅ Tambah / Kurangi Halaman</li>
                  <li>✅ Ubah Warna & Ukuran Font</li>
                </ul>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium text-center">
                  ✅ Tersedia Sekarang
                </div>
              </CardContent>

            </Card>

            {/* Digital Guestbook */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-pink-200">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <QrCode className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-gray-900">Digital Guestbook QR</CardTitle>
                <div className="flex items-center justify-center space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">4.9/5</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>✅ QR Code generator</li>
                  <li>✅ Photo selfie</li>
                  <li>✅ Real-time display</li>
                  <li>✅ Download memories</li>
                  <li>✅ Input daftar tamu dengan excel</li>
                  <li>✅ Statistik kehadiran real-time</li>
                  <li>✅ Share QR Code via Whatsapp</li>
                  <li>✅ Export semua data tamu ke excel</li>
                  <li></li>
                </ul>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium text-center">
                  ✅ Tersedia Sekarang
                </div>
              </CardContent>
            </Card>

            {/* Coming Soon Features */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-200 opacity-75">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-gray-500" />
                </div>
                <CardTitle className="text-lg text-gray-700">Filter Instagram/Tiktok</CardTitle>
                <div className="flex items-center justify-center space-x-1 mt-2">
                  <span className="text-sm text-gray-400">Segera Hadir</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-500 mb-4">
                  <li>✨ Efek visual seuai tema pernikahan</li>
                  <li>📱 Bisa dipakai di IG & TikTok</li>
                  <li>🎨 Desain custom sesuai nama</li>
                  <li>📦 Cocok untuk semua acara</li>
                </ul>
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium text-center">
                  🚀 Coming Soon
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Ribuan pasangan telah mempercayai Ramkative untuk pernikahan mereka
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg"
              onClick={() => scrollToSection('harga')}
            >
              Pilih Paket Sekarang
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Product Features Section */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Apa Aja Kelebihan Produk Kami?
            </h2>
            <p className="text-lg text-gray-600">
              Jelajahi keunggulan setiap produk untuk pernikahan kamu yang sempurna dan gak lagi ribet!
            </p>
          </div>

          <Tabs value={activeProduct} onValueChange={setActiveProduct} className="w-full">
          <TabsList className="grid grid-cols-3 w-full mb-12 bg-pink-50 rounded-lg overflow-hidden min-h-[46px]">

            <TabsTrigger
              value="digital-guestbook"
              className="
                w-full
                flex items-center justify-center
                py-2              /* atur tinggi di sini */
                text-sm font-medium text-gray-700
                transition-colors duration-200
                data-[state=active]:bg-white
                data-[state=active]:text-pink-600
              "
            >
              Digital Guestbook
            </TabsTrigger>

            <TabsTrigger
              value="wedding-planner"
              className="
                w-full
                flex items-center justify-center
                py-2
                text-sm font-medium text-gray-700
                transition-colors duration-200
                data-[state=active]:bg-white
                data-[state=active]:text-pink-600
              "
            >
              Wedding Planner
            </TabsTrigger>

            <TabsTrigger
              value="digital-invitation"
              className="
                w-full
                flex items-center justify-center
                py-2
                text-sm font-medium text-gray-700
                transition-colors duration-200
                data-[state=active]:bg-white
                data-[state=active]:text-pink-600
              "
            >
              Digital Invitation
            </TabsTrigger>
          </TabsList>


            <TabsContent value={activeProduct} className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Side - Product Info & Features */}
                <div className="space-y-8">
                  {/* Product Header */}
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {currentProduct.title}
                    </h3>
                    <p className="text-lg text-pink-600 font-medium mb-4">
                      {currentProduct.subtitle}
                    </p>
                    <p className="text-lg text-gray-700 mb-2">
                      {currentProduct.description}
                    </p>
                    <p className="text-gray-600">
                      {currentProduct.copywriting}
                    </p>
                  </div>

                  {/* Feature Buttons */}
                  <div className="space-y-3">
                    {currentProduct.features.map((feature) => (
                      <button
                        key={feature.id}
                        onClick={() => setSelectedFeature(feature.id)}
                        className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 flex items-center space-x-3 ${
                          selectedFeature === feature.id
                            ? 'border-pink-500 bg-pink-50 text-pink-700'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-pink-300 hover:bg-pink-25'
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${
                          selectedFeature === feature.id ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {feature.icon}
                        </div>
                        <span className="font-medium">{feature.title}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Side - Feature Display */}
                <div className="space-y-6">
                  {/* Feature Image */}
                  <div className="relative h-64 lg:h-80 overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={currentFeature.image}
                      alt={currentFeature.title}
                      className="w-full h-full object-cover transition-opacity duration-300"
                    />
                  </div>

                  {/* Feature Description */}
                  <Card className="border-pink-100">
                    <CardHeader>
                      <CardTitle className="text-xl text-pink-600 flex items-center space-x-2">
                        {currentFeature.icon}
                        <span>{currentFeature.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed">
                        {currentFeature.description}
                      </p>
                    </CardContent>
                  </Card>

{/* Additional Info */}
<div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
  <p className="text-sm text-gray-600 mb-4">
    Mulai dari <span className="font-semibold text-purple-600">atur timeline & budget pernikahan</span>, 
    kirim <span className="font-semibold text-blue-600">undangan digital yang bisa diakses siapa aja</span>, 
    sampai <span className="font-semibold text-pink-600">scan QR buat tamu yang hadir</span> — semua udah kami buatin digital. 
    Gak perlu buka banyak file atau nyatet manual. Semuanya lebih rapih, praktis, dan bisa dipantau bareng pasangan.
  </p>
  <div className="flex items-center justify-between text-sm flex-wrap gap-2 mt-4">
    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs">📋 12 Task tersisa di planner</span>
    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">💌 88 Undangan sudah terkirim</span>
    <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs">🎉 47 Tamu sudah check-in</span>
    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">💌 10 Undangan belum terkirim</span>
  </div>
</div>

                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="harga" className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Paket Harga <span className="text-pink-500">Terjangkau</span>
            </h2>
            <p className="text-lg text-gray-600">
              Pilih paket yang sesuai dengan kebutuhan pernikahan kamu
            </p>
          </div>

      {/* Toggle Switch */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center bg-white border border-gray-300 rounded-full px-1 py-1 shadow-sm">
            <button
              onClick={() => setIsBundling(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isBundling ? "bg-pink-500 text-white" : "text-gray-600"
              }`}
            >
              Bundling
            </button>
            <button
              onClick={() => setIsBundling(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !isBundling ? "bg-pink-500 text-white" : "text-gray-600"
              }`}
            >
              Satuan
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {isBundling ? (
            // Bundling Packages
            <>
            {/* Basic Package */}
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Basic</CardTitle>
                <CardDescription className="mt-2">Solusi biar hemat budget dan gak bikin pusing</CardDescription>
                <br />
                <br />
                <div className="text-4xl font-bold text-pink-500 my-2">
                  Rp 59K
                  <span className="text-sm font-medium text-gray-500 line-through ml-2">Rp 99K</span>
                </div>
                <div className="text-sm text-red-600 font-semibold mb-1">Hemat 40% – Promo Terbatas!</div>
                {/* <div className="text-xs text-gray-500 italic">
                  Promo berakhir dalam <span className="font-semibold text-red-500">{promoTimeLeft}</span>
                </div> */}
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {(showAllFeatures ? features : features.slice(0, 6)).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Toggle button */}
                <div className="text-center">
                  <button
                    onClick={() => setShowAllFeatures(!showAllFeatures)}
                    className="mt-2 text-pink-500 text-sm font-semibold flex items-center justify-center mx-auto focus:outline-none"
                  >
                    {showAllFeatures ? "Sembunyikan Fitur" : "Lihat Fitur Lengkap"}
                    <svg
                      className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${
                        showAllFeatures ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                <Button onClick={() =>
                    window.open(
                      'https://wa.me/62881011287735?text=Halo%20kak%2C%20aku%20berminat%20untuk%20beli%20paket%20%22Basic%20Package%22%20apakah%20bisa%20dibantu%3F',
                      '_blank'
                    )
                  }
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                >
                  Dapatkan Paket Ini!
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Package */}
            <Card className="border-pink-300 hover:shadow-xl transition-shadow relative scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Enterprise</CardTitle>
                <CardDescription className="mt-2">Solusi lengkap untuk persiapan pernikahan, dengan all-in bundling</CardDescription>
                <br />
                <div className="text-4xl font-bold text-pink-500 my-2">
                  Rp 249K
                <span className="text-sm font-medium text-gray-500 line-through ml-2">Rp 622K</span>
                  </div>
                <div className="text-sm text-red-600 font-semibold mb-1">Hemat 60% – Promo Terbatas!</div>
                <div className="text-xs text-gray-500 italic">
                  Promo berakhir dalam <span className="font-semibold text-red-500">{promoTimeLeft}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {(showAllEnterprise ? enterpriseFeatures : enterpriseFeatures.slice(0, 6)).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setShowAllEnterprise(!showAllEnterprise)}
                    className="mt-2 text-pink-500 text-sm font-semibold flex items-center justify-center mx-auto focus:outline-none"
                  >
                    {showAllEnterprise ? "Sembunyikan Fitur" : "Lihat Fitur Lengkap"}
                    <svg
                      className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${showAllEnterprise ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <Button onClick={() =>
                    window.open(
                      'https://wa.me/62881011287735?text=Halo%20kak%2C%20aku%20berminat%20untuk%20beli%20paket%20%22Enterprise%20Package%22%20apakah%20bisa%20dibantu%3F',
                      '_blank'
                    )
                  }
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                >
                  Dapatkan Paket Ini!
                </Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Premium</CardTitle>
                <CardDescription className="mt-2">Solusi hemat budget dan terintegrasi</CardDescription>
                <br />
                <div className="text-4xl font-bold text-pink-500 my-2">
                  Rp 179K
                <span className="text-sm font-medium text-gray-500 line-through ml-2">Rp 250K</span>
                </div>
                <div className="text-sm text-red-600 font-semibold mb-1">Hemat 30% – Promo Terbatas!</div>
                {/* <div className="text-xs text-gray-500 italic">
                  Promo berakhir dalam <span className="font-semibold text-red-500">{promoTimeLeft}</span>
                </div> */}
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {(showAllPremium ? premiumFeatures : premiumFeatures.slice(0, 6)).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setShowAllPremium(!showAllPremium)}
                    className="mt-2 text-pink-500 text-sm font-semibold flex items-center justify-center mx-auto focus:outline-none"
                  >
                    {showAllPremium ? "Sembunyikan Fitur" : "Lihat Fitur Lengkap"}
                    <svg
                      className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${showAllPremium ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                <Button onClick={() =>
                    window.open(
                      'https://wa.me/62881011287735?text=Halo%20kak%2C%20aku%20berminat%20untuk%20beli%20paket%20%22Premium%20Package%22%20apakah%20bisa%20dibantu%3F',
                      '_blank'
                    )
                  }
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                >
                  Dapatkan Paket Ini!
                </Button>
              </CardContent>
            </Card>

            </>
          ) : (
             // Satuan Products
            <>

            {/* Wedding Planner Tools */}
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Wedding Planner Tools</CardTitle>
                <br />
                <div className="text-4xl font-bold text-pink-500 my-2">
                  Rp 59K
                  <span className="text-sm font-medium text-gray-500 line-through ml-2">Rp 99K</span>
                </div>
                <div className="text-sm text-red-600 font-semibold mb-1">Hemat 40% – Promo Terbatas!</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm"><b>Wedding Planner Tools</b></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">Bonus Moodboard Engagement/Wedding</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">Bonus E-Book Financial & Wedding</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">Gratis Update Fitur Baru</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">Akses Gratis Selamanya</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">Bisa Sharing Dengan Pasangan</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">Bisa Diakses dari Mana Saja & Kapan Saja</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">Bisa Diakses dari Berbagai Perangkat</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">Konsultasi Gratis</span>
                  </div>
                </div>

                <Button onClick={() =>
                    window.open(
                      'https://wa.me/62881011287735?text=Halo%20kak%2C%20aku%20berminat%20untuk%20beli%20produk%20%22Wedding%20Planner%20Tools%22%20apakah%20bisa%20dibantu%3F',
                      '_blank'
                    )
                  }
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white"
                >
                  Dapatkan Sekarang
                </Button>
              </CardContent>
            </Card>

            {/* Digital Invitation Website */}
            <Card className="border-pink-300 hover:shadow-xl transition-shadow relative scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Digital Invitation Website</CardTitle>
                <br />
                <div className="text-4xl font-bold text-pink-500 my-2">
                  Rp 129K
                  <span className="text-sm font-medium text-gray-500 line-through ml-2">Rp 189K</span>
                </div>
                <div className="text-sm text-red-600 font-semibold mb-1">Hemat 30% – Promo Terbatas!</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm"><b>Digital Invitation Website</b></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">Bonus Moodboard & E-Book Wedding</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">200+ Template Premium Bebas Pilih Desain</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">Bisa Custom Domain Sendiri</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">Bebas Input Nama Tamu Sebanyak-Banyaknya</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">Akses Link Aktif Hingga 12 Bulan</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">Ratusan Pilihan Music Latar & Bisa Custom</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">Bisa di Buatkan Oleh Admin</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">Konsultasi Gratis</span>
                  </div>
                </div>
                <Button onClick={() =>
                    window.open(
                      'https://wa.me/62881011287735?text=Halo%20kak%2C%20aku%20berminat%20untuk%20beli%20produk%20%22Digital%20Invitation%20Website%22%20apakah%20bisa%20dibantu%3F',
                      '_blank'
                    )
                  }
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                >
                  Dapatkan Sekarang
                </Button>
              </CardContent>
            </Card>

            {/* Digital Guestbook */}
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Digital Guest Book QR Code</CardTitle>
                <br />
                <div className="text-4xl font-bold text-pink-500 my-2">
                  Rp 99K
                  <span className="text-sm font-medium text-gray-500 line-through ml-2">Rp 149K</span>
                </div>
                <div className="text-sm text-red-600 font-semibold mb-1">Hemat 33% – Promo Terbatas!</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm"><b>Digital Guest Book - QR Code & Selfie Check-In</b></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">Bonus Moodboard & E-Book Wedding</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">File Foto Selfie Bisa di Unduh</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">Real-Time Display – Ditampilkan di Layar / TV</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">Export Semua Data Tamu Hadir ke Excel</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">Statistik Kehadiran Real-Time</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">Mudah Input Daftar Tamu Import Dengan Excel</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">Bisa Check-In Manual / Otomatis Dengan QR Code</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">Bisa Share Undangan ke Tamu via Whatsapp</span>
                  </div>
                </div>
                <Button onClick={() =>
                    window.open(
                      'https://wa.me/62881011287735?text=Halo%20kak%2C%20aku%20berminat%20untuk%20beli%20produk%20%22Digital%20Guest%20Book%22%20apakah%20bisa%20dibantu%3F',
                      '_blank'
                    )
                  }
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                >
                  Dapatkan Sekarang
                </Button>
              </CardContent>
            </Card>
            </>
          )}
          </div>

        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimoni">
      <TestimonialSlider />
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Pertanyaan yang sering ditanyakan seputar layanan kami
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border-0 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-pink-500">
                Apakah bisa custom design sesuai tema pernikahan kami?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Tentu saja! Kami menyediakan berbagai template yang dapat disesuaikan dengan tema dan warna pernikahan Anda. Untuk paket Premium dan Enterprise, Anda juga bisa request custom design khusus.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border-0 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-pink-500">
                Berapa lama proses pembuatan website undangan?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Untuk template standar, website undangan Anda akan siap dalam 1-2 hari kerja. Untuk custom design, membutuhkan waktu 3-5 hari kerja tergantung kompleksitas design yang diinginkan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border-0 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-pink-500">
                Apakah ada batasan jumlah tamu yang bisa mengakses?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Untuk paket Basic dan Premium, tidak ada batasan jumlah tamu yang mengakses website. Untuk paket Enterprise, Anda mendapat unlimited access dan bandwidth premium untuk performa optimal.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border-0 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-pink-500">
                Bagaimana cara kerja digital guestbook dengan QR Code?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Setiap tamu akan mendapatkan QR Code unik yang terhubung dengan undangan digital mereka. Saat hadir di acara, QR tersebut tinggal di-scan oleh usher/operator menggunakan smartphone. Setelah di-scan, sistem kami otomatis mencatat kehadiran dan membuka halaman untuk isi buku tamu digital — tanpa perlu aplikasi tambahan. Semua data tamu langsung terekam rapi dan bisa diunduh setelah acara.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-6 border-0 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-pink-500">
                Apakah data dan foto aman disimpan?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Sangat aman! Kami menggunakan server cloud premium dengan enkripsi SSL. Semua data dan foto disimpan dengan aman dan bisa Anda download kapan saja. Kami juga menyediakan backup otomatis untuk memastikan data tidak hilang.
              </AccordionContent>
            </AccordionItem>

            {/* Tambahan FAQ dari ketiga produk */}

            <AccordionItem value="item-6" className="bg-white rounded-lg px-6 border-0 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-pink-500">
                Tools wedding planner ini cocok untuk siapa?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Cocok banget untuk calon pengantin yang ingin lebih terstruktur dalam merencanakan pernikahan — terutama yang pengen hemat biaya WO atau masih di tahap awal perencanaan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white rounded-lg px-6 border-0 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-pink-500">
                Apakah spreadsheet-nya bisa dipakai bareng pasangan?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Bisa banget! Kami menggunakan format Google Sheets yang bisa diakses dan diedit bersama secara real-time oleh Anda dan pasangan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white rounded-lg px-6 border-0 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-pink-500">
                Apakah buku tamu digital ini butuh aplikasi tambahan?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Tidak perlu. Tamu hanya perlu scan QR Code dan akan langsung diarahkan ke halaman digital guestbook melalui browser — tanpa perlu download atau install apa pun.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-white rounded-lg px-6 border-0 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-pink-500">
                Bisa gak undangan digital ini menampilkan galeri prewedding?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Tentu! Kami menyediakan section khusus untuk galeri foto atau video prewedding agar tamu bisa melihat momen spesial Anda sebelum hari H.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="bg-white rounded-lg px-6 border-0 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-pink-500">
                Apakah saya bisa konsultasi dulu sebelum pesan?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Bisa banget! Kami justru menyarankan Anda untuk konsultasi dulu agar kami bisa bantu pilihkan paket dan solusi terbaik sesuai kebutuhan pernikahan Anda. Langsung klik tombol WhatsApp di halaman ini ya!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Section 1 - Logo & Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
              <a href="#" className="flex items-center space-x-2">
                <img src="/assets/logo.png" alt="Logo Ramkative" className="h-10 w-auto" />
              </a>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Solusi digital terpercaya untuk pernikahan mudah dan modern. Kami siap bantu mewujudkan pernikahan impian kamu dengan mudah dan dipadukan dengan teknologi terdepan serta desain yang memukau.
              </p>
              <p className="text-sm text-gray-400">
                © 2024 Ramkative. All rights reserved.
              </p>
            </div>

            {/* Section 2 - Social Media */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Ikuti Kami</h3>
              <div className="space-y-3">
              <a 
                href="https://www.instagram.com/ramkative" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-pink-500 transition-colors"
              >
                <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                  <img src="assets\instagram.png" alt="Instagram" className="w-5 h-5" />
                </div>
                <span>@ramkative</span>
              </a>
              <a 
                href="https://www.tiktok.com/@dwp_byramkative" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-pink-500 transition-colors"
              >
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <img src="assets\tiktok.png" alt="Tiktok" className="w-5 h-5" />
                </div>
                <span>Ramkative</span>
              </a>
              <a 
                href="https://www.youtube.com/@ramkative" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-pink-500 transition-colors"
              >
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                  <img src="assets\youtube.png" alt="YouTube" className="w-6 h-4" />
                </div>
                <span>Ramkative</span>
              </a>
                <a href="https://wa.me/62881011287735"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-pink-500 transition-colors"
                >
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <img src="assets\whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
                  </div>
                  <span>Chat Admin</span>
                </a>

              </div>
            </div>

            {/* Section 3 - Payment Methods */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Metode Pembayaran</h3>
              <div className="grid grid-cols-4 gap-3">
                <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                  <img src="assets\bca.webp" alt="Logo BCA" className="h-6" />
                </div>
                <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                  <img src="assets\bni.webp" alt="Logo BNI" className="h-6" />
                </div>
                <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                  <img src="assets\ocbc.png" alt="Logo OCBC" className="h-6" />
                </div>
                <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                  <img src="assets\dbs.png" alt="Logo DBS" className="h-6" />
                </div>
                <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                  <img src="assets\seabank.png" alt="Logo Qris" className="h-6" />
                </div>
                <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                  <img src="assets\atmbersama.png" alt="Logo Qris" className="h-6" />
                </div>
                <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                  <img src="assets\dana.webp" alt="Logo Dana" className="h-6" />
                </div>
                <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                  <img src="assets\gopay.webp" alt="Logo Gopay" className="h-6" />
                </div>
                <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                  <img src="assets\ovo.webp" alt="Logo Ovo" className="h-6" />
                </div>
                <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                  <img src="assets\shopepay.webp" alt="Logo ShopePay" className="h-6" />
                </div>
                <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                  <img src="assets\linkaja.png" alt="Logo Qris" className="h-6" />
                </div>
                <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                  <img src="assets\mastercard.webp" alt="Logo Mastercard" className="h-6" />
                </div>
                <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                  <img src="assets\visa.webp" alt="Logo Visa" className="h-6" />
                </div>
                <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                  <img src="assets\qris.png" alt="Logo Qris" className="h-6" />
                </div>
                <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                  <img src="assets\bitcoin.png" alt="Logo Qris" className="h-6" />
                </div>
                <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                  <img src="assets\paypal.png" alt="Logo Qris" className="h-6" />
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Pembayaran aman dan terpercaya dengan berbagai pilihan metode pembayaran.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
