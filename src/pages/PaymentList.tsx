import React, { useState, useMemo } from 'react';
import { Search, Copy, Shield, Lock, CheckCircle, Eye, CreditCard, Smartphone, Building, Bitcoin, Globe } from 'lucide-react';

interface PaymentMethod {
  id: string;
  name: string;
  institution: string;
  type: 'Bank' | 'E-wallet' | 'Kartu Kredit' | 'Kripto' | 'Gateway';
  accountNumber: string;
  recipientName: string;
  logo: string;
  color: string;
  qrImage?: string;
}

const paymentMethods: PaymentMethod[] = [
  {
    id: 'bca',
    name: 'Bank BCA',
    institution: 'Bank Central Asia',
    type: 'Bank',
    accountNumber: '5050088661',
    recipientName: 'Ramadhan',
    logo: '/assets/bca.webp',
    color: 'bg-blue-500'
  },
  {
    id: 'bni',
    name: 'Bank BNI',
    institution: 'Bank Negara Indonesia',
    type: 'Bank',
    accountNumber: '1857726451',
    recipientName: 'Ramadhan',
    logo: '/assets/bni.webp',
    color: 'bg-orange-500'
  },
  {
    id: 'ocbc',
    name: 'OCBC NISP',
    institution: 'OCBC NISP',
    type: 'Bank',
    accountNumber: '565810129074',
    recipientName: 'Ramadhan',
    logo: '/assets/ocbc.png',
    color: 'bg-red-500'
  },
  {
    id: 'dbs',
    name: 'DBS Bank',
    institution: 'DBS Bank',
    type: 'Bank',
    accountNumber: '1707835511',
    recipientName: 'Ramadhan',
    logo: '/assets/dbs.png',
    color: 'bg-purple-500'
  },
  {
    id: 'seabank',
    name: 'SeaBank',
    institution: 'SeaBank Indonesia',
    type: 'Bank',
    accountNumber: '5050088661',
    recipientName: 'Ramadhan',
    logo: '/assets/seabank.png',
    color: 'bg-teal-500'
  },
  {
    id: 'atm-bersama',
    name: 'ATM Bersama',
    institution: 'ATM Bersama',
    type: 'Bank',
    accountNumber: '5050088661',
    recipientName: 'Ramadhan',
    logo: '/assets/atmbersama.png',
    color: 'bg-green-500'
  },
  {
    id: 'dana',
    name: 'DANA',
    institution: 'DANA Indonesia',
    type: 'E-wallet',
    accountNumber: '085721207992',
    recipientName: 'Ramadhan',
    logo: '/assets/dana.webp',
    color: 'bg-blue-600'
  },
  {
    id: 'gopay',
    name: 'GoPay',
    institution: 'PT Gojek Indonesia',
    type: 'E-wallet',
    accountNumber: '085721207992',
    recipientName: 'Ramadhan',
    logo: '/assets/gopay.webp',
    color: 'bg-green-600'
  },
  {
    id: 'ovo',
    name: 'OVO',
    institution: 'PT Visionet Internasional',
    type: 'E-wallet',
    accountNumber: '085721207992',
    recipientName: 'Ramadhan',
    logo: '/assets/ovo.webp',
    color: 'bg-purple-600'
  },
  {
    id: 'shopeepay',
    name: 'ShopeePay',
    institution: 'PT Shopee International',
    type: 'E-wallet',
    accountNumber: '085721207992',
    recipientName: 'Ramadhan',
    logo: '/assets/shopepay.webp',
    color: 'bg-orange-600'
  },
  {
    id: 'linkaja',
    name: 'LinkAja',
    institution: 'PT Fintek Karya Nusantara',
    type: 'E-wallet',
    accountNumber: '085721207992',
    recipientName: 'Ramadhan',
    logo: '/assets/linkaja.png',
    color: 'bg-red-600'
  },
  {
    id: 'mandiri',
    name: 'Bank Mega',
    institution: 'PT Bank Mega',
    type: 'Bank',
    accountNumber: '010940021004511',
    recipientName: 'Ramadhan',
    logo: '/assets/mega.png', // pastikan file tersedia
    color: 'bg-yellow-500'
  },
  {
    id: 'visa',
    name: 'Visa Bank Mega',
    institution: 'Visa Inc.',
    type: 'Kartu Kredit',
    accountNumber: '010940021004511',
    recipientName: 'Ramadhan',
    logo: '/assets/visa.webp',
    color: 'bg-blue-700'
  },
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    institution: 'Bitcoin Network',
    type: 'Kripto',
    accountNumber: '1Lz16nPQf6g9RnEFMkxiqgTPVWd2gCS93S',
    recipientName: 'Ramadhan',
    logo: '/assets/bitcoin.png',
    color: 'bg-orange-400'
  },
  {
    id: 'paypal',
    name: 'PayPal',
    institution: 'PayPal Holdings Inc.',
    type: 'Gateway',
    accountNumber: 'https://www.paypal.com/paypalme/zxcrama',
    recipientName: 'Ramadhan',
    logo: '/assets/paypal.png',
    color: 'bg-blue-800'
  },
  {
    id: 'qris',
    name: 'QRIS',
    institution: 'Qris Indonesia',
    type: 'Gateway',
    accountNumber: '', // kosongkan
    recipientName: '', // kosongkan
    logo: '/assets/qris.png',
    color: 'bg-indigo-600',
    qrImage: '/assets/qris-gopay.jpeg'
  },
 {
    id: 'qris',
    name: 'QRIS',
    institution: 'Qris Indonesia',
    type: 'Gateway',
    accountNumber: '', // kosongkan
    recipientName: '', // kosongkan
    logo: '/assets/qris.png',
    color: 'bg-indigo-600',
    qrImage: '/assets/qris-id.jpeg'
 },
 {
    id: 'qris',
    name: 'QRIS',
    institution: 'Qris Indonesia',
    type: 'Gateway',
    accountNumber: '', // kosongkan
    recipientName: '', // kosongkan
    logo: '/assets/qris.png',
    color: 'bg-indigo-600',
    qrImage: '/assets/qris-id2.jpeg'
 }

];

