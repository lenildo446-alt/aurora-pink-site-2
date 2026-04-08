import { useEffect, useRef } from "react";
import img1b8a1251 from "@assets/1b8a1251_1774918629135.jpg";
import img1b8a1241 from "@assets/1b8a1241_(1)_1774918629144.jpg";
import img1b8a1201 from "@assets/1b8a1201-editar_1774918629162.jpg";
import img1b8a1196 from "@assets/1b8a1196_1774918629180.jpg";
import imgAuroraFt11 from "@assets/AURORA_-_Ft_11_(1)_1774918629190.png";
import img1b8a1358 from "@assets/1b8a1358_1774918629206.jpg";
import img1b8a1258 from "@assets/1b8a1258_1774918629214.jpg";
import img1b8a1370 from "@assets/1b8a1370_1774918629221.jpg";
import imgArmpit from "@assets/file_00000000569471f5bd36f8f22c63377c_1774918629231.png";
import imgNeck from "@assets/Screenshot_20260311_102120_Chrome_1774918629237.jpg";
import imgGroin from "@assets/Screenshot_20260311_102023_Chrome_1774918629242.jpg";
import imgAuroraFt03 from "@assets/AURORA_-_Ft_03_1774918629247.png";
import img3potes from "@assets/1b8a1314-editar_(1)_1774918629254.jpg";
import img2potes from "@assets/1b8a1328-editar_1774918629259.jpg";
import imgKnee from "@assets/Screenshot_20260311_102103_Chrome_1774918629264.jpg";
import imgVirilha from "@assets/Screenshot_20260311_102038_Chrome_1774918629269.jpg";

const CHECKOUT_1 = "https://app.coinzz.com.br/checkout/checkout-1-kqq0m-0";
const CHECKOUT_2 = "https://app.coinzz.com.br/checkout/checkout-2-0";
const CHECKOUT_3 = "https://app.coinzz.com.br/checkout/checkout-3-0";
const WHATSAPP = "https://wa.me/5519990099591";

export default function SalesPage() {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* TOP BAR */}
      <div className="bg-pink-600 text-white text-center py-2.5 px-4 text-xs sm:text-sm font-semibold tracking-wide">
        <span className="mr-3">🔥 PAGAMENTO NA ENTREGA — VOCÊ SÓ PAGA QUANDO RECEBER</span>
        <span>🚚 FRETE GRÁTIS PARA TODO BRASIL</span>
      </div>

      {/* HERO */}
      <section className="hero-gradient min-h-screen flex items-center px-4 py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-pink-200/30 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-pink-300/20 blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-center lg:text-left">
            <div className="inline-block bg-pink-100 text-pink-700 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
              Aurora Pink — Creme Clareador
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
              Sua pele está{" "}
              <span className="text-pink-500">manchada, com melasma</span> e você já tentou de tudo…{" "}
              <span className="text-pink-600">sem resultado?</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Talvez o problema não seja você — você só ainda não encontrou o tratamento certo.
            </p>

            <button
              onClick={scrollToOffer}
              className="shimmer-btn pulse-glow w-full sm:w-auto text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-full mb-8 uppercase tracking-wide inline-block cursor-pointer border-0"
            >
              QUERO CLAREAR MINHA PELE AGORA
            </button>

            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto lg:mx-0">
              {[
                "Você recebe primeiro",
                "Paga depois",
                "Zero risco",
                "Frete grátis para todo Brasil",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-pink-500 font-bold text-base">✔</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="float-animation relative">
              <div className="absolute inset-0 bg-pink-300/20 blur-3xl rounded-full scale-110"></div>
              <img
                src={imgAuroraFt11}
                alt="Aurora Pink Creme Clareador"
                className="relative z-10 w-72 sm:w-80 lg:w-96 rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center scroll-reveal">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-3">
            Isso te soa familiar?
          </h2>
          <p className="text-pink-500 font-semibold mb-10">Você não está sozinha nessa</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "💸", text: "Cremes caros que não funcionam" },
              { icon: "🌿", text: "Receitas caseiras que irritam a pele" },
              { icon: "🏥", text: "Tratamentos caros sem resultado" },
              { icon: "😔", text: "Manchas que só pioram com o tempo" },
              { icon: "😞", text: "Vergonha da sua própria pele" },
              { icon: "💔", text: "Autoestima lá no chão" },
            ].map((item) => (
              <div
                key={item.text}
                className="bg-pink-50 border border-pink-100 rounded-2xl p-5 text-left card-hover"
              >
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <p className="text-gray-700 font-medium text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESEJADO */}
      <section className="py-20 px-4 pink-gradient">
        <div className="max-w-5xl mx-auto text-center scroll-reveal">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-8">
            Imagine sua pele{" "}
            <span className="text-pink-600">uniforme, clara e saudável</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <img
              src={img1b8a1201}
              alt="Mulher feliz com Aurora Pink"
              className="w-full rounded-3xl shadow-xl object-cover h-80"
            />
            <img
              src={img1b8a1258}
              alt="Aurora Pink resultados"
              className="w-full rounded-3xl shadow-xl object-cover h-80"
            />
          </div>

          <div className="bg-white/80 backdrop-blur rounded-3xl p-8 shadow-lg inline-block max-w-lg">
            <p className="text-xl font-bold text-gray-800 mb-2">
              Aurora Pink — Creme Clareador e Hidratante
            </p>
            <p className="text-pink-600 font-semibold">
              A solução que realmente funciona para manchas e melasma
            </p>
          </div>
        </div>
      </section>

      {/* ANTES E DEPOIS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto scroll-reveal">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 text-center mb-3">
            Resultados Reais
          </h2>
          <p className="text-center text-pink-500 font-semibold mb-12">
            Veja a transformação com seus próprios olhos
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { img: imgArmpit, label: "Axila", alt: "Resultado axila Aurora Pink" },
              { img: imgKnee, label: "Joelho", alt: "Resultado joelho Aurora Pink" },
              { img: imgNeck, label: "Pescoço", alt: "Resultado pescoço Aurora Pink" },
              { img: imgVirilha, label: "Virilha", alt: "Resultado virilha Aurora Pink" },
            ].map((item) => (
              <div key={item.label} className="card-hover">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-pink-100">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-pink-600 text-white font-bold text-sm px-4 py-1.5 rounded-full shadow">
                      {item.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={img1b8a1241} alt="Aplicação Aurora Pink" className="w-full rounded-3xl shadow-lg object-cover h-64" />
            <img src={img1b8a1358} alt="Aurora Pink uso diário" className="w-full rounded-3xl shadow-lg object-cover h-64" />
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20 px-4 pink-gradient">
        <div className="max-w-5xl mx-auto scroll-reveal">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-2">
              ⭐ Avaliações Reais de Clientes
            </h2>
            <p className="text-pink-600 font-semibold">Mais de 10.000 mulheres já transformaram sua pele</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                name: "Juliana Souza",
                city: "São Paulo",
                text: "Em poucas semanas já vi diferença nas manchas!",
              },
              {
                name: "Camila Ferreira",
                city: "Rio de Janeiro",
                text: "Clareou muito e não irritou minha pele!",
              },
              {
                name: "Patrícia Alves",
                city: "Belo Horizonte",
                text: "Vale muito a pena, me surpreendi!",
              },
              {
                name: "Aline Santos",
                city: "Campinas",
                text: "Minhas manchas diminuíram bastante!",
              },
              {
                name: "Fernanda Lima",
                city: "Curitiba",
                text: "Minha autoestima mudou totalmente!",
              },
            ].map((r) => (
              <div
                key={r.name}
                className="bg-white rounded-3xl p-6 shadow-md card-hover border border-pink-50"
              >
                <div className="text-yellow-400 text-lg mb-3">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 text-sm mb-4 italic leading-relaxed">
                  "{r.text}"
                </p>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{r.name}</p>
                  <p className="text-pink-500 text-xs">{r.city}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <img
              src={img1b8a1370}
              alt="Cliente satisfeita com Aurora Pink"
              className="w-72 sm:w-80 mx-auto rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* MODO DE USAR */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center scroll-reveal">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-2">
            Modo de Usar
          </h2>
          <p className="text-pink-500 font-semibold mb-12">Simples e Eficaz</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-12">
            {[
              { num: "150g", label: "por pote" },
              { num: "2x", label: "ao dia — manhã e noite" },
              { num: "30 dias", label: "duração por pote" },
              { num: "4 meses", label: "tratamento ideal" },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-pink-50 border-2 border-pink-100 rounded-2xl p-5 card-hover"
              >
                <p className="text-2xl font-extrabold text-pink-600 mb-1">{item.num}</p>
                <p className="text-xs text-gray-600 leading-snug">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={img1b8a1251} alt="Como usar Aurora Pink" className="w-full rounded-3xl shadow-lg object-cover h-64" />
            <img src={imgAuroraFt03} alt="Aurora Pink produto" className="w-full rounded-3xl shadow-lg object-cover h-64" />
          </div>
        </div>
      </section>

      {/* SEGURANÇA */}
      <section className="py-16 px-4 pink-gradient">
        <div className="max-w-4xl mx-auto text-center scroll-reveal">
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-800 mb-10">
            Sua compra é segura com a Aurora Pink
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: "🔒", title: "Site Seguro", desc: "Compra protegida" },
              { icon: "📦", title: "Entrega Garantida", desc: "Rastreamento incluído" },
              { icon: "🚚", title: "Frete Grátis", desc: "Para todo o Brasil" },
              { icon: "💬", title: "WhatsApp", desc: "Atendimento rápido" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-4 shadow-md card-hover"
              >
                <span className="text-3xl mb-2 block">{item.icon}</span>
                <p className="font-bold text-gray-800 text-sm mb-1">{item.title}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto scroll-reveal">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 text-center mb-3">
            Escolha seu Kit Aurora Pink
          </h2>
          <p className="text-center text-pink-500 font-semibold mb-12">
            Pagamento na entrega — você só paga quando receber
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* 1 unidade */}
            <div className="border-2 border-pink-100 rounded-3xl p-6 text-center card-hover bg-pink-50/40">
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">1 Unidade</p>
              <div className="mb-4 flex justify-center">
                <img
                  src={imgAuroraFt03}
                  alt="1 pote Aurora Pink"
                  className="w-40 h-40 object-cover rounded-2xl shadow-md"
                />
              </div>
              <p className="text-3xl font-extrabold text-gray-800 mb-1">
                R$ 136,<span className="text-xl">90</span>
              </p>
              <p className="text-xs text-gray-500 mb-6">+ frete grátis</p>
              <a
                href={CHECKOUT_1}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3.5 rounded-full transition-colors text-sm"
              >
                COMPRAR AGORA
              </a>
            </div>

            {/* 2 unidades */}
            <div className="border-2 border-pink-200 rounded-3xl p-6 text-center card-hover bg-pink-50/60 relative">
              <div className="mb-4 flex justify-center">
                <img
                  src={img2potes}
                  alt="2 potes Aurora Pink"
                  className="w-40 h-40 object-cover rounded-2xl shadow-md"
                />
              </div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">2 Unidades</p>
              <p className="text-3xl font-extrabold text-gray-800 mb-1">
                R$ 189,<span className="text-xl">90</span>
              </p>
              <p className="text-xs text-gray-500 mb-6">+ frete grátis</p>
              <a
                href={CHECKOUT_2}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3.5 rounded-full transition-colors text-sm"
              >
                COMPRAR AGORA
              </a>
            </div>

            {/* 3 unidades — destaque */}
            <div className="border-2 border-pink-400 rounded-3xl p-6 text-center card-hover bg-gradient-to-b from-pink-50 to-pink-100 relative shadow-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-pink-600 text-white text-xs font-extrabold px-5 py-1.5 rounded-full whitespace-nowrap shadow">
                  🔥 Melhor custo-benefício
                </span>
              </div>
              <p className="text-sm font-bold text-pink-700 uppercase tracking-wide mb-4 mt-2">3 Unidades</p>
              <div className="mb-4 flex justify-center">
                <img
                  src={img3potes}
                  alt="3 potes Aurora Pink"
                  className="w-40 h-40 object-cover rounded-2xl shadow-md"
                />
              </div>
              <p className="text-3xl font-extrabold text-gray-800 mb-1">
                R$ 259,<span className="text-xl">90</span>
              </p>
              <p className="text-xs text-gray-500 mb-6">+ frete grátis</p>
              <a
                href={CHECKOUT_3}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-btn block w-full text-white font-extrabold py-4 rounded-full transition-colors text-sm pulse-glow"
              >
                QUERO ESTE KIT
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1"><span className="text-green-500">✔</span> Pagamento na entrega</span>
            <span className="flex items-center gap-1"><span className="text-green-500">✔</span> Frete grátis</span>
            <span className="flex items-center gap-1"><span className="text-green-500">✔</span> Sem risco</span>
            <span className="flex items-center gap-1"><span className="text-green-500">✔</span> Rastreamento incluído</span>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-4 hero-gradient">
        <div className="max-w-2xl mx-auto text-center scroll-reveal">
          <img src={img1b8a1196} alt="Aurora Pink kit 3 potes" className="w-64 mx-auto rounded-3xl shadow-xl mb-10 float-animation" />

          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4">
            Receba primeiro. Pague depois.
            <span className="block text-pink-600">Estoque limitado.</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Aproveite agora e transforme sua pele com a Aurora Pink.
          </p>

          <button
            onClick={scrollToOffer}
            className="shimmer-btn pulse-glow text-white font-extrabold text-base sm:text-lg px-10 py-4 rounded-full uppercase tracking-wide border-0 cursor-pointer w-full sm:w-auto"
          >
            QUERO MEU KIT AURORA PINK
          </button>

          <div className="mt-6 flex justify-center">
            <span className="flex items-center gap-2 text-gray-600 text-sm">
              <span className="text-green-500 font-bold">✔</span>
              Frete grátis para todo Brasil
            </span>
          </div>
        </div>
      </section>

      {/* WHATSAPP */}
      <section className="py-12 px-4 bg-white text-center">
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-sm sm:text-base transition-colors shadow-lg"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Falar com especialista no WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-pink-700 text-white/80 text-center py-6 px-4 text-sm">
        © 2026 Aurora Pink. Todos os direitos reservados.
      </footer>

      {/* WhatsApp floating button */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
