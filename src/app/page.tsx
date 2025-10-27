"use client";

import { useState } from 'react';
import { MapPin, Calendar, Users, Car, Building2, Phone, Mail, Clock, Star, CheckCircle, ArrowRight, Globe, Shield, Award } from 'lucide-react';

export default function LisbonToursPage() {
  const [activeTab, setActiveTab] = useState('tours');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    participants: '1',
    specialRequests: ''
  });

  const tours = [
    {
      id: 1,
      title: "Tour Histórico de Lisboa",
      description: "Explore os bairros históricos de Alfama, Bairro Alto e Chiado. Visite monumentos icônicos como o Mosteiro dos Jerónimos e Torre de Belém.",
      duration: "8 horas",
      price: "€85",
      image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&h=400&fit=crop",
      highlights: ["Mosteiro dos Jerónimos", "Torre de Belém", "Alfama", "Miradouros"]
    },
    {
      id: 2,
      title: "Cascais & Costa do Estoril",
      description: "Descubra a elegante Cascais e a famosa Costa do Estoril. Praias deslumbrantes, arquitetura única e gastronomia excepcional.",
      duration: "6 horas",
      price: "€75",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      highlights: ["Praia de Cascais", "Casino Estoril", "Museu Paula Rego", "Centro Histórico"]
    },
    {
      id: 3,
      title: "Sintra Mágica",
      description: "Visite o romântico Palácio da Pena, a misteriosa Quinta da Regaleira e o elegante Palácio de Monserrate.",
      duration: "8 horas",
      price: "€95",
      image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=600&h=400&fit=crop",
      highlights: ["Palácio da Pena", "Quinta da Regaleira", "Centro de Sintra", "Cabo da Roca"]
    },
    {
      id: 4,
      title: "Fátima Espiritual",
      description: "Experiência espiritual no Santuário de Fátima, um dos locais de peregrinação mais importantes do mundo católico.",
      duration: "6 horas",
      price: "€70",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      highlights: ["Santuário de Fátima", "Basílica", "Capela das Aparições", "Museu"]
    },
    {
      id: 5,
      title: "Óbidos Medieval",
      description: "Explore a vila medieval de Óbidos, com suas muralhas preservadas, ruas de pedra e arquitetura única.",
      duration: "5 horas",
      price: "€65",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      highlights: ["Muralhas de Óbidos", "Castelo", "Rua Direita", "Ginjinha de Óbidos"]
    },
    {
      id: 6,
      title: "Nazaré & Costa de Prata",
      description: "Descubra a tradicional vila piscatória da Nazaré, famosa pelas ondas gigantes e tradições marítimas.",
      duration: "7 horas",
      price: "€80",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      highlights: ["Praia da Nazaré", "Sítio da Nazaré", "Farol", "Tradições Marítimas"]
    }
  ];

  const services = [
    {
      icon: Car,
      title: "Transfer Executivo",
      description: "Transporte confortável e pontual para aeroportos, hotéis e eventos corporativos."
    },
    {
      icon: Building2,
      title: "Congressos & Feiras",
      description: "Organização completa de eventos corporativos, congressos e participação em feiras."
    },
    {
      icon: Users,
      title: "Turismo de Negócios",
      description: "Pacotes especializados para empresas com foco em networking e desenvolvimento de negócios."
    },
    {
      icon: Globe,
      title: "Tours Personalizados",
      description: "Roteiros exclusivos adaptados às necessidades específicas de cada cliente."
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setContactForm({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Reserva solicitada com sucesso! Confirmaremos a disponibilidade em breve.');
    setBookingForm({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      participants: '1',
      specialRequests: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900/90 to-amber-900/90 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1920&h=1080&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-amber-900/80" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
            Lisboa Business Tours
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Experiências únicas em Lisboa, Cascais, Sintra, Fátima, Óbidos e Nazaré
          </p>
          <p className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto">
            Especializados em turismo de negócios, congressos, feiras e transfers executivos. 
            Proporcionamos estadias de qualidade com serviços personalizados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setActiveTab('booking')}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Reservar Agora
            </button>
            <button 
              onClick={() => setActiveTab('tours')}
              className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Ver Tours
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 py-4">
            {[
              { id: 'tours', label: 'Tours', icon: MapPin },
              { id: 'services', label: 'Serviços', icon: Building2 },
              { id: 'calendar', label: 'Calendário', icon: Calendar },
              { id: 'booking', label: 'Reservas', icon: CheckCircle },
              { id: 'contact', label: 'Contato', icon: Phone }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === id
                    ? 'bg-gradient-to-r from-blue-600 to-amber-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Section */}
      {activeTab === 'tours' && (
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Nossos Tours Exclusivos
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Descubra as maravilhas de Portugal com nossos tours especializados, 
                perfeitos para turismo de negócios e experiências culturais únicas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map((tour) => (
                <div key={tour.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="relative h-64">
                    <img 
                      src={tour.image} 
                      alt={tour.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full font-bold">
                      {tour.price}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{tour.title}</h3>
                    <p className="text-gray-600 mb-4">{tour.description}</p>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {tour.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-amber-500" />
                        4.9/5
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-2">Destaques:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tour.highlights.map((highlight, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button 
                      onClick={() => setActiveTab('booking')}
                      className="w-full bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                    >
                      Reservar Tour
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {activeTab === 'services' && (
        <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Nossos Serviços
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Soluções completas para turismo de negócios, eventos corporativos e experiências personalizadas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Business Tourism Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Turismo de Negócios Especializado
              </h3>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-2xl font-semibold text-blue-800 mb-6">Congressos & Eventos</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span>Organização completa de congressos internacionais</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span>Participação em feiras e exposições</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span>Eventos de networking e team building</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span>Seminários e workshops especializados</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-2xl font-semibold text-amber-800 mb-6">Serviços Premium</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                      <span>Transfer executivo com motoristas profissionais</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                      <span>Guias especializados multilíngues</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Globe className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                      <span>Roteiros personalizados para cada empresa</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                      <span>Suporte 24/7 durante toda a estadia</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Calendar Section */}
      {activeTab === 'calendar' && (
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Planeje Sua Visita
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Consulte nosso calendário de eventos e disponibilidade para planejar sua experiência perfeita em Lisboa.
            </p>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Calendário de Eventos</h3>
                <p className="text-gray-600 mb-6">
                  Acesse nosso calendário completo para ver eventos, congressos, feiras e disponibilidade de tours.
                </p>
              </div>
              
              <a 
                href="https://lisbonvenues.pt/calendario/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Calendar className="w-6 h-6" />
                Ver Calendário Completo
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <div className="mt-8 grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-blue-800 mb-2">Eventos Corporativos</h4>
                  <p className="text-blue-600 text-sm">Congressos, seminários e conferências</p>
                </div>
                <div className="bg-amber-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-amber-800 mb-2">Feiras & Exposições</h4>
                  <p className="text-amber-600 text-sm">Participação em eventos do setor</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-green-800 mb-2">Tours Especiais</h4>
                  <p className="text-green-600 text-sm">Roteiros temáticos e sazonais</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Booking Section */}
      {activeTab === 'booking' && (
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-amber-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Reserva Online
              </h2>
              <p className="text-xl text-gray-600">
                Reserve seu tour ou serviço de forma rápida e segura. Confirmação imediata!
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Nome Completo *</label>
                    <input
                      type="text"
                      required
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Telefone *</label>
                    <input
                      type="tel"
                      required
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="+351 xxx xxx xxx"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Serviço Desejado *</label>
                    <select
                      required
                      value={bookingForm.service}
                      onChange={(e) => setBookingForm({...bookingForm, service: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="tour-lisboa">Tour Histórico de Lisboa</option>
                      <option value="tour-cascais">Cascais & Costa do Estoril</option>
                      <option value="tour-sintra">Sintra Mágica</option>
                      <option value="tour-fatima">Fátima Espiritual</option>
                      <option value="tour-obidos">Óbidos Medieval</option>
                      <option value="tour-nazare">Nazaré & Costa de Prata</option>
                      <option value="transfer">Transfer Executivo</option>
                      <option value="congresso">Organização de Congresso</option>
                      <option value="feira">Participação em Feira</option>
                      <option value="personalizado">Tour Personalizado</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Data Preferida *</label>
                    <input
                      type="date"
                      required
                      value={bookingForm.date}
                      onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Número de Participantes</label>
                    <select
                      value={bookingForm.participants}
                      onChange={(e) => setBookingForm({...bookingForm, participants: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      {[...Array(20)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'pessoa' : 'pessoas'}</option>
                      ))}
                      <option value="20+">Mais de 20 pessoas</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Solicitações Especiais</label>
                  <textarea
                    value={bookingForm.specialRequests}
                    onChange={(e) => setBookingForm({...bookingForm, specialRequests: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Descreva qualquer necessidade especial, preferências alimentares, acessibilidade, etc."
                  />
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-amber-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-3">Opções de Pagamento</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Cartão de Crédito</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Transferência Bancária</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>PayPal</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mt-3">
                    Pagamento seguro com confirmação imediata. Cancelamento gratuito até 24h antes.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Solicitar Reserva
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeTab === 'contact' && (
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Entre em Contato
              </h2>
              <p className="text-xl text-gray-600">
                Estamos aqui para tornar sua experiência em Lisboa inesquecível. Fale conosco!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Envie sua Mensagem</h3>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Nome *</label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Telefone</label>
                      <input
                        type="tel"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="+351 xxx xxx xxx"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Empresa</label>
                      <input
                        type="text"
                        value={contactForm.company}
                        onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Serviço de Interesse</label>
                    <select
                      value={contactForm.service}
                      onChange={(e) => setContactForm({...contactForm, service: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="tours">Tours Culturais</option>
                      <option value="transfer">Transfer Executivo</option>
                      <option value="congressos">Congressos & Eventos</option>
                      <option value="feiras">Feiras & Exposições</option>
                      <option value="personalizado">Serviço Personalizado</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Mensagem *</label>
                    <textarea
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Descreva suas necessidades e como podemos ajudar..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-600 to-amber-600 text-white rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Telefone</h4>
                        <p>+351 21 xxx xxxx</p>
                        <p className="text-sm opacity-90">Segunda a Sexta: 9h às 18h</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p>info@lisbonbusinesstours.pt</p>
                        <p className="text-sm opacity-90">Resposta em até 2 horas</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Localização</h4>
                        <p>Lisboa, Portugal</p>
                        <p className="text-sm opacity-90">Atendemos toda a região</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Por que Escolher-nos?</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Experiência Comprovada</h4>
                        <p className="text-gray-600 text-sm">Mais de 10 anos especializados em turismo de negócios</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Serviço Personalizado</h4>
                        <p className="text-gray-600 text-sm">Cada cliente recebe atenção individual e roteiros únicos</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Suporte 24/7</h4>
                        <p className="text-gray-600 text-sm">Assistência completa durante toda sua estadia</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Qualidade Garantida</h4>
                        <p className="text-gray-600 text-sm">Satisfação do cliente é nossa prioridade número 1</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
                Lisboa Business Tours
              </h3>
              <p className="text-gray-400 mb-4">
                Especializados em turismo de negócios e experiências únicas em Portugal.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-amber-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">LBT</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Nossos Tours</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Lisboa Histórica</li>
                <li>Cascais & Estoril</li>
                <li>Sintra Mágica</li>
                <li>Fátima Espiritual</li>
                <li>Óbidos Medieval</li>
                <li>Nazaré & Costa</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Transfer Executivo</li>
                <li>Congressos</li>
                <li>Feiras & Eventos</li>
                <li>Tours Personalizados</li>
                <li>Turismo de Negócios</li>
                <li>Suporte 24/7</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+351 21 xxx xxxx</li>
                <li>info@lisbonbusinesstours.pt</li>
                <li>Lisboa, Portugal</li>
                <li>Segunda a Sexta: 9h-18h</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Lisboa Business Tours. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}