const typeIcons = {
  Bank: Building,
  'E-wallet': Smartphone,
  'Kartu Kredit': CreditCard,
  Kripto: Bitcoin,
  Gateway: Globe
};

const PaymentMethodsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['Semua', 'Bank', 'E-wallet', 'Kartu Kredit', 'Kripto', 'Gateway'];

  const filteredMethods = useMemo(() => {
    return paymentMethods.filter(method => {
      const matchesSearch = method.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           method.institution.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Semua' || method.type === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const TypeIcon = ({ type }: { type: PaymentMethod['type'] }) => {
    const Icon = typeIcons[type];
    return <Icon className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 py-8 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl mb-6 shadow-lg">
            <CreditCard className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Metode Pembayaran
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Pilih metode pembayaran yang paling sesuai untuk kebutuhan transaksi Anda
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20" />
            <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari metode pembayaran..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-2xl"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80 border border-white/30 shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {filteredMethods.map((method) => (
            <div
              key={method.id}
              className="group relative bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-white/20"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Header dengan logo dan nama */}
              <div className={`${method.color} p-3 md:p-4 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-6 -mt-6 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10 text-center">
                  <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300">
                <img src={method.logo} alt={method.name} className="h-6 md:h-8 object-contain mx-auto" />
                </div>
                  <h3 className="font-bold text-sm md:text-base truncate">{method.name}</h3>
                  <div className="flex items-center justify-center space-x-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full mt-2 border border-white/30">
                    <TypeIcon type={method.type} />
                    <span className="text-xs font-medium">{method.type}</span>
                  </div>
                </div>
              </div>

              {/* Body dengan informasi detail */}
<div className="p-3 md:p-4 space-y-3 relative z-10">
  {method.id === 'qris' ? (
    <div className="flex justify-center">
      <img
        src={method.qrImage}
        alt="QRIS Code"
        className="w-full max-w-[180px] rounded-lg border border-gray-200 shadow"
      />
    </div>
  ) : (
    <div className="space-y-2">
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1">
          Nomor Rekening / ID
        </label>
        <div className="flex items-center space-x-1">
          <code className="flex-1 bg-gray-100/80 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-mono text-gray-800 border border-gray-200/50 truncate">
            {method.accountNumber}
          </code>
          <button
            onClick={() => copyToClipboard(method.accountNumber, method.id)}
            className="p-1 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all duration-200 hover:scale-110"
          >
            {copiedId === method.id ? (
              <CheckCircle className="w-3 h-3 text-green-500" />
            ) : (
              <Copy className="w-3 h-3" />
            )}
          </button>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1">
          Nama Penerima
        </label>
        <div className="bg-gray-50/80 backdrop-blur-sm px-2 py-1 rounded-lg text-xs text-gray-800 border border-gray-200/50 truncate">
          {method.recipientName}
        </div>
      </div>
    </div>
  )}
</div>

            </div>
          ))}
        </div>

        {/* Security Information */}
        <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl p-8 border border-white/20 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 rounded-3xl" />
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
                Pembayaran Aman & Terpercaya
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Dengan berbagai pilihan metode pembayaran yang telah terverifikasi dan sistem keamanan berlapis
              </p>
            </div>

            {/* Security Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
              <div className="group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-2xl text-white text-center shadow-lg hover:shadow-xl">
                  <Shield className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-semibold text-sm mb-1">SSL 256-bit</h3>
                  <p className="text-xs opacity-90">Enkripsi</p>
                </div>
              </div>

              <div className="group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-2xl text-white text-center shadow-lg hover:shadow-xl">
                  <Lock className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-semibold text-sm mb-1">Data Aman</h3>
                  <p className="text-xs opacity-90">Terenkripsi</p>
                </div>
              </div>

              <div className="group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-4 rounded-2xl text-white text-center shadow-lg hover:shadow-xl">
                  <Eye className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-semibold text-sm mb-1">Monitor 24/7</h3>
                  <p className="text-xs opacity-90">Real-time</p>
                </div>
              </div>

              <div className="group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-2xl text-white text-center shadow-lg hover:shadow-xl">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-semibold text-sm mb-1">Verified</h3>
                  <p className="text-xs opacity-90">Terpercaya</p>
                </div>
              </div>

              <div className="group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-2xl text-white text-center shadow-lg hover:shadow-xl">
                  <Globe className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-semibold text-sm mb-1">PCI DSS</h3>
                  <p className="text-xs opacity-90">Compliant</p>
                </div>
              </div>

              <div className="group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-violet-500 to-purple-600 p-4 rounded-2xl text-white text-center shadow-lg hover:shadow-xl">
                  <CreditCard className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-semibold text-sm mb-1">Multi Pay</h3>
                  <p className="text-xs opacity-90">Gateway</p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="flex flex-wrap justify-center items-center gap-6">
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Verified Secure</div>
                    <div className="text-xs text-gray-500">Bank Grade Security</div>
                  </div>
                </div>

                <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">ISO 27001</div>
                    <div className="text-xs text-gray-500">Certified Security</div>
                  </div>
                </div>

                <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Trusted Partner</div>
                    <div className="text-xs text-gray-500">Since 2020</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodsPage;